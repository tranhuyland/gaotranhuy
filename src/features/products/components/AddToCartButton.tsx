"use client";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/features/cart/store";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
}

export function AddToCartButton({
  product,
  quantity = 1,
}: AddToCartButtonProps) {
  const addItem = useCartStore(
    (state) => state.addItem
  );

  const isOutOfStock =
    product.stock <= 0;

  return (
    <Button
      onClick={() =>
        addItem(product, quantity)
      }
      disabled={isOutOfStock}
      className="flex w-full items-center justify-center gap-2"
    >
      <ShoppingCart className="h-5 w-5" />

      {isOutOfStock
        ? "Hết hàng"
        : "Thêm vào giỏ hàng"}
    </Button>
  );
}
