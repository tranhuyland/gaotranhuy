// src/app/san-pham/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products/product-service";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  // ✅ FIX QUAN TRỌNG: return luôn để tránh crash undefined
  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-6xl p-6">
      {/* Tên sản phẩm */}
      <h1 className="text-2xl font-bold">
        {product.name}
      </h1>

      {/* Mô tả */}
      <p className="mt-2 text-muted-foreground">
        {product.description}
      </p>

      {/* Giá */}
      <div className="mt-4 space-y-2">
        <p className="text-lg font-semibold text-green-700">
          {(product.salePrice ?? product.price).toLocaleString("vi-VN")}đ
        </p>

        {/* Giá gốc */}
        {product.salePrice && (
          <p className="text-sm text-red-500 line-through">
            Giá gốc: {product.price.toLocaleString("vi-VN")}đ
          </p>
        )}
      </div>
    </main>
  );
}
