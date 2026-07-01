// src/app/san-pham/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products/product-service";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <p className="mt-4 text-gray-600">
        {product.description}
      </p>

      <div className="mt-6">
        <p className="text-2xl font-bold text-green-700">
          {(product.salePrice ?? product.price).toLocaleString("vi-VN")}đ
        </p>

        {product.salePrice && (
          <p className="text-gray-500 line-through">
            {product.price.toLocaleString("vi-VN")}đ
          </p>
        )}
      </div>
    </main>
  );
}
