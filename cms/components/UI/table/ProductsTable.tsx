"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import api from "@/lib/api";
import CreateProductModal from "./CreateProductModal";
import EditProductModal from "./EditProductModal";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  status?: string | null;
  imageUrl: string;
  kategori?: string | null;
  createdAt: string;
  updatedAt: string;
}

function ProductsTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/api/katalog");
      setProducts(response.data.data_view);
    } catch (error) {
      toast.error("Gagal memuat produk");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreate = async (formData: FormData) => {
    try {
      const response = await api.post("/api/katalog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setProducts([response.data.data_view, ...products]);
      toast.success("Produk berhasil ditambahkan");
      return true;
    } catch (error: any) {
      toast.error(
        error.response?.data?.metadata?.message || "Gagal menambahkan produk"
      );
      console.error("Error creating product:", error);
      return false;
    }
  };

  const handleUpdate = async (id: string, formData: FormData) => {
    try {
      const response = await api.put(`/api/katalog/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setProducts(
        products.map((product) =>
          product.id === id ? response.data.data_view : product
        )
      );
      toast.success("Produk berhasil diperbarui");
      return true;
    } catch (error: any) {
      toast.error(
        error.response?.data?.metadata?.message || "Gagal memperbarui produk"
      );
      console.error("Error updating product:", error);
      return false;
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setDeleteLoading(id);
      await api.delete(`/api/katalog/${id}`);
      setProducts(products.filter((product) => product.id !== id));
      toast.success("Produk berhasil dihapus");
    } catch (error: any) {
      toast.error(
        error.response?.data?.metadata?.message || "Gagal menghapus produk"
      );
      console.error("Error deleting product:", error);
    } finally {
      setDeleteLoading(null);
    }
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-y-5 pb-50 justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        <p className="ml-4 text-gray-600">Memuat produk...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-auto">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold"></h2>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
        >
          + Tambah Produk
        </button>
      </div>

      <div className="min-w-full">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Nama
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Deskripsi
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Harga
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Gambar
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                  Tidak ada produk
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                    {product.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 max-w-xs truncate">
                    {product.description}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Rp {product.price.toLocaleString("id-ID")}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {product.status ? (
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.status === "New"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {product.status}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://via.placeholder.com/100?text=Gambar+Tidak+Tersedia";
                        }}
                      />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditModal(product)}
                        className="px-3 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        disabled={deleteLoading === product.id}
                        className={`px-3 py-1 text-xs rounded transition ${
                          deleteLoading === product.id
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-red-500 hover:bg-red-600 text-white"
                        }`}
                      >
                        {deleteLoading === product.id
                          ? "Menghapus..."
                          : "Hapus"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Tambah Produk */}
      <CreateProductModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreate}
      />

      {/* Modal Edit Produk */}
      {editingProduct && (
        <EditProductModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          product={editingProduct}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default ProductsTable;
