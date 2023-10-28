import React from "react";

export default function MyInput(props) {
  return (
    <input
      {...props}
      className="font-roboto px-4 py-3 w-full outline-none bg-white rounded-full shadow-md focus:ring focus:ring-opacity-50 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white"
    />
  );
}
