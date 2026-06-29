import type { BaseEntity } from "./common";

export interface Product extends BaseEntity {
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
}
