import type { Product } from "@/types/product";

interface PriceBoxProps {
  product: Product;
}

export function PriceBox({
  product,
}: PriceBoxProps) {
  const currentPrice = product.salePrice ?? product.price;

  const discount =
    product.salePrice && product.salePrice < product.price
      ? Math.round(
          ((product.price - product.salePrice) / product.price) * 100
        )
      : null;

  return (
    <section
      aria-labelledby="product-price"
      className="rounded-2xl border border-green-100 bg-green-50 p-6"
    >
      <h2 id="product-price" className="sr-only">
        Giá bán
      </h2>

      <div className="flex flex-wrap items-center gap-3">
        <p className="text-3xl font-bold text-green-700 lg:text-4xl">
          {currentPrice.toLocaleString("vi-VN")}đ
        </p>

        {discount && (
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">
            -{discount}%
          </span>
        )}
      </div>

      {product.salePrice && (
        <p className="mt-2 text-lg text-gray-500 line-through">
          {product.price.toLocaleString("vi-VN")}đ
        </p>
      )}

      <div className="mt-6 grid gap-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Đơn vị</span>

          <span className="font-medium capitalize">
            {product.unit}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500">Tình trạng</span>

          {product.stock > 0 ? (
            <span className="font-medium text-green-700">
              Còn hàng ({product.stock})
            </span>
          ) : (
            <span className="font-medium text-red-600">
              Hết hàng
            </span>
          )}
        </div>
      </div>

      {discount && (
        <div className="mt-5 rounded-xl bg-white p-4 text-sm text-gray-700">
          Bạn tiết kiệm{" "}
          <strong>
            {(product.price - currentPrice).toLocaleString("vi-VN")}đ
          </strong>{" "}
          ({discount}%)
        </div>
      )}
    </section>
  );
}
