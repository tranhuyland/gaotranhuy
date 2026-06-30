"use client";

import { useCartStore } from "@/features/cart/store";

export default function CartPage() {
  const items = useCartStore((state) => state.items);

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-bold">
        Giỏ hàng
      </h1>

      {items.length === 0 ? (
        <p className="mt-4 text-gray-500">
          Giỏ hàng trống
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex justify-between border-b py-3"
            >
              <span>{item.product.name}</span>

              <span>
                {item.quantity} x{" "}
                {(item.product.salePrice ?? item.product.price).toLocaleString("vi-VN")}đ
              </span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
