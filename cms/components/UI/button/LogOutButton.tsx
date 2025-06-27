"use client";
import { logoutAdminAction } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAdminAction();
    router.refresh();
  };

  return (
    <button
      id="toggleSidebar"
      onClick={handleLogout}
      className="w-full flex items-center justify-center text-amber-200 hover:text-white"
    >
      <span className="sidebar-text ml-2">Logout</span>
    </button>
  );
}
