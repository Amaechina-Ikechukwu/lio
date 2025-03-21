"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { onAuthStateChanged, signOut, User, getIdToken } from "firebase/auth";
import signInWithGoogle from "@/firebase/firebaseAuth";
import { auth } from "@/firebase/config";
import Image from "next/image";
import lio from "@/app/lio.png";

// Auth context types
interface AuthContextProps {
  currentUser: User | null;
  token: string | null;
  lioToken: string | null;
  userProfile: any | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

// Create context
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

// Function to login user to Lio server
const loginToLioServer = async (userInfo: any): Promise<string | null> => {
  try {
    const serverUrl = process.env.NEXT_PUBLIC_LIOSERVER;
    if (!serverUrl) {
      console.error("NEXT_PUBLIC_LIOSERVER is not defined");
      return null;
    }
    const response = await fetch(`${serverUrl}/registeruser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const responseData = await response.json();
    return responseData?.token || null;
  } catch (error) {
    console.error("Error logging in to Lio server:", error);
    return null;
  }
};

// Function to fetch user profile
const getUserProfile = async (lioToken: string | null) => {
  if (!lioToken) return null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LIOSERVER}/userprofile`,
      {
        headers: { Authorization: `Bearer ${lioToken}` },
        cache: "no-store", // Ensure fresh data
      }
    );

    if (!res.ok) throw new Error("Failed to fetch user profile");

    const { userprofile } = await res.json();
    return userprofile;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

// Auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [lioToken, setLioToken] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          const userToken = await getIdToken(user);
          setToken(userToken);

          // Login to Lio server and retrieve Lio token
          const lioServerToken = await loginToLioServer({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });

          setLioToken(lioServerToken);

          // Fetch user profile if Lio token exists
          if (lioServerToken) {
            const profile = await getUserProfile(lioServerToken);
            setUserProfile(profile);
          }
        } catch (error) {
          console.error("Error during authentication:", error);
        }
      } else {
        setToken(null);
        setLioToken(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUserProfile(null);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    token,
    lioToken,
    userProfile,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Image
            src={lio}
            width={500}
            alt="Lio"
            className="w-24 h-24 animate-pulse"
          />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
