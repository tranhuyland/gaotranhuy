"use client";

import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import type { CheckoutFormData } from "../validation";

import { PaymentMethod } from "./PaymentMethod";

interface CheckoutFormProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
}

export function CheckoutForm({
  register,
  errors,
}: CheckoutFormProps) {
  return (
    <section className="space-y-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">
        Thông tin khách hàng
      </h2>

      {/* Họ tên */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Họ và tên
        </label>

        <input
          {...register("fullName")}
          placeholder="Nhập họ và tên"
          className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm transition placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />

        <p className="mt-2 text-sm font-medium text-red-500">
          {errors.fullName?.message}
        </p>
      </div>

      {/* SĐT */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Số điện thoại
        </label>

        <input
          {...register("phone")}
          placeholder="Nhập số điện thoại"
          className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm transition placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />

        <p className="mt-2 text-sm font-medium text-red-500">
          {errors.phone?.message}
        </p>
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Email
        </label>

        <input
          type="email"
          {...register("email")}
          placeholder="example@email.com"
          className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm transition placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />

        <p className="mt-2 text-sm font-medium text-red-500">
          {errors.email?.message}
        </p>
      </div>

      {/* Địa chỉ */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Địa chỉ
        </label>

        <input
          {...register("address")}
          placeholder="Số nhà, tên đường..."
          className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm transition placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />

        <p className="mt-2 text-sm font-medium text-red-500">
          {errors.address?.message}
        </p>
      </div>

      {/* Thành phố */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Tỉnh / Thành phố
        </label>

        <input
          {...register("city")}
          placeholder="Ví dụ: TP. Huế"
          className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm transition placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />

        <p className="mt-2 text-sm font-medium text-red-500">
          {errors.city?.message}
        </p>
      </div>

      {/* Ghi chú */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Ghi chú
        </label>

        <textarea
          rows={4}
          {...register("note")}
          placeholder="Ghi chú cho đơn hàng (không bắt buộc)"
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm transition placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />
      </div>

      {/* Phương thức thanh toán */}
      <PaymentMethod
        register={register}
        errors={errors}
      />
    </section>
  );
}
