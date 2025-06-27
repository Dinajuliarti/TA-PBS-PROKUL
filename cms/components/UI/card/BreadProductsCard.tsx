"use client";

import { formatRupiah } from "@/lib/format";
import React from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  status: "New" | "Terlaris";
  image: string;
  kategori: string;
}

interface BreadProductCardProps {
  products: Product[];
}

function BreadProductCard({ products }: BreadProductCardProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Tidak ada produk yang ditemukan</p>
        <p className="text-sm text-gray-400 mt-2">
          Silakan coba lagi nanti atau hubungi administrator.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.jpg";
              }}
            />
          ) : (
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
              <span className="text-gray-500">Gambar tidak tersedia</span>
            </div>
          )}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              {product.status && (
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    product.status === "New"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {product.status}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-base font-semibold text-amber-600">
              {formatRupiah(product.price)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BreadProductCard;
