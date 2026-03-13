export interface IProduct {
  id: number;
  name: string;
  price: number;
  vendor: string;
  article: string;
  rating: number;
  inStock: boolean;
}

export interface IProductFilters {
  search?: string;
  sortBy?: 'price' | 'rating';
  sortOrder?: 'asc' | 'desc';
}

export interface IProductFormData {
  name: string;
  price: number;
  vendor: string;
  article: string;
}
