export function calculateShipping(
  subtotal: number
): number {
  if (subtotal === 0) {
    return 0;
  }

  if (subtotal >= 500000) {
    return 0;
  }

  return 30000;
}
