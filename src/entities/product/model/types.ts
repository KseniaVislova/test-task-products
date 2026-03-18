export interface IProduct {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  brand: string;
  sku: string;
  thumbnail: string;
}

export type ProductSortBy = 'title' | 'brand' | 'sku' | 'rating' | 'price';

export type ProductSortOrder = 'asc' | 'desc';

export interface IProductListParams {
  limit?: number;
  skip?: number;
  search?: string;
  sortBy?: ProductSortBy;
  order?: ProductSortOrder;
}

export interface IProductListResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProductFormData {
  name: string;
  price: number;
  vendor: string;
  article: string;
}

export interface IProductAddRequest {
  title: string;
  category: string;
  price: number;
  rating: number;
  brand: string;
  sku?: string;
  thumbnail?: string;
}
