"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faShoppingBag,
  faHistory,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "@/components/button/LogoutButton";

type SidebarProps = {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  setSidebarOpen: (open: boolean) => void;
  user: {
    name: string;
    role?: string;
  };
};

const menuItems = [
  { name: "Dashboard", icon: faThLarge },
  { name: "Products", icon: faShoppingBag },
  { name: "Order", icon: faHistory },
];

export default function Sidebar({
  activeMenu,
  setActiveMenu,
  setSidebarOpen,
  user,
}: SidebarProps) {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen relative">
      <div className="p-4">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-amber-50">
          <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className="text-amber-600" />
          </div>
          <div>
            <p className="font-medium">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.role || "Member"}</p>
          </div>
        </div>
      </div>

      <nav className="mt-2">
        {menuItems.map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => setActiveMenu(name)}
            className={`w-60 text-left block py-2 px-4 rounded-lg mx-2 mt-1 transition-all ${
              activeMenu === name
                ? "bg-amber-600 text-white font-medium"
                : "hover:bg-amber-100 text-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={icon} className="mr-2" /> {name}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-0 p-4 w-60">
        <LogoutButton />
      </div>
    </aside>
  );
}
