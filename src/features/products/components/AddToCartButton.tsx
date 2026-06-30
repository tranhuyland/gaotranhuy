"use client";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/features/cart/store";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const addItem = useCartStore(
    (state) => state.addItem
  );

  const isOutOfStock =
    product.stock <= 0;

  return (
    <Button
      onClick={() => addItem(product)}
      disabled={isOutOfStock}
      className="w-full"
    >
      <ShoppingCart className="h-5 w-5" />

      {isOutOfStock
        ? "Hết hàng"
        : "Thêm vào giỏ hàng"}
    </Button>
  );
}
