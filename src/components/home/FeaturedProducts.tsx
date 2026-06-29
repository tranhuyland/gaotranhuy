import Image from "next/image";
import Link from "next/link";

import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">

        <h2 className="text-center text-3xl font-bold">
          Sản phẩm nổi bật
        </h2>

        <p className="mt-3 text-center text-gray-600">
          Những sản phẩm được khách hàng lựa chọn nhiều nhất.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {product.name}
                </h3>

                <p className="mt-3 text-green-700 font-bold">
                  {product.price}
                </p>

                <Link
                  href={`/san-pham/${product.slug}`}
                  className="mt-5 inline-block rounded-xl bg-green-600 px-5 py-2 text-white transition hover:bg-green-700"
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
