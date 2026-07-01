"use client";

import { CreditCard, Landmark, Wallet } from "lucide-react";
import { useState } from "react";

type PaymentType =
  | "cod"
  | "bank"
  | "wallet";

export function PaymentMethod() {
  const [payment, setPayment] =
    useState<PaymentType>("cod");

  return (
    <section className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6">
      <h3 className="text-xl font-semibold">
        Phương thức thanh toán
      </h3>

      {/* COD */}
      <label
        className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
          payment === "cod"
            ? "border-green-600 bg-green-50"
            : "border-gray-200"
        }`}
      >
        <input
          type="radio"
          name="payment"
          checked={payment === "cod"}
          onChange={() =>
            setPayment("cod")
          }
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
            Thanh toán bằng tiền mặt khi
            nhận hàng.
          </p>
        </div>
      </label>

      {/* Bank */}
      <label
        className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
          payment === "bank"
            ? "border-green-600 bg-green-50"
            : "border-gray-200"
        }`}
      >
        <input
          type="radio"
          name="payment"
          checked={payment === "bank"}
          onChange={() =>
            setPayment("bank")
          }
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
            Chuyển khoản trước khi giao
            hàng.
          </p>
        </div>
      </label>

      {/* Wallet */}
      <label
        className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
          payment === "wallet"
            ? "border-green-600 bg-green-50"
            : "border-gray-200"
        }`}
      >
        <input
          type="radio"
          name="payment"
          checked={payment === "wallet"}
          onChange={() =>
            setPayment("wallet")
          }
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
    </section>
  );
}
