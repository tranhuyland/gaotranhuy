import Image from "next/image";
import Link from "next/link";

import { featuredProducts } from "@/data/products";
import { Container, Section, SectionTitle } from "@/components/ui";

export function FeaturedProducts() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionTitle
          title="Sản phẩm nổi bật"
          description="Những sản phẩm được khách hàng lựa chọn nhiều nhất."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-gray-900 md:text-lg">
                  {product.name}
                </h3>

                <p className="mt-2 text-lg font-bold text-green-700 md:text-2xl">
                  {product.price}
                </p>

                <Link
                  href={`/san-pham/${product.slug}`}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Xem chi tiết
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
