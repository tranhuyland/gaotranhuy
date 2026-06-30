import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "gao-st25",
    name: "Gạo ST25",
    sku: "ST25-001",
    category: "Gạo thơm",
    description:
      "Gạo ST25 đạt giải Gạo ngon nhất thế giới, hạt dài, thơm lá dứa, cơm dẻo mềm.",
    shortDescription:
      "Gạo ST25 thơm ngon, dẻo mềm.",
    images: [
      "/images/products/st25.webp",
    ],
    price: 28000,
    salePrice: 26000,
    stock: 120,
    featured: true,
    unit: "kg",
    specs: [
  {
    label: "Xuất xứ",
    value: "Sóc Trăng",
  },
  {
    label: "Đóng gói",
    value: "Túi 5kg",
  },
  {
    label: "Hạn sử dụng",
    value: "12 tháng",
  },
  {
    label: "Bảo quản",
    value: "Nơi khô ráo, thoáng mát",
  },
],
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    slug: "gao-jasmine",
    name: "Gạo Jasmine",
    sku: "JAS-001",
    category: "Gạo thơm",
    description:
      "Gạo Jasmine thơm nhẹ, cơm mềm, phù hợp bữa cơm gia đình.",
    shortDescription:
      "Gạo Jasmine thơm nhẹ.",
    images: [
      "/images/products/jasmine.webp",
    ],
    price: 22000,
    stock: 80,
    featured: true,
    unit: "kg",
    specs: [
  {
    label: "Xuất xứ",
    value: "Đồng bằng sông Cửu Long",
  },
  {
    label: "Đóng gói",
    value: "Túi 5kg",
  },
  {
    label: "Hạn sử dụng",
    value: "12 tháng",
  },
  {
    label: "Bảo quản",
    value: "Nơi khô ráo, thoáng mát",
  },
],
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "3",
    slug: "gao-bac-huong",
    name: "Gạo Bắc Hương",
    sku: "BH-001",
    category: "Gạo đặc sản",
    description:
      "Gạo Bắc Hương thơm tự nhiên, vị đậm, thích hợp bữa cơm truyền thống.",
    shortDescription:
      "Gạo Bắc Hương thơm tự nhiên.",
    images: [
      "/images/products/bac-huong.webp",
    ],
    price: 24000,
    stock: 60,
    featured: false,
    unit: "kg",
    specs: [
  {
    label: "Xuất xứ",
    value: "Miền Bắc",
  },
  {
    label: "Đóng gói",
    value: "Túi 5kg",
  },
  {
    label: "Hạn sử dụng",
    value: "12 tháng",
  },
  {
    label: "Bảo quản",
    value: "Nơi khô ráo, thoáng mát",
  },
],
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
  },
];
