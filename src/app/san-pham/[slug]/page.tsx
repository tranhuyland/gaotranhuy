import { notFound } from "next/navigation";

import {
  ProductDescription,
  ProductGallery,
  ProductInfo,
  ProductSpecs,
  PriceBox,
  RelatedProducts,
  AddToCartButton,
} from "@/features/products/components";

import {
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products/product-service";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  const relatedProducts =
    getRelatedProducts(product);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">

      <div className="grid gap-10 lg:grid-cols-2">

        <ProductGallery
          images={product.images}
          productName={product.name}
        />

        <div className="space-y-6">

          <ProductInfo product={product} />

          <PriceBox product={product} />

          <AddToCartButton
            product={product}
          />

        </div>

      </div>

      <div className="mt-12">

        <ProductDescription
          description={product.description}
        />

      </div>

      <div className="mt-8">

        <ProductSpecs
          specs={product.specs}
        />

      </div>

      <div className="mt-12">

        <RelatedProducts
          products={relatedProducts}
        />

      </div>

    </main>
  );
}
