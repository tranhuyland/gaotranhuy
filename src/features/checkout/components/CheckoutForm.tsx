"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  checkoutSchema,
  type CheckoutFormData,
} from "../validation";

import { PaymentMethod } from "./PaymentMethod";

export function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-bold">
        Thông tin khách hàng
      </h2>

      {/* Họ tên */}
      <div>
        <label className="mb-2 block font-medium">
          Họ và tên
        </label>

        <input
          {...register("fullName")}
          className="w-full rounded-xl border p-3"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.fullName?.message}
        </p>
      </div>

      {/* SĐT */}
      <div>
        <label className="mb-2 block font-medium">
          Số điện thoại
        </label>

        <input
          {...register("phone")}
          className="w-full rounded-xl border p-3"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.phone?.message}
        </p>
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block font-medium">
          Email
        </label>

        <input
          {...register("email")}
          className="w-full rounded-xl border p-3"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.email?.message}
        </p>
      </div>

      {/* Địa chỉ */}
      <div>
        <label className="mb-2 block font-medium">
          Địa chỉ
        </label>

        <input
          {...register("address")}
          className="w-full rounded-xl border p-3"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.address?.message}
        </p>
      </div>

      {/* Thành phố */}
      <div>
        <label className="mb-2 block font-medium">
          Tỉnh / Thành phố
        </label>

        <input
          {...register("city")}
          className="w-full rounded-xl border p-3"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.city?.message}
        </p>
      </div>

      {/* Ghi chú */}
      <div>
        <label className="mb-2 block font-medium">
          Ghi chú
        </label>

        <textarea
          rows={4}
          {...register("note")}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <PaymentMethod />

      <button
        type="submit"
        className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
      >
        Tiếp tục
      </button>
    </form>
  );
}
