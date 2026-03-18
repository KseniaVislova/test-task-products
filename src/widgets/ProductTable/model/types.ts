export interface ProductTableRowData {
  id: number;
  name: string;
  category: string;
  vendor: string;
  article: string;
  rating: string;
  ratingLow?: boolean;
  price: string;
  priceDecimals?: string;
  thumbnail?: string;
  selected?: boolean;
}
