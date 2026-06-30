import { ProductGrid } from "./ProductGrid";

import type { Product } from "@/types/product";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({
  products,
}: RelatedProductsProps) {
  if (!products.length) return null;

  return (
    <section
      aria-labelledby="related-products"
      className="space-y-6"
    >
      <h2
        id="related-products"
        className="text-2xl font-semibold text-gray-900"
      >
        Sản phẩm liên quan
      </h2>

      <ProductGrid products={products} />
    </section>
  );
}
