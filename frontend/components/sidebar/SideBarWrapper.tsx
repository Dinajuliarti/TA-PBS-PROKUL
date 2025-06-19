"use client";

import { useState } from "react";
import Sidebar from "./SideBar";
import DashboardContent from "@/components/content/DashboardContent";
import ProductsContent from "@/components/content/ProductsContent";
import OrderContent from "@/components/content/OrderContent";

type SidebarWrapperProps = {
  user: { id: string; name: string; role?: string; token?: string };
  token?: string;
};

export default function SidebarWrapper({ user, token }: SidebarWrapperProps) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <DashboardContent />;
      case "Products":
        return <ProductsContent token={token ?? ""} userId={user.id} />;
      case "Order":
        return <OrderContent userId={user.id} token={token} />;
      default:
        return <div>Halaman tidak ditemukan.</div>;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar tetap */}
      <Sidebar
        user={user}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Konten utama */}
      <main className="w-full h-screen overflow-y-auto bg-gray-50 p-6">
        <div className="bg-white p-6 rounded shadow w-full">{renderContent()}</div>
      </main>
    </div>
  );
}
