"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client"; // Gunakan client untuk browser

const Login = ({ onClose }) => {
  // 1. Mengembalikan state-management sisi klien
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // useEffect untuk blur background (ini dari kode asli Anda)
  useEffect(() => {
    const header = document.querySelector("header");
    const body = document.body;
    if (header) {
      header.style.filter = "blur(4px)";
    }
    body.style.overflow = "hidden";
    return () => {
      if (header) {
        header.style.filter = "none";
      }
      body.style.overflow = "unset";
    };
  }, []);

  // 2. Ini adalah fungsi handleLogin yang baru dengan localStorage
  const handleLogin = async () => {
    setIsLoading(true);
    setError("");

    // Kita tetap login ke Supabase untuk memeriksa apakah user valid
    const supabase = createClient();
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (authError) {
      // Jika Supabase mengembalikan error, tampilkan pesan
      setError("Email atau kata sandi salah. Silakan coba lagi.");
      setIsLoading(false);
      return;
    }

    // Jika Supabase tidak mengembalikan error (login valid)
    if (data.user) {
      // Simpan status login ke localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Arahkan ke halaman admin dan refresh
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    // Seluruh JSX dan styling Anda dipertahankan, tidak ada yang diubah
    <div
      className="fixed inset-0 flex justify-center items-center p-4"
      style={{ zIndex: 9999 }}>
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
        style={{ zIndex: 9998 }}></div>

      <div
        className="relative flex flex-col bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6 w-full max-w-md mx-4 animate-slideUp"
        style={{ zIndex: 10000 }}>
        <div
          className="absolute top-4 right-4 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
          onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500 group-hover:text-gray-700">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>

        <div className="text-center mb-6 mt-2">
          <h1 className="font-bold text-2xl text-gray-800 mb-1">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-sm">
            Please sign in to your account
          </p>
        </div>

        {/* Form diubah sedikit untuk menggunakan state lokal */}
        <div className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                className="w-full text-sm border-2 border-gray-200 rounded-xl p-3 pl-12 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50/50"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password..."
                className="w-full text-sm border-2 border-gray-200 rounded-xl p-3 pl-12 pr-12 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50/50"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <circle cx="12" cy="16" r="1"></circle>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Pesan error menggunakan state lokal */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl animate-shake">
            <p className="text-red-600 text-sm text-center font-medium">
              {error}
            </p>
          </div>
        )}

        {/* Tombol submit sekarang memanggil handleLogin */}
        <button
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold p-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          onClick={handleLogin}
          disabled={isLoading}>
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            "Sign In"
          )}
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-500 text-xs">&copy; 2025 AORTA Community</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Login;
