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

export interface IProductListParams {
  limit?: number;
  skip?: number;
  search?: string;
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
