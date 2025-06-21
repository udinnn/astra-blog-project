"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Login from "@/components/Login";

// 1. Impor Supabase client untuk digunakan di browser
import { createClient } from "@/utils/supabase/client";

// Komponen Ikon Chevron untuk Accordion
const ChevronIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className={`w-4 h-4 text-white/80 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const Footer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState(null); // 'menu', 'mitra', atau 'sosial'

  const handleAdminClick = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      router.push("/admin");
    } else {
      setShowLogin(true);
    }
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const socialLinks = [
    // SVG Paths are from the original code
    {
      href: "mailto:communityaorta@gmail.com",
      label: "Email",
      icon: (
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.75732 6.22215L11.9865 10.0365L17.3285 6.09078C18.1446 5.44632 19.191 5.33494 20.046 5.76509C20.9153 6.20242 21.5 7.1513 21.5 8.44705V16.7618C21.5 17.2333 21.4407 17.9088 21.0814 18.4781C20.6956 19.0893 20.019 19.4943 18.9793 19.4943H16.889C16.6129 19.4943 16.389 19.2704 16.389 18.9943V13.2008L12.2867 16.2518C12.1093 16.3838 11.8662 16.3835 11.689 16.2511L7.61098 13.2036V16.7186C7.61098 16.9947 7.38713 17.2186 7.11098 17.2186C6.83484 17.2186 6.61098 16.9947 6.61098 16.7186V12.2058C6.61098 12.0165 6.71781 11.8435 6.88699 11.7588C7.05617 11.674 7.25871 11.692 7.41029 11.8053L11.9891 15.2269L16.5906 11.8046C16.7423 11.6918 16.9446 11.6741 17.1135 11.759C17.2824 11.8439 17.389 12.0168 17.389 12.2058V18.4943H18.9793C19.7234 18.4943 20.0572 18.2272 20.2358 17.9443C20.4408 17.6194 20.5 17.1787 20.5 16.7618V8.44705C20.5 7.46479 20.0744 6.89879 19.5966 6.65841C19.1071 6.41213 18.4732 6.45826 17.9434 6.87938C17.9388 6.88305 17.9341 6.88664 17.9294 6.89014L12.2854 11.0589C12.1097 11.1887 11.8701 11.1894 11.6937 11.0607L6.16182 7.02554C5.66596 6.65592 4.93253 6.43285 4.36979 6.51816C4.10149 6.55884 3.89833 6.66433 3.75932 6.82883C3.62023 6.99343 3.5 7.27084 3.5 7.74087V17.1491C3.5 17.8103 3.73627 18.1246 3.96224 18.2868C4.21573 18.4688 4.53566 18.5148 4.74399 18.4962C4.75875 18.4949 4.77357 18.4943 4.78839 18.4943H6.11098C6.38713 18.4943 6.61098 18.7181 6.61098 18.9943C6.61098 19.2704 6.38713 19.4943 6.11098 19.4943H4.80887C4.42163 19.5237 3.86072 19.445 3.37906 19.0992C2.85986 18.7264 2.5 18.0915 2.5 17.1491V7.74087C2.5 7.09846 2.66719 6.57192 2.99552 6.18339C3.32393 5.79476 3.7682 5.59794 4.2199 5.52946C5.09621 5.39661 6.09189 5.72702 6.75732 6.22215Z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      href: "https://instagram.com/aortacommunity",
      label: "Instagram",
      icon: (
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.24447 2.06167C9.33668 2.01184 9.67505 2 12.5062 2C15.3374 2 15.6756 2.01252 16.7675 2.06168M16.7675 2.06168C17.7897 2.10844 18.4489 2.26844 19.0085 2.48487L19.0162 2.48781C19.5855 2.70226 20.1013 3.03821 20.5276 3.47227L20.5335 3.4783L20.5396 3.48422C20.9737 3.91055 21.3096 4.42646 21.5239 4.99596L21.5275 5.00559C21.7446 5.56381 21.9041 6.22165 21.9508 7.2445C21.9895 8.36684 22 8.71472 22 11.5063C22 14.2978 21.9895 14.6454 21.9508 15.768C21.9041 16.7908 21.7446 17.449 21.5279 18.0077L21.5247 18.0162C21.3102 18.5856 20.9743 19.1013 20.5402 19.5276L20.5341 19.5336L20.5282 19.5397C20.1015 19.9743 19.5856 20.3099 19.0167 20.5238L19.0069 20.5276C18.4487 20.7447 17.7908 20.9041 16.768 20.9509C15.6457 20.9896 15.2985 21 12.5062 21C9.71399 21 9.3671 20.9896 8.24431 20.9385C7.13172 20.8875 6.47934 20.699 6.01636 20.5187C5.43944 20.3046 4.91708 19.9655 4.48679 19.5256C4.04685 19.0952 3.70766 18.5726 3.49359 17.9955C3.30704 17.5033 3.13322 16.881 3.07839 15.8562C3.0212 14.567 3.0125 14.0558 3.0125 11.5063C3.0125 8.95591 3.0212 8.44544 3.06167 7.24464C3.10844 6.22264 3.26846 5.56351 3.48487 5.00402L3.48778 4.99629C3.70223 4.42695 4.03818 3.91119 4.47224 3.48489L4.47833 3.47891L4.48431 3.47282C4.91096 3.0382 5.42691 2.70258 5.99575 2.4887L6.00556 2.48495C6.56378 2.26786 7.22162 2.10843 8.24447 2.06167Z"
            stroke="#ffffff"
            strokeLinejoin="round"
          />
          <path
            d="M10.8155 15.5881C11.3515 15.8101 11.926 15.9244 12.5062 15.9244C13.678 15.9244 14.8018 15.4589 15.6304 14.6304C16.4589 13.8018 16.9244 12.678 16.9244 11.5063C16.9244 10.3345 16.4589 9.21072 15.6304 8.38215C14.8018 7.55359 13.678 7.0881 12.5062 7.0881C11.926 7.0881 11.3515 7.20238 10.8155 7.42442M9.37229 8.37231C10.2035 7.54113 11.3308 7.07418 12.5062 7.07418C13.6817 7.07418 14.809 7.54113 15.6402 8.37231C16.4714 9.20349 16.9383 10.3308 16.9383 11.5063C16.9383 12.6817 16.4714 13.809 15.6402 14.6402C14.809 15.4714 13.6817 15.9383 12.5062 15.9383C11.3308 15.9383 10.2035 15.4714 9.37229 14.6402C8.54111 13.809 8.07416 12.6817 8.07416 11.5063C8.07416 10.3308 8.54111 9.20349 9.37229 8.37231ZM19.434 6.04229C19.434 6.37873 19.3003 6.70139 19.0625 6.93929C18.8246 7.17719 18.5019 7.31084 18.1655 7.31084C17.829 7.31084 17.5064 7.17719 17.2685 6.93929C17.0306 6.70139 16.8969 6.37873 16.8969 6.04229C16.8969 5.70585 17.0306 5.38319 17.2685 5.1453C17.5064 4.9074 17.829 4.77375 18.1655 4.77375C18.5019 4.77375 18.8246 4.9074 19.0625 5.1453C19.3003 5.38319 19.434 5.70585 19.434 6.04229Z"
            stroke="#ffffff"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "https://wa.me/6282211125539",
      label: "WhatsApp",
      icon: (
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
          <path
            d="M5.0874 15.4399C-1.89441 6.36264 14.2515 -0.68802 20.0874 7.16718C25.3374 14.2399 15.0814 23.4944 9.04416 18.7287"
            stroke="#ffffff"
            strokeOpacity="0.9"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.37545 15.9547C2.07243 21.4406 2.98878 20.8467 7.99602 18.6782"
            stroke="#ffffff"
            strokeOpacity="0.9"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.2229 6.8052C3.6063 8.5044 14.4476 20.471 17.3149 14.1628"
            stroke="#ffffff"
            strokeOpacity="0.9"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6403 10.5219C11.1619 11.8244 12.5343 12.8717 13.6743 13.6317"
            stroke="#ffffff"
            strokeOpacity="0.9"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6403 7.56372C11.2616 8.59386 12.1991 9.57516 10.7161 10.1047"
            stroke="#ffffff"
            strokeOpacity="0.9"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.1259 13.7076C15.731 12.6344 15.035 12.008 13.9779 13.5181"
            stroke="#ffffff"
            strokeOpacity="0.9"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-astraColor-100 text-white">
      {/* Tampilan Desktop */}
      <div className="hidden md:flex w-full flex-col md:flex-row items-center justify-around gap-y-8 py-3 px-6">
        <div className="flex flex-row items-center space-x-8">
          <Image
            src="/assets/astra.png"
            alt="aorta"
            width={50}
            height={50}
            className="filter invert object-contain"
          />
          <Image
            src="/assets/aorta.png"
            alt="astra"
            width={50}
            height={50}
            className="filter invert object-contain"
          />
          <Image
            src="/assets/satu-indonesia.png"
            alt="satu-indonesia"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <nav>
          <ul className="flex flex-row items-center space-x-8 text-sm font-medium">
            <li>
              <a href="/" className="transition-colors hover:text-white/70">
                AORTA
              </a>
            </li>
            <li>
              <button
                onClick={handleAdminClick}
                className="transition-colors hover:text-white/70"
              >
                Admin
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row items-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Tampilan Mobile dengan Accordion */}
      <div className="md:hidden w-full px-4 py-2 space-y-2">
        {/* Accordion Item: Menu */}
        <div className="border-b border-white/20">
          <button
            onClick={() => toggleAccordion("menu")}
            className="w-full flex justify-between items-center py-3 text-left"
          >
            <span className="font-semibold text-lg">Menu</span>
            <ChevronIcon isOpen={openAccordion === "menu"} />
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              openAccordion === "menu"
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <ul className="pt-2 pb-4 space-y-2 text-white/90">
                <li>
                  <a href="/" className="block hover:pl-2 transition-all">
                    AORTA
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleAdminClick}
                    className="block hover:pl-2 transition-all"
                  >
                    Admin
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion Item: Mitra Kami */}
        <div className="border-b border-white/20">
          <button
            onClick={() => toggleAccordion("mitra")}
            className="w-full flex justify-between items-center py-3 text-left"
          >
            <span className="font-semibold text-lg">AORTA Community</span>
            <ChevronIcon isOpen={openAccordion === "mitra"} />
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              openAccordion === "mitra"
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <div className="flex items-center space-x-4 py-4">
                <Image
                  src="/assets/astra.png"
                  alt="aorta"
                  width={40}
                  height={40}
                  className="filter invert object-contain"
                />
                <Image
                  src="/assets/aorta.png"
                  alt="astra"
                  width={40}
                  height={40}
                  className="filter invert object-contain"
                />
                <Image
                  src="/assets/satu-indonesia.png"
                  alt="satu-indonesia"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Item: Media Sosial */}
        <div className="border-b border-white/20">
          <button
            onClick={() => toggleAccordion("sosial")}
            className="w-full flex justify-between items-center py-3 text-left"
          >
            <span className="font-semibold text-lg">Media Sosial</span>
            <ChevronIcon isOpen={openAccordion === "sosial"} />
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              openAccordion === "sosial"
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <div className="flex items-center space-x-4 py-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-1 opacity-80 hover:opacity-100 hover:scale-110 transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-black/20 py-1">
        <p className="text-white text-xs text-center tracking-wide">
          &copy; {new Date().getFullYear()} AORTA Community - All Rights
          Reserved
        </p>
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </footer>
  );
};

export default Footer;
