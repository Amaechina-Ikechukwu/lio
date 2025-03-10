"use client";
import React, { useRef, useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { collection, query, where, getDocs } from "firebase/firestore";

import Link from "next/link";
import { Spinner } from "flowbite-react";
import { db } from "@/firebase/config";

interface User {
  displayName: string;
  uid: string;
  username: string;
  // Add other user properties here
}

export default function SearchModal(props: {
  openModal: string;
  setOpenModal: () => void;
}) {
  const emailInputRef = useRef<HTMLInputElement>(null); // Added type annotation
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [users, setUsers] = useState<User[]>([]); // Added type annotation
  const usersRef = collection(db, "profile");

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoadingSpinner(true);
    const newValue = event.target.value.toLowerCase(); // Convert to lowercase
    setSearchTerm(newValue);
    try {
      const q = query(usersRef);
      const querySnapshot = await getDocs(q);

      const usersData: User[] = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data() as User;
        const lowerCaseDisplayName = userData.displayName.toLowerCase(); // Convert to lowercase
        if (lowerCaseDisplayName.includes(newValue)) {
          // Check for partial match
          usersData.push(userData);
        }
      });

      setUsers(usersData);
      setLoadingSpinner(false);
    } catch (error) {
      console.error("Error searching users:", error);
      setLoadingSpinner(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoadingSpinner(true);
      const q = query(usersRef, where("displayName", "==", searchTerm));
      const querySnapshot = await getDocs(q);

      const usersData: User[] = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data() as User;
        usersData.push(userData);
      });
      setUsers(usersData);
      setLoadingSpinner(false);
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };

  return (
    <Modal
      show={props.openModal === "initial-focus"}
      size="md"
      popup
      color="bg-gray-900"
      onClose={() => props.setOpenModal()}
      initialFocus={emailInputRef}
      className=" items-center justify-center bg-gray-900"
    >
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 ">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Enter name of user
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="User Name" />
            </div>
            <TextInput
              id="name"
              ref={emailInputRef}
              placeholder="Enter user's name"
              value={searchTerm}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full space-y-5">
            {loadingSpinner && (
              <Spinner color="success" aria-label="Default status example" />
            )}
            <div className="space-y-2 w-full">
              {searchTerm.length !== 0 &&
                users.map((user, index) => (
                  <Link
                    href={`/${user.username}`}
                    key={index}
                    className="w-full"
                  >
                    <button
                      key={index}
                      className="p-4 w-full text-left bg-gray-200 rounded-md"
                    >
                      <p className="text-x font-medium text-gray-900 dark:text-white">
                        {user.displayName}
                      </p>
                    </button>
                  </Link>
                ))}
            </div>
          </div>
          <div className="flex justify-end text-sm font-medium text-gray-500 dark:text-gray-300">
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
