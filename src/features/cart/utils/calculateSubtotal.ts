import type { CartItem } from "../types";

export function calculateSubtotal(
  items: CartItem[]
): number {
  return items.reduce((total, item) => {
    const price =
      item.product.salePrice ?? item.product.price;

    return total + price * item.quantity;
  }, 0);
}
