import Link from "next/link";
import React from "react";

const Login = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Background blur */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose} // Menutup modal saat area blur diklik
      ></div>

      {/* Login modal */}
      <div className="relative z-10 flex flex-col bg-white rounded-lg border border-black p-4 shadow-lg w-96">
        <h1 className="text-center font-bold text-xl mt-2 mb-4">Login</h1>
        <h3 className="text-center mb-2">Email</h3>
        <input
          type="text"
          placeholder="Input your email..."
          className="border border-gray-300 rounded-lg p-2 mt-2 mb-4 w-full"
        />
        <h3 className="text-center mb-2">Password</h3>
        <input
          type="password"
          placeholder="Input your password..."
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        />
        <p
          className="text-center bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 mb-4 w-full"
        >
          <Link href="/admin">Login</Link>
        </p>
        <p
          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 w-full cursor-pointer text-center"
          onClick={onClose}
        >
          Close
        </p>
      </div>
    </div>
  );
};

export default Login;