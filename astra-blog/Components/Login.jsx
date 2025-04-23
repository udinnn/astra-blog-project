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
      <div className="relative z-10 flex flex-col bg-white rounded-lg border border-black p-4 w-96">
        <div className="absolute top-2 right-2 cursor-pointer" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <h1 className="text-center font-bold text-3xl mt-2 mb-4">Login</h1>
        <h3 className="text-center text-sm mb-2">Email</h3>
        <input
          type="text"
          placeholder="Input your email..."
          className="text-sm border border-gray-300 rounded-lg p-2 mt-2 mb-4 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state email
        />
        <h3 className="text-center text-sm mb-2">Password</h3>
        <input
          type="password"
          placeholder="Input your password..."
          className="text-sm border border-gray-300 rounded-lg p-2 mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update state password
        />
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Pesan error */}
        <button
          className="text-center text-black p-2 rounded-lg mb-4 hover:bg-blue-600"
          onClick={handleLogin} // Panggil fungsi login
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;