import Image from "next/image";
import Link from "next/link";

import { featuredProducts } from "@/data/products";
import { SectionTitle } from "@/components/ui";

export function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionTitle
          title="Sản phẩm nổi bật"
          description="Những sản phẩm được khách hàng lựa chọn nhiều nhất."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-3 text-2xl font-bold text-green-700">
                  {product.price}
                </p>

                <Link
                  href={`/san-pham/${product.slug}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  Xem chi tiết
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
