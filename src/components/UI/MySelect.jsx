import React from "react";

export default function MySelect({ options, defaultValue, value, selected }) {
  return (
    <select
      className="font-roboto px-4 py-3 outline-none w-1/8 cursor-pointer bg-white rounded-full shadow-md"
      value={value}
      onChange={(event) => selected(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.body}
        </option>
      ))}
    </select>
  );
}
