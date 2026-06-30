import type { ProductSpec } from "@/types/product";

interface ProductSpecsProps {
  specs: ProductSpec[];
}

export function ProductSpecs({
  specs,
}: ProductSpecsProps) {
  if (!specs.length) return null;

  return (
    <section
      aria-labelledby="product-specifications"
      className="rounded-2xl border border-gray-200 bg-white p-6"
    >
      <h2
        id="product-specifications"
        className="mb-5 text-xl font-semibold text-gray-900"
      >
        Thông số sản phẩm
      </h2>

      <dl className="divide-y divide-gray-200">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="grid grid-cols-3 gap-4 py-3"
          >
            <dt className="font-medium text-gray-600">
              {spec.label}
            </dt>

            <dd className="col-span-2 text-gray-900">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
