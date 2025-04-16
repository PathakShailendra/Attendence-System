import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="max-h-[75vh] flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="https://plus.unsplash.com/premium_photo-1744576035583-e014eb83ec2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
          alt="Attendance"
          className=" object-cover w-full h-full"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-100 to-purple-200 relative flex flex-col justify-center px-8 py-6">
        {/* Top-right buttons */}
        {/* <div className="absolute top-4 right-4 space-x-4">
          <Link
            to="/employee/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            to="/employee/register"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Register
          </Link>
        </div> */}

        {/* Center content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Smart Employee Attendance System
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Say goodbye to manual tracking! Our system helps you manage attendance using real-time location, camera snapshots, and secured login — built for modern teams.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;