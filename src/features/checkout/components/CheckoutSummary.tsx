"use client";

import Link from "next/link";

import { useCartStore } from "@/features/cart/store";

export function CheckoutSummary() {
  const {
    subtotal,
    discount,
    shippingFee,
    total,
    totalItems,
  } = useCartStore((state) => state.summary);

  const items = useCartStore((state) => state.items);

  const isEmpty = items.length === 0;

  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Tóm tắt đơn hàng
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">
            Số lượng sản phẩm
          </span>

          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            Tạm tính
          </span>

          <span>
            {subtotal.toLocaleString("vi-VN")}đ
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            Giảm giá
          </span>

          <span className="text-red-600">
            -{discount.toLocaleString("vi-VN")}đ
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            Phí vận chuyển
          </span>

          <span>
            {shippingFee === 0
              ? "Miễn phí"
              : `${shippingFee.toLocaleString("vi-VN")}đ`}
          </span>
        </div>

        <hr />

        <div className="flex items-center justify-between text-xl font-bold">
          <span>Tổng cộng</span>

          <span className="text-green-700">
            {total.toLocaleString("vi-VN")}đ
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isEmpty}
        className="mt-8 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Đặt hàng
      </button>

      <Link
        href="/gio-hang"
        className="mt-3 block text-center text-sm text-green-700 hover:underline"
      >
        ← Quay lại giỏ hàng
      </Link>
    </aside>
  );
}
