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
  payment: CheckoutFormData["payment"];
}

export function CheckoutForm({
  register,
  errors,
  payment,
}: CheckoutFormProps) {
  return (
    <section className="space-y-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Thông tin khách hàng
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Vui lòng nhập đầy đủ thông tin để chúng tôi giao hàng nhanh chóng.
        </p>
      </div>

      {/* Họ tên */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Họ và tên <span className="text-red-500">*</span>
        </label>

        <input
          {...register("fullName")}
          placeholder="Nhập họ và tên"
          className="h-12 w-full rounded-2xl border border-gray-300 bg-white px-4 text-sm transition-all duration-300 placeholder:text-gray-400 hover:border-green-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />

        {errors.fullName && (
          <p className="text-sm font-medium text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* SĐT */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Số điện thoại <span className="text-red-500">*</span>
        </label>

        <input
          {...register("phone")}
          placeholder="Nhập số điện thoại"
          className="h-12 w-full rounded-2xl border border-gray-300 bg-white px-4 text-sm transition-all duration-300 placeholder:text-gray-400 hover:border-green-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />

        {errors.phone && (
          <p className="text-sm font-medium text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>

        <input
          type="email"
          {...register("email")}
          placeholder="example@email.com"
          className="h-12 w-full rounded-2xl border border-gray-300 bg-white px-4 text-sm transition-all duration-300 placeholder:text-gray-400 hover:border-green-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />

        {errors.email && (
          <p className="text-sm font-medium text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Địa chỉ */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Địa chỉ <span className="text-red-500">*</span>
        </label>

        <input
          {...register("address")}
          placeholder="Số nhà, tên đường..."
          className="h-12 w-full rounded-2xl border border-gray-300 bg-white px-4 text-sm transition-all duration-300 placeholder:text-gray-400 hover:border-green-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />

        {errors.address && (
          <p className="text-sm font-medium text-red-500">
            {errors.address.message}
          </p>
        )}
      </div>

      {/* Thành phố */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Tỉnh / Thành phố <span className="text-red-500">*</span>
        </label>

        <input
          {...register("city")}
          placeholder="Ví dụ: TP. Huế"
          className="h-12 w-full rounded-2xl border border-gray-300 bg-white px-4 text-sm transition-all duration-300 placeholder:text-gray-400 hover:border-green-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />

        {errors.city && (
          <p className="text-sm font-medium text-red-500">
            {errors.city.message}
          </p>
        )}
      </div>

      {/* Ghi chú */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Ghi chú
        </label>

        <textarea
          rows={4}
          {...register("note")}
          placeholder="Ghi chú cho đơn hàng (không bắt buộc)"
          className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm transition-all duration-300 placeholder:text-gray-400 hover:border-green-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
        />
      </div>

      <PaymentMethod
        register={register}
        errors={errors}
        payment={payment}
      />
    </section>
  );
}
