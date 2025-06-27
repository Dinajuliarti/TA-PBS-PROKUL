"use client";

import React, { useState, useEffect, useRef } from "react";
import { Product } from "./ProductsTable";

interface EditProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onUpdate: (id: string, formData: FormData) => Promise<boolean>;
}

function EditProductModal({
  isOpen,
  onClose,
  product,
  onUpdate,
}: EditProductModalProps) {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (product) {
      setImagePreview(product.imageUrl || null);
    }
  }, [product]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    // Validasi data wajib
    if (!formData.get("name") || !formData.get("price")) {
      alert("Nama dan harga wajib diisi");
      setLoading(false);
      return;
    }

    const success = await onUpdate(product.id, formData);
    if (success) {
      onClose();
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 min-h-screen overflow-y-auto bg-black/50 py-10 flex items-center justify-center z-50">
      <div className="bg-white opacity-100 rounded-lg px-6 text-black py-3 max-w-5xl">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-10"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nama Produk*</label>
            <input
              type="text"
              name="name"
              defaultValue={product.name}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Harga (Rp)*</label>
            <input
              type="number"
              name="price"
              defaultValue={product.price}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Deskripsi</label>
            <textarea
              name="description"
              defaultValue={product.description || ""}
              className="w-full px-3 py-2 border rounded"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Status</label>
              <select
                name="status"
                defaultValue={product.status || ""}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Pilih Status</option>
                <option value="New">New</option>
                <option value="Terlaris">Terlaris</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Kategori</label>
              <select
                name="kategori"
                defaultValue={product.kategori || ""}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Pilih Kategori</option>
                <option value="roti-manis">Roti Manis</option>
                <option value="roti-isi">Roti Isi</option>
                <option value="roti-kering">Roti Kering</option>
                <option value="roti-lainnya">Roti Lainnya</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Gambar Produk</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded"
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-contain border rounded"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {imagePreview.startsWith("blob:")
                    ? "Gambar baru"
                    : "Gambar saat ini"}
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-end items-end gap-x-3 pb-8 col-span-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
              disabled={loading}
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
              disabled={loading}
            >
              {loading ? "Menyimpan..." : "Simpan Perubahan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductModal;
