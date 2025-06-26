import { useState } from "react";

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

type OrderSummaryProps = {
  order: Order;
  removeFromOrder: (id: string) => void;
  saveOrder: () => void;
  refreshOrder: () => void;
};

// Formatter untuk Rupiah
const formatRupiah = (amount: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);

export default function OrderSummary({
  order,
  removeFromOrder,
  saveOrder,
  refreshOrder,
}: OrderSummaryProps) {
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveOrder = async () => {
    setIsSaving(true);
    try {
      await saveOrder();
      alert("Order berhasil disimpan!");
    } catch (error) {
      console.error("Gagal menyimpan order:", error);
      alert("Gagal menyimpan order");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Ringkasan Pesanan</h3>
        <button
          onClick={refreshOrder}
          className="text-sm text-blue-500 hover:text-blue-700"
        >
          <i className="fas fa-sync-alt"></i> Refresh
        </button>
      </div>

      {order.items.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Keranjang kosong</p>
      ) : (
        <div className="space-y-3">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} x {formatRupiah(item.price)}
                </p>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">
                  {formatRupiah(item.price * item.quantity)}
                </span>
                <button
                  onClick={() => removeFromOrder(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>{formatRupiah(order.subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Pajak (8%):</span>
          <span>{formatRupiah(order.tax)}</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-2">
          <span>Total:</span>
          <span>{formatRupiah(order.total)}</span>
        </div>
      </div>
    </div>
  );
}
