import type {
  CreateOrderParams,
  CreateOrderResponse,
} from "../types";

export async function createOrder({
  customer,
  items,
}: CreateOrderParams): Promise<CreateOrderResponse> {
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
