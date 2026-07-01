"use client";

import { useState } from "react";

import type { Product } from "@/types/product";

import { QuantitySelector } from "@/features/cart/components/QuantitySelector";
import { AddToCartButton } from "@/features/cart/components/AddToCartButton";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({
  product,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <section
      aria-labelledby="product-title"
      className="space-y-6"
    >
      {/* Tên sản phẩm */}
      <header className="space-y-2">
        <h1
          id="product-title"
          className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl"
        >
          {product.name}
        </h1>

        <p className="text-base text-gray-600">
          {product.shortDescription}
        </p>
      </header>

      {/* Thông tin cơ bản */}
      <dl className="grid grid-cols-1 gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-gray-500">
            SKU
          </dt>

          <dd className="mt-1 font-medium text-gray-900">
            {product.sku}
          </dd>
        </div>

        <div>
          <dt className="text-gray-500">
            Danh mục
          </dt>

          <dd className="mt-1 font-medium text-gray-900">
            {product.category}
          </dd>
        </div>

        <div>
          <dt className="text-gray-500">
            Đơn vị
          </dt>

          <dd className="mt-1 font-medium text-gray-900">
            {product.unit}
          </dd>
        </div>

        <div>
          <dt className="text-gray-500">
            Tồn kho
          </dt>

          <dd
            className={`mt-1 font-medium ${
              product.stock > 0
                ? "text-green-700"
                : "text-red-600"
            }`}
          >
            {product.stock > 0
              ? `Còn ${product.stock} sản phẩm`
              : "Hết hàng"}
          </dd>
        </div>
      </dl>

      {/* Chọn số lượng */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">
          Số lượng
        </p>

        <QuantitySelector
          value={quantity}
          max={product.stock}
          onDecrease={() =>
            setQuantity((q) =>
              Math.max(1, q - 1)
            )
          }
          onIncrease={() =>
            setQuantity((q) =>
              Math.min(product.stock, q + 1)
            )
          }
        />
      </div>

      {/* Nút thêm vào giỏ */}
      <AddToCartButton
        product={product}
        quantity={quantity}
      />
    </section>
  );
}
