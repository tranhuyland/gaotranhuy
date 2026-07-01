"use client";

import Link from "next/link";
import { useState } from "react";

import { useCartStore } from "../store";
import { CartItem } from "./CartItem";
import { CartIcon } from "./CartIcon";

export function CartDrawer() {
  const [open, setOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  const summary = useCartStore(
    (state) => state.summary
  );

  return (
    <>
      {/* Icon */}
      <CartIcon onOpen={() => setOpen(true)} />

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <div>
            <h2 className="text-xl font-bold">
              Giỏ hàng
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {summary.totalItems} sản phẩm
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="text-6xl">
                🛒
              </div>

              <p className="mt-4 text-lg font-semibold">
                Giỏ hàng trống
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Hãy thêm sản phẩm để bắt đầu mua sắm.
              </p>

              <Link
                href="/san-pham"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Xem sản phẩm
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">
                Tổng
              </span>

              <span className="text-2xl font-bold text-green-700">
                {summary.total.toLocaleString("vi-VN")}đ
              </span>
            </div>

            <Link
              href="/gio-hang"
              onClick={() => setOpen(false)}
              className="block w-full rounded-xl border border-green-600 py-3 text-center font-semibold text-green-700 transition hover:bg-green-50"
            >
              Xem giỏ hàng
            </Link>

            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Thanh toán
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
