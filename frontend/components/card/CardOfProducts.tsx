import Image from "next/image";

type Product = {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
};

type ProductCardProps = {
  product: Product;
  addToOrder: (product: Product) => void;
};

// Fungsi format ke Rupiah
const formatRupiah = (amount: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);

export default function ProductCard({ product, addToOrder }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-40">
        <Image
          src={product.image || "/logo_dark.svg"}
          alt={product.name}
          layout="fill"
          objectFit="fill"
          className="w-full"
        />
        {product.tags?.map((tag, index) => (
          <span
            key={index}
            className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${
              tag === "New"
                ? "bg-amber-100 text-amber-800"
                : tag === "Sale"
                ? "bg-red-100 text-red-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="p-4">
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
        <div className="flex justify-between items-center mt-3">
          <div>
            <span className="font-bold text-amber-600">
              {formatRupiah(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through ml-1">
                {formatRupiah(product.originalPrice)}
              </span>
            )}
          </div>
          <button
            className="px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm hover:bg-amber-200 transition-all"
            onClick={() => addToOrder(product)}
          >
            <i className="fas fa-plus"></i> Tambah
          </button>
        </div>
      </div>
    </div>
  );
}
