export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  status?: "New" | "Terlaris" | null;
  kategori?: string | null;
  label?: string | null;
  labelColor?: string;
}
