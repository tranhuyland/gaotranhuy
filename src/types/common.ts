export interface BaseEntity {
  id: string;

  createdAt: string;

  updatedAt: string;
}

export interface Seo {
  title: string;

  description: string;

  keywords?: string[];

  image?: string;
}
