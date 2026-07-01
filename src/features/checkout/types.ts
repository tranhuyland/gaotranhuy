import type { CheckoutFormData } from "./validation";
import type { CartItem } from "@/features/cart/types";

export interface CreateOrderParams {
  customer: CheckoutFormData;
  items: CartItem[];
}

export interface CreateOrderResponse {
  success: boolean;
  orderId: string;
}
