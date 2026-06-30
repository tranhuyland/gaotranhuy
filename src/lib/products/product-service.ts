import { products } from "@/data/products";
import type { Product } from "@/types/product";

export function getProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured === true);
}

export function getProductBySlug(
  slug: string
): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: string
): Product[] {
  return products.filter(
    (p) => p.category === category
  );
}

export function getRelatedProducts(
  product: Product,
  limit = 4
): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.category === product.category
    )
    .slice(0, limit);
}
