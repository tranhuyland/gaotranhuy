import type { CartItem } from "@/features/cart/types";

export interface Order {
  customer: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    note?: string;
  };

  payment: "cod" | "bank" | "wallet";

  items: CartItem[];

  total: number;

  createdAt: string;
}
