"use client";

import { Container } from "@/components/ui";

import { useCartStore } from "../store";

import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { EmptyCart } from "./EmptyCart";

export function CartPage() {
  const items = useCartStore((state) => state.items);

  if (items.length === 0) {
    return (
      <Container className="py-12">
        <EmptyCart />
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Giỏ hàng
      </h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Danh sách sản phẩm */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
              />
            ))}
          </div>
        </section>

        {/* Tổng đơn hàng */}
        <div className="lg:sticky lg:top-24 h-fit">
          <CartSummary />
        </div>
      </div>
    </Container>
  );
}
