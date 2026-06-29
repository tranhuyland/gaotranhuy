export const siteConfig = {
  name: "Gạo Trần Huy",

  shortName: "GTH",

  title: "Gạo Trần Huy | Gạo sạch cho mọi gia đình",

  description:
    "Chuyên cung cấp gạo ST25, Jasmine, Bắc Hương, Nàng Thơm và nhiều loại gạo chất lượng cao.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://gaotranhuy.vercel.app",

  logo: "/logo.svg",

  ogImage: "/images/og-image.jpg",

  locale: "vi_VN",

  email: "contact@gaotranhuy.vn",

  phone: "0905000000",

  facebook: "",

  zalo: "",

  keywords: [
    "gạo sạch",
    "gạo ST25",
    "gạo Jasmine",
    "gạo Bắc Hương",
    "gạo Nàng Thơm",
    "mua gạo online"
  ]
} as const;

export type SiteConfig = typeof siteConfig;
