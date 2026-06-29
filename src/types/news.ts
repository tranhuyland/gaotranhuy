import type { BaseEntity, Seo } from "./common";

export interface News extends BaseEntity {
  slug: string;

  title: string;

  excerpt: string;

  content: string;

  thumbnail: string;

  author: string;

  seo?: Seo;
}
