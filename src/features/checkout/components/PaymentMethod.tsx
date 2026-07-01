"use client";

import {
  CreditCard,
  Landmark,
  Wallet,
} from "lucide-react";

import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import type { CheckoutFormData } from "../validation";

interface PaymentMethodProps {
  register: UseFormRegister<CheckoutFormData>;
  errors?: FieldErrors<CheckoutFormData>;
}

export function PaymentMethod({
  register,
  errors,
}: PaymentMethodProps) {
  return (
    <section className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6">
      <h3 className="text-xl font-semibold">
        Phương thức thanh toán
      </h3>

      {/* COD */}
      <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-green-600 bg-green-50 p-4 transition">
        <input
          type="radio"
          value="cod"
          defaultChecked
          aria-label="Thanh toán khi nhận hàng"
          {...register("payment")}
        />

        <CreditCard
          className="text-green-700"
          size={24}
        />

        <div>
          <p className="font-semibold">
            Thanh toán khi nhận hàng
          </p>

          <p className="text-sm text-gray-500">
            Thanh toán bằng tiền mặt khi nhận hàng.
          </p>
        </div>
      </label>

      {/* Bank */}
      <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-green-600">
        <input
          type="radio"
          value="bank"
          aria-label="Chuyển khoản ngân hàng"
          {...register("payment")}
        />

        <Landmark
          className="text-green-700"
          size={24}
        />

        <div>
          <p className="font-semibold">
            Chuyển khoản ngân hàng
          </p>

          <p className="text-sm text-gray-500">
            Chuyển khoản trước khi giao hàng.
          </p>
        </div>
      </label>

      {/* Wallet */}
      <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-green-600">
        <input
          type="radio"
          value="wallet"
          aria-label="Ví điện tử"
          {...register("payment")}
        />

        <Wallet
          className="text-green-700"
          size={24}
        />

        <div>
          <p className="font-semibold">
            Ví điện tử
          </p>

          <p className="text-sm text-gray-500">
            MoMo, ZaloPay, VNPay...
          </p>
        </div>
      </label>

      {errors?.payment && (
        <p className="text-sm text-red-500">
          {errors.payment.message}
        </p>
      )}
    </section>
  );
}
