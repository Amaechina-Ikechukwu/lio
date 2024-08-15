"use client";
import React, { createContext, useState, ReactNode } from "react";

interface InputContextProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const InputContext = createContext<InputContextProps | undefined>(
  undefined
);

interface InputProviderProps {
  children: ReactNode;
}

export default function InputProvider({ children }: InputProviderProps) {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
}
