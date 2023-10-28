import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto flex items-center justify-end h-16">
        <div className="flex space-x-4">
          <Link to="/posts" className="text-black uppercase">
            Posts
          </Link>
          <Link to="/about" className="text-black uppercase">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
