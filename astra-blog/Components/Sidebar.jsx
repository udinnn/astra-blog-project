"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = ({setActivePage}) => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
    console.log("Logout clicked");
  }
  return (
    <div>
      <div className="fixed top-0 left-0 inline-flex flex-col p-4 h-screen bg-slate-600 shadow-md shadow-black">
        <div className="font-bold text-3xl mt-10 mb-5">Logo</div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <Image
              src="/assets/dashboard.png"
              width={25}
              height={25}
              alt="dashboard"
              className="m-2 filter invert"
            />
            <p
              className="text-lg text-white cursor-pointer"
              onClick={() => setActivePage("dashboard")}
            >
              Dashboard
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              src="/assets/new.png"
              width={25}
              height={25}
              alt="new"
              className="m-2 filter invert"
            />
            <p className="text-lg text-white cursor-pointer"
              onClick={() => setActivePage("new")}>
              New Article
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              src="/assets/article.png"
              width={25}
              height={25}
              alt="List"
              className="m-2 filter invert"
            />
            <p className="text-lg text-white cursor-pointer"
              onClick={() => setActivePage("list")}>
              Article List
            </p>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-col bg-slate-300 h-min-content rounded-lg p-2 mt-auto">
          <div className="flex flex-row justify-between w-full items-center mb-4">
            <Image
              src="/assets/admin.png"
              width={30}
              height={30}
              alt="admin"
              className="m-2"
            />
            <Image
              src="/assets/logout.png"
              width={25}
              height={25}
              alt="logout"
              className="m-2 cursor-pointer"
              onClick={handleLogout}
            />
          </div>
          <div className="flex flex-col w-full items-star text-sm text-black">
            <p>Admin</p>
            <p>admin@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
