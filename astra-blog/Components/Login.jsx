import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi

const Login = ({ onClose }) => {
  const [email, setEmail] = useState(""); // State untuk email
  const [password, setPassword] = useState(""); // State untuk password
  const [error, setError] = useState(""); // State untuk pesan error
  const router = useRouter(); // Inisialisasi router

  const handleLogin = () => {
    // Hardcoded credentials
    const validEmail = "astra";
    const validPassword = "juga";

    if (email === validEmail && password === validPassword) {
      // Jika email dan password sesuai
      localStorage.setItem("isLoggedIn", "true"); // Simpan status login di localStorage
      router.push("/admin"); // Navigasi ke halaman admin
    } else {
      // Jika email atau password salah
      setError("Invalid email or password. Please try again.");
    }
  };

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
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state email
        />
        <h3 className="text-center mb-2">Password</h3>
        <input
          type="password"
          placeholder="Input your password..."
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update state password
        />
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Pesan error */}
        <button
          className="text-center bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 mb-4 w-full"
          onClick={handleLogin} // Panggil fungsi login
        >
          Login
        </button>
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