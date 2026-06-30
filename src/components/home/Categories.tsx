import Link from "next/link";
import { categories } from "@/data/categories";

export function Categories() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Danh mục sản phẩm
          </h2>

          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Khám phá các dòng gạo và đặc sản chất lượng tại Gạo Trần Huy.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
          {categories.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-xl"
            >
              <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mt-4 text-base font-semibold leading-6 text-gray-900">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
