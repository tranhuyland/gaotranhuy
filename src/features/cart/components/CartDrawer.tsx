"use client";

import { useState } from "react";

import { useCartStore } from "../store";
import { CartItem } from "./CartItem";
import { CartIcon } from "./CartIcon";

export function CartDrawer() {
  const [open, setOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  const total = useCartStore(
    (state) => state.summary.total
  );

  return (
    <>
      {/* ICON */}
      <CartIcon onOpen={() => setOpen(true)} />

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* DRAWER */}
      <div
        className={`fixed right-0 top-0 z-50 h-dvh w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">
            Giỏ hàng
          </h2>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="h-[calc(100%-140px)] overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">
              Giỏ hàng trống
            </p>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="flex items-center justify-between text-lg font-semibold">
            <span>Tổng</span>

            <span className="text-green-700">
              {total.toLocaleString("vi-VN")}đ
            </span>
          </div>

          <button
            type="button"
            className="mt-4 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Thanh toán
          </button>
        </div>
      </div>
    </>
  );
}
