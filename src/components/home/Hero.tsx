import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* Nội dung */}
        <div className="order-2 text-center lg:order-1 lg:text-left">

          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🌾 Gạo sạch chất lượng cao
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Gạo Trần Huy
          </h1>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Chuyên cung cấp gạo ST25, Jasmine,
            Bắc Hương, Nàng Thơm và nhiều loại
            gạo ngon cho mọi gia đình.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <Link
              href="/san-pham"
              className="rounded-xl bg-green-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Xem sản phẩm
            </Link>

            <Link
              href="/lien-he"
              className="rounded-xl border border-green-600 px-6 py-3 text-center font-semibold text-green-700 transition hover:bg-green-50"
            >
              Liên hệ
            </Link>

          </div>

        </div>

        {/* Ảnh */}
        <div className="order-1 lg:order-2">
          <Image
            src="/images/hero.jpg"
            alt="Gạo Trần Huy"
            width={700}
            height={500}
            priority
            className="h-auto w-full rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
