import React from "react";

interface BreadProduct {
  name: string;
  description: string;
  price: string;
  status: "New" | "Terlaris";
  image: string;
}

const breadProducts: BreadProduct[] = [
  {
    name: "Roti Coklat",
    description: "Roti lembut dengan isian coklat lumer",
    price: "Rp 8.000",
    status: "Terlaris",
    image: "/roti-tawar2.jpg",
  },
  {
    name: "Roti Keju",
    description: "Roti dengan taburan keju melimpah",
    price: "Rp 9.000",
    status: "New",
    image: "/roti-tawar2.jpg",
  },
  {
    name: "Roti Sobek",
    description: "Roti isi selai stroberi dalam sobekan",
    price: "Rp 10.000",
    status: "New",
    image: "/roti-tawar2.jpg",
  },
  {
    name: "Roti Sobek",
    description: "Roti isi selai stroberi dalam sobekan",
    price: "Rp 10.000",
    status: "New",
    image: "/roti-tawar2.jpg",
  },
  {
    name: "Roti Sobek",
    description: "Roti isi selai stroberi dalam sobekan",
    price: "Rp 10.000",
    status: "New",
    image: "/roti-tawar2.jpg",
  },
  {
    name: "Roti Sobek",
    description: "Roti isi selai stroberi dalam sobekan",
    price: "Rp 10.000",
    status: "New",
    image: "/roti-tawar2.jpg",
  },
];

function BreadProductCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {breadProducts.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  product.status === "New"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {product.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-base font-semibold text-amber-600">
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BreadProductCard;
