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

  const total = useCartStore(
    (state) => state.summary.total
  );

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

      const orderCode = `DH${Date.now()}`;

      clearCart();

      toast.success("Đặt hàng thành công!");

      router.replace(
        `/dat-hang-thanh-cong?order=${orderCode}&total=${total}&name=${encodeURIComponent(
          data.fullName
        )}`
      );
    } catch {
      toast.error("Đặt hàng thất bại.");
    }
  };

  return (
    <Container className="py-10 lg:py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Thanh toán
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Vui lòng kiểm tra thông tin trước khi hoàn tất đơn hàng.
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_400px]"
      >
        <CheckoutForm
          register={form.register}
          errors={form.formState.errors}
          payment={form.watch("payment")}
        />

        <div className="h-fit xl:sticky xl:top-24">
          <CheckoutSummary
            isSubmitting={isSubmitting}
          />
        </div>
      </form>
    </Container>
  );
}
