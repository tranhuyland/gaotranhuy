import Link from "next/link";

export function OrderSuccess() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">
        🎉
      </div>

      <h1 className="mt-8 text-3xl font-bold text-green-700">
        Đặt hàng thành công
      </h1>

      <p className="mt-4 max-w-md text-gray-600">
        Cảm ơn bạn đã mua hàng tại
        <span className="font-semibold text-green-700">
          {" "}
          Gạo Trần Huy
        </span>
        .
        <br />
        Chúng tôi sẽ liên hệ xác nhận đơn hàng trong thời gian sớm nhất.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Tiếp tục mua sắm
        </Link>

        <Link
          href="/gio-hang"
          className="rounded-xl border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50"
        >
          Xem giỏ hàng
        </Link>
      </div>
    </section>
  );
}
