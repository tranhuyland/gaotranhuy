// src/lib/products/product.service.ts

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  rating?: number;
  reviewCount?: number;
};

const products: Product[] = [
  {
    id: "1",
    slug: "gao-thom-jasmine-5kg",
    name: "Gạo thơm Jasmine 5kg",
    description: "Gạo thơm dẻo, phù hợp gia đình Việt.",
    price: 180000,
    discountPrice: 165000,
    images: ["/images/rice-1.jpg", "/images/rice-2.jpg"],
    rating: 4.8,
    reviewCount: 120,
  },
  {
    id: "2",
    slug: "gao-nep-cai-hoa-vang",
    name: "Gạo nếp cái hoa vàng",
    description: "Nếp dẻo, thơm đặc trưng.",
    price: 220000,
    images: ["/images/rice-3.jpg"],
    rating: 4.7,
    reviewCount: 80,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts() {
  return products;
}
