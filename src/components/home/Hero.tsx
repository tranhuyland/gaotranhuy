import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2">

        <div>
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🌾 Gạo sạch chất lượng cao
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Gạo Trần Huy
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Chuyên cung cấp gạo ST25, Jasmine,
            Bắc Hương, Nàng Thơm và nhiều loại
            gạo ngon cho mọi gia đình.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/san-pham"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Xem sản phẩm
            </Link>

            <Link
              href="/lien-he"
              className="rounded-xl border border-green-600 px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
            >
              Liên hệ
            </Link>

          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/hero.jpg"
            alt="Gạo Trần Huy"
            width={700}
            height={500}
            priority
            className="rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
