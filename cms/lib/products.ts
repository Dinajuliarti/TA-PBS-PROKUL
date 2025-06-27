import axios from "axios";
import api from "./api";

export interface ApiProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  status: "New" | "Terlaris";
  imageUrl: string;
  kategori: string;
}

export const getProducts = async (): Promise<ApiProduct[]> => {
  try {
    const response = await api.get("/api/katalog");
    return response.data.data_view;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Gagal memuat produk");
  }
};
