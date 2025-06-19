"use client";

import { useEffect, useState } from "react";
import OrderSummary from "../card/CardOrderSummary";
import api from "@/lib/api";

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

export default function OrderContent({ userId, token }: OrderContentProps) {
  const [order, setOrder] = useState<Order>({
    items: [],
    subtotal: 0,
    tax: 0,
    total: 0,
  });
  const [loading, setLoading] = useState(true);
  const [refreshCounter, setRefreshCounter] = useState(0);

  const removeFromOrder = (id: string) => {
    const updatedItems = order.items.filter((item) => item.id !== id);
    const newSubtotal = updatedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = newSubtotal * 0.08;
    const total = newSubtotal + tax;

    setOrder({
      items: updatedItems,
      subtotal: newSubtotal,
      tax,
      total,
    });
  };

  const saveOrder = () => {
    console.log("Order disimpan:", order);
  };

  const refreshOrder = () => {
    setRefreshCounter((prev) => prev + 1);
  };

  useEffect(() => {
    if (!userId) return;

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

          setOrder({ items, subtotal, tax, total });
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
    return <p>Memuat pesanan...</p>;
  }

  return (
    <div className="w-full">
      <OrderSummary
        order={order}
        removeFromOrder={removeFromOrder}
        saveOrder={saveOrder}
        refreshOrder={refreshOrder}
      />
    </div>
  );
}
