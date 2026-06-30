export interface Category {
  name: string;
  href: string;
  icon: string;
}

export const categories: Category[] = [
  {
    name: "Gạo Bình Dân – Gạo Quê",
    href: "/danh-muc/gao-binh-dan",
    icon: "🌾",
  },
  {
    name: "Gạo Đặc Sản – Dẻo Thơm",
    href: "/danh-muc/gao-dac-san",
    icon: "🍚",
  },
  {
    name: "Gạo Nếp – Gạo Lứt",
    href: "/danh-muc/gao-nep-gao-lut",
    icon: "🌿",
  },
  {
    name: "Gạo Phổ Thông – Thơm Dẻo Vừa",
    href: "/danh-muc/gao-pho-thong",
    icon: "🌾",
  },
  {
    name: "Đặc Sản & Gia Vị",
    href: "/danh-muc/dac-san-gia-vi",
    icon: "🫙",
  },
  {
    name: "Sản phẩm khác",
    href: "/danh-muc/san-pham-khac",
    icon: "📦",
  },
];
