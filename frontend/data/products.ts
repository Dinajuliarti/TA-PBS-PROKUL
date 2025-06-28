import { Product } from "@/types/products";

export const DataProducts: Product[] = [
  {
    name: "Roti Sari Madu",
    description: "Roti mani lembut dengan kandungan serat tinggi",
    price: 25000,
    imageUrl: "/1.png",
    kategori: "roti-manis",
    status: "New",
  },
  {
    name: "Croissant Almond",
    description: "Croissant renyah dengan topping almond slice",
    price: 18000,
    imageUrl: "/2.png",
    kategori: "roti-manis",
    status: "New",
  },

  // Roti Isi
  {
    name: "Roti Coklat Keju",
    description: "Roti isi coklat dan keju dengan taburan meses",
    price: 12000,
    imageUrl: "/6.png",
    kategori: "roti-isi",
    status: "Terlaris",
  },
  {
    name: "Roti Ayam Pedas",
    description: "Roti isi ayam pedas gurih dengan bumbu khas",
    price: 15000,
    imageUrl: "/7.png",
    kategori: "roti-isi",
    status: "New",
  },

  {
    name: "Roti Kering Coklat",
    description: "Roti kering rasa coklat yang renyah dan manis",
    price: 10000,
    imageUrl: "/11.png",
    kategori: "roti-kering",
    status: "New",
  },
  {
    name: "Kastengel",
    description: "Kue kering dengan rasa keju gurih dan renyah",
    price: 35000,
    imageUrl: "/12.png",
    kategori: "roti-kering",
    status: "Terlaris",
  },
];
