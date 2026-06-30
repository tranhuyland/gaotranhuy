// src/app/san-pham/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products/product-service";

type Props = {
  params: { slug: string };
};

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>

      <p className="mt-2 text-muted-foreground">
        {product.description}
      </p>

      <div className="mt-4 space-y-2">
        <p className="text-lg font-semibold">
          {product.price.toLocaleString("vi-VN")}đ
        </p>

        {product.discountPrice && (
          <p className="text-sm text-red-500">
            Giảm còn: {product.discountPrice.toLocaleString("vi-VN")}đ
          </p>
        )}
      </div>
    </main>
  );
}
