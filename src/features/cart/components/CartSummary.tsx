"use client";

import { Button } from "@/components/ui/Button";
import { useCartStore } from "../store";

export function CartSummary() {
  const summary = useCartStore((state) => state.summary);

  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        Tóm tắt đơn hàng
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Tạm tính
          </span>

          <span className="font-medium">
            {summary.subtotal.toLocaleString("vi-VN")}đ
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Giảm giá
          </span>

          <span className="font-medium text-green-700">
            -{summary.discount.toLocaleString("vi-VN")}đ
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Phí vận chuyển
          </span>

          <span className="font-medium">
            {summary.shippingFee.toLocaleString("vi-VN")}đ
          </span>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">
              Tổng thanh toán
            </span>

            <span className="text-2xl font-bold text-green-700">
              {summary.total.toLocaleString("vi-VN")}đ
            </span>
          </div>
        </div>
      </div>

      <Button className="mt-6 w-full">
        Tiến hành thanh toán
      </Button>
    </aside>
  );
}
