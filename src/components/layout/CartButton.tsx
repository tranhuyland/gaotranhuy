"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface CartButtonProps {
  count?: number;
}

export function CartButton({
  count = 0,
}: CartButtonProps) {
  return (
    <Link
      href="/gio-hang"
      aria-label="Giỏ hàng"
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-gray-200
        bg-white
        transition-all
        duration-200
        hover:border-green-600
        hover:bg-green-50
        hover:text-green-700
      "
    >
      <ShoppingCart size={22} strokeWidth={2} />

      {count > 0 && (
        <span
          className="
            absolute
            -right-1
            -top-1
            flex
            h-5
            min-w-5
            items-center
            justify-center
            rounded-full
            bg-red-500
            px-1
            text-[10px]
            font-bold
            text-white
          "
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
