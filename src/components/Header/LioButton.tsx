import React from "react";

function LioButton({
  text,
  style,
  onClick,
}: {
  text: string;
  style?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={` w-full rounded-sm  p-2  font-bold transition duration-300 transform hover:scale-105   focus:outline-none hover:ring ring-light-accent ${style}`}
    >
      {text}
    </button>
  );
}

export default LioButton;
