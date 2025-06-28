import CategoryFilter from "@/components/filter/CategoryFilter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 shadow-md w-full bg-white">
        <div className="px-7 pt-6 border-b pb-4 bg-white">
          <h1 className="text-xl font-bold text-gray-800">Kategori</h1>
        </div>
        {/* Pindahkan filter ke komponen client */}
        <CategoryFilter />
      </nav>

      <main className="flex-1 bg-gray-50 p-6 overflow-auto">{children}</main>
    </div>
  );
}
