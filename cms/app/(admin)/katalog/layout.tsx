"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Komponen terpisah untuk navigasi kategori
function CategoryNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCategory = searchParams?.get("category") || "all";

  const categories = [
    { id: "all", label: "Semua Product" },
    { id: "roti-manis", label: "Roti Manis" },
    { id: "roti-isi", label: "Roti Isi" },
    { id: "roti-kering", label: "Roti Kering" },
    { id: "roti-lainnya", label: "Roti Lainnya" },
  ];

  return (
    <>
      {categories.map((category) => {
        const params = new URLSearchParams(searchParams?.toString());
        params.set("category", category.id);
        const isActive = activeCategory === category.id;

        return (
          <Link
            key={category.id}
            href={`${pathname}?${params.toString()}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 text-center whitespace-nowrap ${
              isActive
                ? "bg-amber-500 text-white"
                : "bg-amber-100 text-amber-700 hover:bg-amber-200 hover:text-amber-800"
            }`}
          >
            {category.label}
          </Link>
        );
      })}
    </>
  );
}

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
        <div className="px-6 py-4 flex gap-3 overflow-x-auto bg-white">
          <Suspense fallback={<div>Loading categories...</div>}>
            <CategoryNav />
          </Suspense>
        </div>
      </nav>

      <main className="flex-1 bg-gray-50 p-6 overflow-auto">{children}</main>
    </div>
  );
}
