"use client";
import { useAuth } from "@/contexts/AuthProvider";
import React, { useState } from "react";
import { storage } from "@/firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

interface ProfileData {
  github: string;
  twitter: string;
  phone: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  others: string;
  coverimage: string;
  photoURL: string;
  bio: string;
  technologyStack: string;
  email: string;
  displayName: string;
  username: string;
}

export default function EditProfile() {
  const { userProfile } = useAuth();
  const [formData, setFormData] = useState<ProfileData>({
    github: userProfile?.github || "",
    twitter: userProfile?.twitter || "",
    phone: userProfile?.phone || "",
    facebook: userProfile?.facebook || "",
    instagram: userProfile?.instagram || "",
    linkedin: userProfile?.linkedin || "",
    others: userProfile?.others || "",
    coverimage: userProfile?.coverimage || "",
    photoURL: userProfile?.photoURL || "",
    bio: userProfile?.bio || "",
    technologyStack: userProfile?.technologyStack || "",
    email: userProfile?.email || "",
    displayName: userProfile?.displayName || "",
    username: userProfile?.username || "",
  });

  const [uploadProgress, setUploadProgress] = useState<{
    photoURL: number;
    coverimage: number;
  }>({
    photoURL: 0,
    coverimage: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "photoURL" | "coverimage"
  ) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const storageRef = ref(
      storage,
      `images/${userProfile.uid}/portfolio/${file.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress((prev) => ({
          ...prev,
          [field]: Math.round(progress),
        }));
      },
      (error) => {
        console.error("Error uploading image:", error);
        alert("Image upload failed!");
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setFormData((prev) => ({ ...prev, [field]: downloadURL }));
        setUploadProgress((prev) => ({ ...prev, [field]: 0 }));
      }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LIOSERVER}/updateprofile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userProfile?.token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) throw new Error("Failed to update profile");
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Profile update failed!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4 flex-col-reverse">
        {Object.keys(formData).map((key) =>
          key !== "photoURL" && key !== "coverimage" ? (
            <div key={key} className="flex flex-col">
              <label className="font-semibold capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={key}
                value={formData[key as keyof ProfileData]}
                onChange={handleChange}
                className="border p-2 rounded-md"
              />
            </div>
          ) : (
            <div key={key} className="flex flex-col">
              <label className="font-semibold capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleImageUpload(e, key as "photoURL" | "coverimage")
                }
                className="border p-2 rounded-md"
              />
              {uploadProgress[key as "photoURL" | "coverimage"] > 0 && (
                <div className="h-2 bg-gray-200 rounded-md mt-2">
                  <div
                    className="h-full bg-blue-500 rounded-md"
                    style={{
                      width: `${
                        uploadProgress[key as "photoURL" | "coverimage"]
                      }%`,
                    }}
                  />
                </div>
              )}
              {formData[key as keyof ProfileData] && (
                <img
                  src={formData[key as keyof ProfileData]}
                  alt={key}
                  className="w-32 h-32 mt-2"
                />
              )}
            </div>
          )
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
