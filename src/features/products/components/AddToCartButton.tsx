"use client";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  loading?: boolean;
  onAddToCart?: (product: Product, quantity: number) => void;
}

export function AddToCartButton({
  product,
  quantity = 1,
  loading = false,
  onAddToCart,
}: AddToCartButtonProps) {
  const isOutOfStock = product.stock <= 0;

  const handleClick = () => {
    if (isOutOfStock || loading) return;

    onAddToCart?.(product, quantity);
  };

  return (
    <Button
      type="button"
      className="w-full gap-2"
      disabled={isOutOfStock || loading}
      onClick={handleClick}
    >
      <ShoppingCart className="h-5 w-5" />

      {loading
        ? "Đang thêm..."
        : isOutOfStock
          ? "Hết hàng"
          : "Thêm vào giỏ hàng"}
    </Button>
  );
}
