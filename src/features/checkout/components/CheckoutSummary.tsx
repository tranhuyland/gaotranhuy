"use client";

import Link from "next/link";
import {
  Loader2,
  ShieldCheck,
} from "lucide-react";

import { useCartStore } from "@/features/cart/store";

interface CheckoutSummaryProps {
  isSubmitting: boolean;
}

export function CheckoutSummary({
  isSubmitting,
}: CheckoutSummaryProps) {
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
    <aside className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Tóm tắt đơn hàng
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Kiểm tra lại thông tin trước khi xác nhận đặt hàng.
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Số lượng sản phẩm
          </span>

          <span className="font-semibold text-gray-900">
            {totalItems}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Tạm tính
          </span>

          <span className="font-semibold text-gray-900">
            {subtotal.toLocaleString("vi-VN")}đ
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Giảm giá
          </span>

          <span className="font-semibold text-red-600">
            -{discount.toLocaleString("vi-VN")}đ
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Phí vận chuyển
          </span>

          {shippingFee === 0 ? (
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Miễn phí
            </span>
          ) : (
            <span className="font-semibold text-gray-900">
              {shippingFee.toLocaleString("vi-VN")}đ
            </span>
          )}
        </div>

        <div className="border-t border-dashed border-gray-200 pt-5">
          <div className="flex items-center justify-between rounded-2xl bg-green-50 p-5">
            <span className="text-lg font-semibold text-gray-900">
              Tổng cộng
            </span>

            <span className="text-3xl font-bold text-green-700">
              {total.toLocaleString("vi-VN")}đ
            </span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isEmpty || isSubmitting}
        className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-green-600 font-semibold text-white shadow-lg shadow-green-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
      >
        {isSubmitting && (
          <Loader2
            size={18}
            className="animate-spin"
          />
        )}

        {isSubmitting
          ? "Đang xử lý..."
          : isEmpty
          ? "Giỏ hàng trống"
          : "Đặt hàng"}
      </button>

      <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-gray-50 p-3 text-xs text-gray-500">
        <ShieldCheck
          size={16}
          className="text-green-600"
        />

        <span>Thanh toán an toàn & bảo mật</span>
      </div>

      <Link
        href="/gio-hang"
        className="mt-5 block text-center text-sm font-medium text-green-700 transition-colors duration-200 hover:text-green-800 hover:underline"
      >
        ← Quay lại giỏ hàng
      </Link>
    </aside>
  );
}
