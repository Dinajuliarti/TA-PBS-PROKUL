"use client";

import React, { useState, useRef } from "react";

interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: FormData) => Promise<boolean>;
}

function CreateProductModal({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    // Validasi file
    const file = formData.get("image") as File;
    if (file && file.size > 0) {
      // Validasi ukuran file
      if (file.size > 5 * 1024 * 1024) {
        alert("Ukuran gambar terlalu besar (maksimal 5MB)");
        setLoading(false);
        return;
      }

      // Validasi tipe file
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!allowedTypes.includes(file.type)) {
        alert("Format gambar tidak didukung (hanya JPEG, PNG, WebP)");
        setLoading(false);
        return;
      }
    } else {
      alert("Gambar produk wajib diunggah");
      setLoading(false);
      return;
    }

    // Validasi data wajib
    if (!formData.get("name") || !formData.get("price")) {
      alert("Nama dan harga wajib diisi");
      setLoading(false);
      return;
    }

    const success = await onCreate(formData);
    if (success) {
      formRef.current?.reset();
      setImagePreview(null);
      onClose();
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg  px-6 text-black py-3  max-w-5xl">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-8"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nama Produk*</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Harga (Rp)*</label>
            <input
              type="number"
              name="price"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Deskripsi</label>
            <textarea
              name="description"
              className="w-full px-3 py-2 border rounded"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Status</label>
              <select
                name="status"
                className="w-full px-3 py-2 border rounded"
                defaultValue=""
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
                className="w-full px-3 py-2 border rounded"
                defaultValue=""
              >
                <option value="">Pilih Kategori</option>
                <option value="Roti Manis">Roti Manis</option>
                <option value="Roti Isi">Roti Isi</option>
                <option value="Roti Kering">Roti Kering</option>
                <option value="Roti Lainnya">Roti Lainnya</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Gambar Produk*</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-contain border rounded"
                />
              </div>
            )}
          </div>

          <div className="flex justify-end items-end pb-8 gap-3">
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
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProductModal;
