"use client";

import { logoutAction } from "@/actions/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction();
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full py-2 px-4 rounded-lg border border-amber-500 text-amber-600 hover:bg-amber-100 transition-all"
    >
      <i className="fas fa-sign-out-alt mr-2"></i> Logout
    </button>
  );
}
