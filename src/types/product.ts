export type ProductUnit =
  | "kg"
  | "bao";

export interface Product {
  id: string;

  slug: string;

  sku: string;

  name: string;

  description: string;

  shortDescription: string;

  category: string;

  images: string[];

  price: number;

  salePrice?: number;

  stock: number;

  featured: boolean;

  unit: ProductUnit;

  createdAt: string;

  updatedAt: string;
}
