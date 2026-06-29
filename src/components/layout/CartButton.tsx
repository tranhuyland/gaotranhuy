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
      className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:border-green-600 hover:text-green-600"
      aria-label="Giỏ hàng"
    >
      <ShoppingCart size={22} />

      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
