export interface BreadProduct {
  name: string;
  description: string;
  price: string;
  status: "New" | "Terlaris";
  image: string;
  category: string;
}

export const breadProducts: BreadProduct[] = [
  {
    name: "Roti Coklat",
    description: "Roti lembut dengan isian coklat lumer",
    price: "Rp 8.000",
    status: "Terlaris",
    image: "/roti-tawar2.jpg",
    category: "roti-manis",
  },
  {
    name: "Roti Keju",
    description: "Roti dengan taburan keju melimpah",
    price: "Rp 9.000",
    status: "New",
    image: "/roti-tawar2.jpg",
    category: "roti-manis",
  },
  {
    name: "Roti Sobek Coklat",
    description: "Roti sobek isi coklat lumer",
    price: "Rp 10.000",
    status: "New",
    image: "/roti-tawar2.jpg",
    category: "roti-isi",
  },
  {
    name: "Kue Kering Coklat",
    description: "Kue kering dengan taburan coklat",
    price: "Rp 12.000",
    status: "New",
    image: "/roti-tawar2.jpg",
    category: "roti-kering",
  },
  {
    name: "Donat",
    description: "Donat lembut dengan berbagai topping",
    price: "Rp 7.000",
    status: "Terlaris",
    image: "/roti-tawar2.jpg",
    category: "roti-lainnya",
  },
  {
    name: "Roti Tawar",
    description: "Roti tawar fresh setiap hari",
    price: "Rp 15.000",
    status: "New",
    image: "/roti-tawar2.jpg",
    category: "roti-lainnya",
  },
];
