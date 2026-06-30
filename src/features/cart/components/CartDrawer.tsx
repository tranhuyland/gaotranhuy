"use client";

import { useState } from "react";

import { useCartStore } from "../store";
import { CartItem } from "./CartItem";

import { CartIcon } from "./CartIcon";

export function CartDrawer() {
  const [open, setOpen] = useState(false);

  const items = useCartStore(
    (state) => state.items
  );

  const total =
    useCartStore(
      (state) => state.summary.total
    );

  return (
    <>
      {/* ICON */}
      <CartIcon onOpen={() => setOpen(true)} />

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* DRAWER */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl transition-transform ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">
            Giỏ hàng
          </h2>

          <button onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <div className="h-[calc(100%-140px)] overflow-y-auto p-4">
          {items.length === 0 ? (
            <p>Giỏ hàng trống</p>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
              />
            ))
          )}
        </div>

        <div className="border-t p-4">
          <div className="flex justify-between">
            <span>Tổng</span>
            <span>
              {total.toLocaleString("vi-VN")}đ
            </span>
          </div>

          <button className="mt-3 w-full rounded-lg bg-green-600 py-2 text-white">
            Thanh toán
          </button>
        </div>
      </div>
    </>
  );
}
