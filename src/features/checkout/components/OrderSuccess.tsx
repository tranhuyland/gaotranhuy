import Link from "next/link";

export function OrderSuccess() {
  return (
    <section className="mx-auto max-w-xl py-20 text-center">
      <div className="text-6xl">🎉</div>

      <h1 className="mt-6 text-3xl font-bold text-green-700">
        Đặt hàng thành công
      </h1>

      <p className="mt-4 text-gray-600">
        Cảm ơn bạn đã mua hàng tại Gạo Trần Huy.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Tiếp tục mua sắm
      </Link>
    </section>
  );
}
