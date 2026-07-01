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
    <section className="space-y-5 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <div>
        <h3 className="text-xl font-bold text-gray-900">
          Phương thức thanh toán
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Chọn hình thức thanh toán phù hợp.
        </p>
      </div>

      {/* COD */}
      <label className="group flex cursor-pointer items-center gap-5 rounded-2xl border border-green-600 bg-green-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-600 hover:shadow-md">
        <input
          type="radio"
          value="cod"
          defaultChecked
          {...register("payment")}
          className="h-5 w-5 accent-green-600"
        />

        <div className="rounded-xl bg-green-100 p-3 text-green-700 transition group-hover:scale-105">
          <CreditCard size={24} />
        </div>

        <div className="flex-1">
          <p className="font-semibold text-gray-900">
            Thanh toán khi nhận hàng
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Thanh toán bằng tiền mặt khi đơn hàng được giao.
          </p>
        </div>
      </label>

      {/* Bank */}
      <label className="group flex cursor-pointer items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-600 hover:shadow-md">
        <input
          type="radio"
          value="bank"
          {...register("payment")}
          className="h-5 w-5 accent-green-600"
        />

        <div className="rounded-xl bg-gray-100 p-3 text-green-700 transition group-hover:scale-105">
          <Landmark size={24} />
        </div>

        <div className="flex-1">
          <p className="font-semibold text-gray-900">
            Chuyển khoản ngân hàng
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Thanh toán trước qua tài khoản ngân hàng.
          </p>
        </div>
      </label>

      {/* Wallet */}
      <label className="group flex cursor-pointer items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-600 hover:shadow-md">
        <input
          type="radio"
          value="wallet"
          {...register("payment")}
          className="h-5 w-5 accent-green-600"
        />

        <div className="rounded-xl bg-gray-100 p-3 text-green-700 transition group-hover:scale-105">
          <Wallet size={24} />
        </div>

        <div className="flex-1">
          <p className="font-semibold text-gray-900">
            Ví điện tử
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Hỗ trợ MoMo, ZaloPay, VNPay...
          </p>
        </div>
      </label>

      {errors?.payment && (
        <p className="text-sm font-medium text-red-500">
          {errors.payment.message}
        </p>
      )}
    </section>
  );
}
