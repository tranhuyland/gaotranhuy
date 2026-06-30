import { Container, Section, SectionTitle } from "@/components/ui";
import { ProductCard } from "@/features/products/components";
import { getFeaturedProducts } from "@/lib/products/product-service";

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionTitle
          title="Sản phẩm nổi bật"
          description="Những sản phẩm được khách hàng lựa chọn nhiều nhất."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

