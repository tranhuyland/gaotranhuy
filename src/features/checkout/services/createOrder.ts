import type { Order } from "../types/order";

export async function createOrder(
  order: Order
) {
  console.log("ORDER", order);

  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  return {
    success: true,
    orderId: crypto.randomUUID(),
  };
}
