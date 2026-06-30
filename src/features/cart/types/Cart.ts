import type { CartItem } from "./CartItem";

export interface CartSummary {
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  totalItems: number;
}

export interface Cart {
  items: CartItem[];

  summary: CartSummary;
}
