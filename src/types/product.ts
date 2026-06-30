export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;

  slug: string;

  name: string;

  sku: string;

  category: string;

  description: string;

  shortDescription: string;

  images: string[];

  price: number;

  salePrice?: number;

  stock: number;

  featured: boolean;

  unit: "kg" | "bao";

  specs: ProductSpec[];

  createdAt: string;

  updatedAt: string;
}
