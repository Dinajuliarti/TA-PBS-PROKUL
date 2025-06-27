import SideBar from "@/components/sidebar/SideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 fixed h-screen">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 overflow-auto bg-green-50">
        {children}
      </div>
    </div>
  );
}
