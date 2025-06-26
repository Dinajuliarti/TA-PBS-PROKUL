"use client";

import { useEffect, useState } from "react";
import ProductCard from "../card/CardOfProducts";
import api from "@/lib/api";
import Swal from "sweetalert2";

type Product = {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
};

type ProductsContentProps = {
  token: string;
  userId: string;
};

// Cache data produk di luar komponen
let cachedProducts: Product[] = [];

export default function ProductsContent({
  token,
  userId,
}: ProductsContentProps) {
  const [products, setProducts] = useState<Product[]>(cachedProducts);
  const [loading, setLoading] = useState(!cachedProducts.length);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const showAddModal = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setShowModal(true);
  };

  const addToOrder = async () => {
    if (!selectedProduct || !userId) return;

    setIsAdding(true);

    try {
      const url = `/api/chart?id=${userId}&katalogId=${selectedProduct.id}&quantity=${quantity}`;
      const response = await api.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.metadata.error === 0) {
        Swal.fire({
          title: "Berhasil!",
          text: "Produk berhasil ditambahkan ke keranjang!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      } else {
        Swal.fire({
          title: "Gagal!",
          text: response.data.metadata.message,
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error: any) {
      console.error("Error adding to cart:", error);
      Swal.fire({
        title: "Error!",
        text:
          error.response?.data?.metadata?.message ||
          "Terjadi kesalahan saat menambahkan produk",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsAdding(false);
      setShowModal(false);
    }
  };

  useEffect(() => {
    // Jika data sudah ada di cache, tidak perlu fetch ulang
    if (cachedProducts.length > 0) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await api.get("/api/katalog", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.data;

        if (data.metadata.error === 0) {
          // Simpan ke state dan cache
          setProducts(data.data_view);
          cachedProducts = data.data_view;
        } else {
          console.error("Gagal:", data.metadata.message);
        }
      } catch (error) {
        console.error("Error saat fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  // Tampilkan loading spinner di tengah layar
  if (loading) {
    return (
      <div className="fixed w-100 inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
          <p className="mt-4 text-lg font-medium">Memuat produk...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="font-bold text-lg mb-4">
              Tambah {selectedProduct.name}
            </h3>

            <div className="mb-4">
              <label className="block mb-2">Jumlah</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-full p-2 border rounded"
                disabled={isAdding}
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => !isAdding && setShowModal(false)}
                disabled={isAdding}
                className={`px-4 py-2 border rounded ${
                  isAdding
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                Batal
              </button>
              <button
                onClick={addToOrder}
                disabled={isAdding}
                className={`px-4 py-2 bg-amber-500 text-white rounded ${
                  isAdding
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-amber-600"
                }`}
              >
                {isAdding ? "Menambahkan..." : "Tambah ke Pesanan"}
              </button>
            </div>
          </div>
        </div>
      )}

      <h3 className="text-lg font-bold mb-4">Daftar Produk</h3>
      {products.length === 0 ? (
        <p>Tidak ada produk tersedia.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              addToOrder={() => showAddModal(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
