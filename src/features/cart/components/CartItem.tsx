"use client";

import Image from "next/image";
import { useCartStore } from "../store";

import type { CartItem as CartItemType } from "../types";

interface Props {
  item: CartItemType;
}

export function CartItem({ item }: Props) {
  const { increase, decrease, removeItem } =
    useCartStore();

  return (
    <div className="flex gap-3 border-b py-3">
      <div className="relative h-16 w-16">
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <p className="text-sm font-medium">
          {item.product.name}
        </p>

        <p className="text-xs text-gray-500">
          {(
            item.product.salePrice ??
            item.product.price
          ).toLocaleString("vi-VN")}
          đ
        </p>

        <div className="mt-2 flex items-center gap-2">
          <button onClick={() => decrease(item.product.id)}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increase(item.product.id)}>
            +
          </button>

          <button
            onClick={() =>
              removeItem(item.product.id)
            }
            className="ml-auto text-xs text-red-500"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}
