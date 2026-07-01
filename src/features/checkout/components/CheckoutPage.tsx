"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Container } from "@/components/ui";
import { useCartStore } from "@/features/cart/store";

import {
  checkoutSchema,
  type CheckoutFormData,
} from "../validation";

import { createOrder } from "../services/createOrder";

import { CheckoutForm } from "./CheckoutForm";
import { CheckoutSummary } from "./CheckoutSummary";

export function CheckoutPage() {
  const router = useRouter();

  const items = useCartStore((state) => state.items);

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      payment: "cod",
      note: "",
      email: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (
    data: CheckoutFormData
  ) => {
    if (isSubmitting) return;

    if (items.length === 0) {
      toast.error("Giỏ hàng đang trống.");
      return;
    }

    try {
      const result = await createOrder({
        customer: data,
        items,
      });

      if (!result.success) {
        throw new Error("Create order failed");
      }

      clearCart();

      toast.success("Đặt hàng thành công!");

      router.replace("/dat-hang-thanh-cong");
    } catch {
      toast.error("Đặt hàng thất bại.");
    }
  };

  return (
    <Container className="py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Thanh toán
      </h1>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-8 lg:grid-cols-[1fr_380px]"
      >
        <CheckoutForm
          register={form.register}
          errors={form.formState.errors}
        />

        <div className="h-fit lg:sticky lg:top-24">
          <CheckoutSummary
            isSubmitting={isSubmitting}
          />
        </div>
      </form>
    </Container>
  );
}
