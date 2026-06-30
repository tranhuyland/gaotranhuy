import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gaotranhuy.vn",
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: "https://gaotranhuy.vn/san-pham",
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: "https://gaotranhuy.vn/gioi-thieu",
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://gaotranhuy.vn/lien-he",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
