import Link from "next/link";

export function ZaloCTA() {
  return (
    <section className="bg-green-700 py-16 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center">

        <h2 className="text-4xl font-bold">
          Đặt gạo nhanh qua Zalo
        </h2>

        <p className="mt-4 text-lg">
          Liên hệ ngay để được tư vấn và đặt hàng nhanh chóng.
        </p>

        <Link
          href="https://zalo.me/"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100"
        >
          Liên hệ Zalo
        </Link>

      </div>
    </section>
  );
}
