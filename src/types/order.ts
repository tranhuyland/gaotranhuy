import type { CartItem } from "./cart";

export interface Customer {
  fullName: string;

  phone: string;

  email?: string;

  address: string;

  note?: string;
}

export interface Order {
  id: string;

  customer: Customer;

  items: CartItem[];

  total: number;

  status:
    | "pending"
    | "confirmed"
    | "shipping"
    | "completed"
    | "cancelled";

  createdAt: string;
}
