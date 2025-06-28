"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function CategoryFilter() {
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
    <div className="px-6 py-4 flex gap-3 overflow-x-auto bg-white">
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
    </div>
  );
}
