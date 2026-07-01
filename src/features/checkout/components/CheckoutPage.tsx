"use client";

import { Container } from "@/components/ui";
import { useCartStore } from "@/features/cart/store";

import { CheckoutForm } from "./CheckoutForm";
import { CheckoutSummary } from "./CheckoutSummary";

export function CheckoutPage() {
  const items = useCartStore((state) => state.items);

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (items.length === 0) {
      alert("Giỏ hàng đang trống.");
      return;
    }

    console.log("Đặt hàng...");
    console.log(items);
  }

  return (
    <Container className="py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Thanh toán
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid gap-8 lg:grid-cols-[1fr_380px]"
      >
        <CheckoutForm />

        <div className="h-fit lg:sticky lg:top-24">
          <CheckoutSummary />
        </div>
      </form>
    </Container>
  );
}
