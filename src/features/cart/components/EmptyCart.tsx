import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export function EmptyCart() {
  return (
    <section className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
      <div className="rounded-full bg-green-100 p-5">
        <ShoppingCart className="h-12 w-12 text-green-700" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-gray-900">
        Giỏ hàng của bạn đang trống
      </h2>

      <p className="mt-3 max-w-md text-gray-600">
        Hãy khám phá các loại gạo thơm ngon của Gạo Trần Huy và thêm
        sản phẩm yêu thích vào giỏ hàng.
      </p>

      <Link
        href="/san-pham"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Tiếp tục mua sắm
      </Link>
    </section>
  );
}
