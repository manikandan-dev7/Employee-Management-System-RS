import React from 'react'
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline, IoPerson } from "react-icons/io5";

const Navbar = () => {
  return (
    
    <div className="flex items-center justify-end px-6 py-3 space-x-3 bg-white border-b">
      <FaRegBell className="w-8 h-8 p-2 bg-gray-300 rounded-2xl" />
      <IoSettingsOutline className="w-8 h-8 p-2 bg-gray-300 rounded-2xl" />
      <IoPerson className="w-8 h-8 p-2 bg-gray-300 rounded-2xl" />
    </div>
  );
};

export default Navbar;
