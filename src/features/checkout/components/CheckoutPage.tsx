"use client";

import { Container } from "@/components/ui";

import { CheckoutForm } from "./CheckoutForm";
import { CheckoutSummary } from "./CheckoutSummary";

export function CheckoutPage() {
  return (
    <Container className="py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Thanh toán
      </h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <CheckoutForm />

        <div className="lg:sticky lg:top-24 h-fit">
          <CheckoutSummary />
        </div>
      </div>
    </Container>
  );
}
