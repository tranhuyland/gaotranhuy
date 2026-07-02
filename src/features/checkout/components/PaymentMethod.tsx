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
    <section className="space-y-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
      <div>
        <h3 className="text-xl font-bold text-gray-900">
          Phương thức thanh toán
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Chọn hình thức thanh toán phù hợp với nhu cầu của bạn.
        </p>
      </div>

      {/* COD */}
      <label
        className={`group flex cursor-pointer items-center gap-5 rounded-2xl p-5 transition-all duration-300 ${
          payment === "cod"
            ? "border-2 border-green-600 bg-green-50 shadow-sm"
            : "border border-gray-200 bg-white hover:border-green-500 hover:shadow-sm"
        }`}
      >
        <input
          type="radio"
          value="cod"
          {...register("payment")}
          className="sr-only"
        />

        <div
          className={`rounded-2xl p-3 transition-all duration-300 ${
            payment === "cod"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500 group-hover:bg-green-50 group-hover:text-green-700"
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

        {payment === "cod" && (
          <CheckCircle2
            size={22}
            className="text-green-600"
          />
        )}
      </label>

      {/* Bank */}
      <label
        className={`group flex cursor-pointer items-center gap-5 rounded-2xl p-5 transition-all duration-300 ${
          payment === "bank"
            ? "border-2 border-green-600 bg-green-50 shadow-sm"
            : "border border-gray-200 bg-white hover:border-green-500 hover:shadow-sm"
        }`}
      >
        <input
          type="radio"
          value="bank"
          {...register("payment")}
          className="sr-only"
        />

        <div
          className={`rounded-2xl p-3 transition-all duration-300 ${
            payment === "bank"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500 group-hover:bg-green-50 group-hover:text-green-700"
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

        {payment === "bank" && (
          <CheckCircle2
            size={22}
            className="text-green-600"
          />
        )}
      </label>

      {/* Wallet */}
      <label
        className={`group flex cursor-pointer items-center gap-5 rounded-2xl p-5 transition-all duration-300 ${
          payment === "wallet"
            ? "border-2 border-green-600 bg-green-50 shadow-sm"
            : "border border-gray-200 bg-white hover:border-green-500 hover:shadow-sm"
        }`}
      >
        <input
          type="radio"
          value="wallet"
          {...register("payment")}
          className="sr-only"
        />

        <div
          className={`rounded-2xl p-3 transition-all duration-300 ${
            payment === "wallet"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500 group-hover:bg-green-50 group-hover:text-green-700"
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

        {payment === "wallet" && (
          <CheckCircle2
            size={22}
            className="text-green-600"
          />
        )}
      </label>

      {errors?.payment && (
        <p className="text-sm font-medium text-red-500">
          {errors.payment.message}
        </p>
      )}
    </section>
  );
}
