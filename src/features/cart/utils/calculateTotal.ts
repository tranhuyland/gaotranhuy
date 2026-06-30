export function calculateTotal(
  subtotal: number,
  discount: number,
  shippingFee: number
): number {
  return subtotal + shippingFee;
}
