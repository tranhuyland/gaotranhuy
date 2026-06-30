import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/san-pham/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/san-pham/${product.slug}`}>
          <h3 className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-gray-900 transition hover:text-green-700 md:text-lg">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-lg font-bold text-green-700 md:text-2xl">
          {(product.salePrice ?? product.price).toLocaleString("vi-VN")}đ
        </p>

        <Link
          href={`/san-pham/${product.slug}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
}
