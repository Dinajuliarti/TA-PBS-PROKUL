"use client";

import { useEffect, useState } from "react";
import OrderSummary from "../card/CardOrderSummary";
import api from "@/lib/api";
import Swal from "sweetalert2";

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
};

type OrderContentProps = {
  userId: string;
  token?: string;
};

// Cache untuk data order
let cachedOrder: Order | null = null;

export default function OrderContent({ userId, token }: OrderContentProps) {
  const [order, setOrder] = useState<Order>({
    items: [],
    subtotal: 0,
    tax: 0,
    total: 0,
  });
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [refreshCounter, setRefreshCounter] = useState(0);

  const removeFromOrder = async (id: string) => {
    if (!token) return;

    // Konfirmasi penghapusan dengan SweetAlert
    const result = await Swal.fire({
      title: "Hapus Item?",
      text: "Apakah Anda yakin ingin menghapus item ini dari keranjang?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    setIsRemoving(true);

    try {
      const response = await api.delete(
        `/api/chart?id=${userId}&itemId=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.metadata.error === 0) {
        Swal.fire({
          title: "Dihapus!",
          text: "Item berhasil dihapus dari keranjang",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });

        // Refresh data order
        setRefreshCounter((prev) => prev + 1);
      } else {
        Swal.fire({
          title: "Gagal!",
          text: response.data.metadata.message,
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error: any) {
      console.error("Error removing item:", error);
      Swal.fire({
        title: "Error!",
        text:
          error.response?.data?.metadata?.message ||
          "Terjadi kesalahan saat menghapus item",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsRemoving(false);
    }
  };

  const saveOrder = async () => {
    if (!token) return;

    // Konfirmasi penyimpanan pesanan
    const result = await Swal.fire({
      title: "Simpan Pesanan?",
      text: "Apakah Anda yakin ingin menyimpan pesanan ini?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Simpan!",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    setIsSaving(true);

    try {
      // Asumsikan endpoint untuk checkout adalah /api/order
      const response = await api.post(
        `/api/order?userId=${userId}`,
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
          text: "Pesanan berhasil disimpan",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });

        // Reset order setelah disimpan
        setOrder({
          items: [],
          subtotal: 0,
          tax: 0,
          total: 0,
        });

        // Update cache
        cachedOrder = null;
      } else {
        Swal.fire({
          title: "Gagal!",
          text: response.data.metadata.message,
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error: any) {
      console.error("Error saving order:", error);
      Swal.fire({
        title: "Error!",
        text:
          error.response?.data?.metadata?.message ||
          "Terjadi kesalahan saat menyimpan pesanan",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const refreshOrder = () => {
    setRefreshCounter((prev) => prev + 1);
    Swal.fire({
      title: "Memperbarui...",
      text: "Sedang memperbarui data keranjang",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  };

  useEffect(() => {
    if (!userId) return;

    // Gunakan cache jika tersedia
    if (cachedOrder) {
      setOrder(cachedOrder);
      setLoading(false);
      return;
    }

    const fetchOrder = async () => {
      try {
        const res = await api.get(`/api/chart?id=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;

        if (data.metadata.error === 0) {
          const items: OrderItem[] = data.view_data.items.map((item: any) => ({
            id: item.id,
            name: item.katalog?.name || "Tanpa Nama",
            price: item.katalog?.price || 0,
            quantity: item.quantity,
          }));

          const subtotal = data.view_data.totalHarga || 0;
          const tax = subtotal * 0.08;
          const total = subtotal + tax;

          const newOrder = { items, subtotal, tax, total };
          setOrder(newOrder);
          cachedOrder = newOrder;
        } else {
          console.error("Gagal:", data.metadata.message);
        }
      } catch (error) {
        console.error("Fetch chart gagal:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [userId, token, refreshCounter]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
          <p className="mt-4 text-lg font-medium">Memuat keranjang...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Keranjang Belanja</h2>
        <button
          onClick={refreshOrder}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
          Segarkan
        </button>
      </div>

      <OrderSummary
        order={order}
        removeFromOrder={removeFromOrder}
        saveOrder={saveOrder}
        refreshOrder={refreshOrder}
        // isSaving={isSaving}
        // isRemoving={isRemoving}
      />

      <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">
          Informasi Penting
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-amber-700">
          <li>Pajak sebesar 8% akan ditambahkan ke total belanja</li>
          <li>Tekan tombol segarkan untuk memperbarui data keranjang</li>
        </ul>
      </div>
    </div>
  );
}
