"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import clsx from "clsx";
import { 
  LayoutDashboard, 
  FilePlus2, 
  Users, 
  Map, 
  CalendarCheck2, 
  LogOut, 
  Pin, 
  PinOff 
} from "lucide-react";

// Definisikan item menu sebagai array objek untuk kemudahan mapping
const menuItems = [
  { id: "list", label: "Article List", icon: LayoutDashboard },
  { id: "new", label: "New Article", icon: FilePlus2 },
  { id: "kolaboraksi", label: "New Kolaboraksi", icon: Users },
  { id: "chapter", label: "New Chapter", icon: Map },
  { id: "kegiatan", label: "New Kegiatan", icon: CalendarCheck2 },
];

const SidebarMenuItem = ({ item, activePage, onClick }) => (
  <button
    onClick={() => onClick(item.id)}
    className={clsx(
      "flex items-center w-full gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200",
      activePage === item.id 
        ? "bg-blue-600 text-white shadow-sm" 
        : "text-gray-600 hover:bg-gray-100"
    )}
  >
    <item.icon size={20} />
    <span className="font-medium text-sm">{item.label}</span>
  </button>
);

const Sidebar = ({ activePage, setActivePage, isPinned, setIsPinned, isMobile }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
    toast.success("You have been logged out.");
  };

  return (
    <div className="flex flex-col h-full bg-astraColor-100 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <Image src="/assets/aorta.png" width={120} height={40} alt="Logo" />
        {!isMobile && (
          <button
            onClick={() => setIsPinned(!isPinned)}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
            title={isPinned ? 'Unpin Sidebar' : 'Pin Sidebar'}
          >
            {isPinned ? <PinOff size={18} /> : <Pin size={18} />}
          </button>
        )}
      </div>

      {/* Menu Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <SidebarMenuItem 
            key={item.id}
            item={item} 
            activePage={activePage} 
            onClick={setActivePage} 
          />
        ))}
      </nav>

      {/* Footer / User Profile */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <Image src="/assets/maskot.png" width={40} height={40} alt="admin"/>
          <div className="flex-1 text-sm">
            <p className="font-semibold">Admin</p>
            <p className="text-gray-500 truncate">admin@gmail.com</p>
          </div>
          <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;