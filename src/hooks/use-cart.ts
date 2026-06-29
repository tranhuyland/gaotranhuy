"use client";

import { useLocalStorage } from "./use-local-storage";

import type { Cart } from "@/types";

export function useCart() {
  const [cart, setCart] = useLocalStorage<Cart>(
    "cart",
    {
      items: [],
      total: 0,
    }
  );

  return {
    cart,
    setCart,
  };
}
