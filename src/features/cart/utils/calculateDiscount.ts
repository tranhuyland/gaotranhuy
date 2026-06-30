import type { CartItem } from "../types";

export function calculateDiscount(
  items: CartItem[]
): number {
  return items.reduce((total, item) => {
    if (!item.product.salePrice) {
      return total;
    }

    const discount =
      item.product.price -
      item.product.salePrice;

    return total + discount * item.quantity;
  }, 0);
}
