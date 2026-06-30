"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store";

interface CartIconProps {
  onOpen: () => void;
}

export function CartIcon({ onOpen }: CartIconProps) {
  const totalItems = useCartStore(
    (state) => state.summary.totalItems
  );

  return (
    <button
      onClick={onOpen}
      className="relative"
    >
      <ShoppingCart className="h-6 w-6" />

      {totalItems > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          {totalItems}
        </span>
      )}
    </button>
  );
}
