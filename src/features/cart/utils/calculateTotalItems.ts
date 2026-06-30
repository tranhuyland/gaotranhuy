import type { CartItem } from "../types";

export function calculateTotalItems(
  items: CartItem[]
): number {
  return items.reduce(
    (total, item) => total + item.quantity,
    0
  );
}
