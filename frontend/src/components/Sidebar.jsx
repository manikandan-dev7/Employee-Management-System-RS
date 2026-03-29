import React from 'react'
import {
  FaMale,
  FaClipboard,
  FaCalendar,
  FaFacebookMessenger,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r w-60">
      <h2 className="p-2 mb-6 text-4xl font-bold text-blue-600 border-b border-gray-200">
        RS-TECH
      </h2>
      <ul className="space-y-3">
        <li className="p-2 text-gray-600 rounded hover:cursor-pointer hover:text-white hover:bg-blue-500">
          <FaMale />
          Employee
        </li>
        <li className="p-2 text-gray-600 rounded hover:cursor-pointer hover:text-white hover:bg-blue-500">
          <FaClipboard /> Dashboard
        </li>
        <li className="p-2 text-gray-600 rounded hover:cursor-pointer hover:text-white hover:bg-blue-500">
          {" "}
          <FaCalendar /> Calendar
        </li>
        <li className="p-2 text-gray-600 rounded hover:cursor-pointer hover:text-white hover:bg-blue-500">
          {" "}
          <FaFacebookMessenger /> Messages
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;