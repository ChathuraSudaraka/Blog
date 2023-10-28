import React from "react";

export default function MyButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="font-roboto py-2 px-11 text-gray-900 font-semibold text-lg cursor-pointer border border-gray-900 rounded-lg"
    >
      {children}
    </button>
  );
}
