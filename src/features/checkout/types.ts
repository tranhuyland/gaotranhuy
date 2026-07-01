import type { CheckoutFormData } from "./validation";

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CreateOrderParams {
  customer: CheckoutFormData;
  items: OrderItem[];
}

export interface CreateOrderResponse {
  success: boolean;
  orderId: string;
}
