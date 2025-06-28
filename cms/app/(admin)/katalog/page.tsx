"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BreadProductCard from "@/components/UI/card/BreadProductsCard";
import { getProducts } from "@/lib/products";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  status: "New" | "Terlaris";
  image: string;
  kategori: string;
}

function KatalogContent() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  // Fetch products from API only
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const dataFromApi = await getProducts();

        // Map API data to Product interface
        const mappedProducts: Product[] = dataFromApi.map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description || "",
          price: product.price,
          status: product.status as "New" | "Terlaris",
          image: product.imageUrl || "/placeholder.jpg",
          kategori: product.kategori || "roti-manis",
        }));

        setAllProducts(mappedProducts);
        setFilteredProducts(mappedProducts); // Set initial filtered products
      } catch (error: any) {
        console.error("Failed to load products:", error);
        setError("Gagal memuat produk dari server.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products when category changes
  useEffect(() => {
    if (allProducts.length > 0) {
      if (category === "all") {
        setFilteredProducts(allProducts);
      } else {
        const filtered = allProducts.filter(
          (product) =>
            product.kategori &&
            product.kategori.toLowerCase() === category.toLowerCase()
        );
        setFilteredProducts(filtered);
      }
    }
  }, [category, allProducts]);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col gap-y-5 justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          <p className="ml-4 text-gray-600">Memuat produk...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-red-500 font-medium">Error: {error}</p>
          <button
            className="mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
            onClick={() => window.location.reload()}
          >
            Coba Lagi
          </button>
        </div>
      ) : (
        <BreadProductCard products={filteredProducts} />
      )}
    </div>
  );
}

export default function KatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col gap-y-5 justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          <p className="ml-4 text-gray-600">Memuat produk...</p>
        </div>
      }
    >
      <KatalogContent />
    </Suspense>
  );
}
