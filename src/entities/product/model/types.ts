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

/** Поля API для сортировки (DummyJSON) */
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
