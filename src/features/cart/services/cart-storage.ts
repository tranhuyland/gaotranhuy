import type { CartItem } from "../types";

const STORAGE_KEY = "gaotranhuy-cart-v1";

export function loadCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const value = localStorage.getItem(STORAGE_KEY);

    if (!value) {
      return [];
    }

    return JSON.parse(value) as CartItem[];
  } catch {
    return [];
  }
}

export function saveCart(
  items: CartItem[]
): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(items)
  );
}

export function clearCartStorage(): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
}
