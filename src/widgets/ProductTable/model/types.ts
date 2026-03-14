export interface ProductTableRowData {
  name: string;
  category: string;
  vendor: string;
  article: string;
  rating: string;
  ratingLow?: boolean;
  price: string;
  priceDecimals?: string;
  selected?: boolean;
}
