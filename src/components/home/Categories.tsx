import Link from "next/link";

const categories = [
  {
    name: "Gạo ST25",
    href: "/danh-muc/st25",
    icon: "🌾",
  },
  {
    name: "Gạo Jasmine",
    href: "/danh-muc/jasmine",
    icon: "🍚",
  },
  {
    name: "Gạo Bắc Hương",
    href: "/danh-muc/bac-huong",
    icon: "🌿",
  },
  {
    name: "Gạo Nàng Thơm",
    href: "/danh-muc/nang-thom",
    icon: "⭐",
  },
];

export function Categories() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Danh mục gạo
          </h2>

          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Lựa chọn loại gạo phù hợp với nhu cầu của gia đình bạn.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

          {categories.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-xl"
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-base font-semibold text-gray-900 sm:text-lg">
                {item.name}
              </h3>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
