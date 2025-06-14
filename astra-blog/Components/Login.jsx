import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi

const Login = ({ onClose }) => {
  const [email, setEmail] = useState(""); // State untuk email
  const [password, setPassword] = useState(""); // State untuk password
  const [error, setError] = useState(""); // State untuk pesan error
  const [isLoading, setIsLoading] = useState(false); // State untuk loading
  const [showPassword, setShowPassword] = useState(false); // State untuk toggle password
  const router = useRouter(); // Inisialisasi router

  // Effect untuk mengontrol blur pada header dan body
  useEffect(() => {
    // Ketika modal terbuka, tambahkan blur ke header dan body
    const header = document.querySelector("header");
    const body = document.body;

    if (header) {
      header.style.filter = "blur(4px)";
      header.style.transition = "filter 0.3s ease-out";
    }

    // Prevent body scroll
    body.style.overflow = "hidden";

    // Cleanup function ketika modal ditutup
    return () => {
      if (header) {
        header.style.filter = "none";
      }
      body.style.overflow = "unset";
    };
  }, []);

  const handleLogin = async () => {
    // Hardcoded credentials
    const validEmail = "astra";
    const validPassword = "juga";

    setIsLoading(true);
    setError("");

    // Simulasi loading untuk UX yang lebih baik
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true"); // Ubah dari sessionStorage ke localStorage
      router.push("/admin");
    } else {
      setError("Invalid email or password. Please try again.");
    }

    setIsLoading(false);
  };

  const handleClose = () => {
    // Reset blur effect sebelum menutup modal
    const header = document.querySelector("header");
    const body = document.body;

    if (header) {
      header.style.filter = "none";
    }
    body.style.overflow = "unset";

    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center p-4"
      style={{ zIndex: 9999 }}
    >
      {/* Background overlay dengan z-index tinggi */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={handleClose} // Menutup modal saat area blur diklik
        style={{ zIndex: 9998 }}
      ></div>

      {/* Login modal dengan z-index tertinggi */}
      <div
        className="relative flex flex-col bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6 w-full max-w-md mx-4 animate-slideUp"
        style={{ zIndex: 10000 }}
      >
        {/* Close button dengan hover effect */}
        <div
          className="absolute top-4 right-4 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
          onClick={handleClose}
        >
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
            className="text-gray-500 group-hover:text-gray-700 transition-colors duration-200"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>

        {/* Header dengan icon */}
        <div className="text-center mb-6 mt-2">
          <h1 className="font-bold text-2xl text-gray-800 mb-1">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-sm">
            Please sign in to your account
          </p>
        </div>

        {/* Form fields */}
        <div className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email..."
                className="w-full text-sm border-2 border-gray-200 rounded-xl p-3 pl-12 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state email
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
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
                placeholder="Enter your password..."
                className="w-full text-sm border-2 border-gray-200 rounded-xl p-3 pl-12 pr-12 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-gray-50/50"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state password
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <circle cx="12" cy="16" r="1"></circle>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                {showPassword ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
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
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Error message dengan animasi */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl animate-shake">
            <p className="text-red-600 text-sm text-center font-medium">
              {error}
            </p>
          </div>
        )}

        {/* Login button dengan loading state */}
        <button
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold p-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          onClick={handleLogin} // Panggil fungsi login
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            "Sign In"
          )}
        </button>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-xs">
            Secure login powered by advanced encryption
          </p>
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
