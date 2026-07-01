"use client";

import {
  CheckCircle2,
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
  payment: CheckoutFormData["payment"];
}

export function PaymentMethod({
  register,
  errors,
  payment,
}: PaymentMethodProps) {
  return (
    <section className="space-y-5 rounded-3xl border border-gray-200 bg-white p-8 shadow-md">
      <div>
        <h3 className="text-xl font-bold text-gray-900">
          Phương thức thanh toán
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Chọn hình thức thanh toán phù hợp.
        </p>
      </div>

      {/* COD */}
      <label
        className={`group relative flex cursor-pointer items-center gap-5 rounded-2xl p-5 transition-all duration-300 ${
          payment === "cod"
            ? "scale-[1.01] border-2 border-green-600 bg-green-50 shadow-lg"
            : "border border-gray-200 bg-white hover:-translate-y-1 hover:scale-[1.01] hover:border-green-500 hover:shadow-lg"
        }`}
      >
        <input
          type="radio"
          value="cod"
          {...register("payment")}
          className="sr-only"
        />

        <div
          className={`rounded-xl p-3 transition-all duration-300 ${
            payment === "cod"
              ? "scale-110 bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500 group-hover:scale-105"
          }`}
        >
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

        <CheckCircle2
          size={22}
          className={`transition-all duration-300 ${
            payment === "cod"
              ? "scale-100 text-green-600 opacity-100"
              : "scale-75 text-transparent opacity-0"
          }`}
        />
      </label>

      {/* Bank */}
      <label
        className={`group relative flex cursor-pointer items-center gap-5 rounded-2xl p-5 transition-all duration-300 ${
          payment === "bank"
            ? "scale-[1.01] border-2 border-green-600 bg-green-50 shadow-lg"
            : "border border-gray-200 bg-white hover:-translate-y-1 hover:scale-[1.01] hover:border-green-500 hover:shadow-lg"
        }`}
      >
        <input
          type="radio"
          value="bank"
          {...register("payment")}
          className="sr-only"
        />

        <div
          className={`rounded-xl p-3 transition-all duration-300 ${
            payment === "bank"
              ? "scale-110 bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500 group-hover:scale-105"
          }`}
        >
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

        <CheckCircle2
          size={22}
          className={`transition-all duration-300 ${
            payment === "bank"
              ? "scale-100 text-green-600 opacity-100"
              : "scale-75 text-transparent opacity-0"
          }`}
        />
      </label>

      {/* Wallet */}
      <label
        className={`group relative flex cursor-pointer items-center gap-5 rounded-2xl p-5 transition-all duration-300 ${
          payment === "wallet"
            ? "scale-[1.01] border-2 border-green-600 bg-green-50 shadow-lg"
            : "border border-gray-200 bg-white hover:-translate-y-1 hover:scale-[1.01] hover:border-green-500 hover:shadow-lg"
        }`}
      >
        <input
          type="radio"
          value="wallet"
          {...register("payment")}
          className="sr-only"
        />

        <div
          className={`rounded-xl p-3 transition-all duration-300 ${
            payment === "wallet"
              ? "scale-110 bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500 group-hover:scale-105"
          }`}
        >
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

        <CheckCircle2
          size={22}
          className={`transition-all duration-300 ${
            payment === "wallet"
              ? "scale-100 text-green-600 opacity-100"
              : "scale-75 text-transparent opacity-0"
          }`}
        />
      </label>

      {errors?.payment && (
        <p className="text-sm font-medium text-red-500">
          {errors.payment.message}
        </p>
      )}
    </section>
  );
}
