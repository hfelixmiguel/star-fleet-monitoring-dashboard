export interface SpaceflightNewsArticle {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
}

export interface SpaceflightNewsBlog {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
}

export interface SpaceflightNewsReport {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
}

export interface SpaceflightNewsResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export type NewsType = 'articles' | 'blogs' | 'reports';
