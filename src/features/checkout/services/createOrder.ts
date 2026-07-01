import type { CheckoutFormData } from "../validation";

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CreateOrderParams {
  customer: CheckoutFormData;
  items: OrderItem[];
}

export async function createOrder({
  customer,
  items,
}: CreateOrderParams) {
  // TODO:
  // Sau này gọi API:
  // return await api.post("/orders", { customer, items });

  console.log("Customer:", customer);
  console.log("Items:", items);

  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  return {
    success: true,
    orderId: crypto.randomUUID(),
  };
}
