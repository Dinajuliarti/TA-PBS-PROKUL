export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  label?: string | null;
  labelColor?: string;
}
