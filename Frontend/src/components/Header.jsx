import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/immigration.png'

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-br from-blue-100 to-purple-200 shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Attendance Logo"
          className="w-12 h-12 object-contain"
        />
    
      </div>

      {/* Buttons on the right */}
      <div className="flex space-x-4 ml-auto">
        <Link
          to="/employee/register"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Employee Register
        </Link>
        <Link
          to="/check/attendance"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Check Attendance
        </Link>
      </div>
    </header>
  );
};

export default Header;