interface ProductDescriptionProps {
  description: string;
}

export function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <section
      aria-labelledby="product-description"
      className="rounded-2xl border border-gray-200 bg-white p-6"
    >
      <h2
        id="product-description"
        className="mb-4 text-xl font-semibold text-gray-900"
      >
        Mô tả sản phẩm
      </h2>

      <div className="prose prose-gray max-w-none">
        {description ? (
          <p className="whitespace-pre-line leading-8 text-gray-700">
            {description}
          </p>
        ) : (
          <p className="text-gray-500">
            Chưa có mô tả cho sản phẩm này.
          </p>
        )}
      </div>
    </section>
  );
}
