import type { ProductTableRowData } from './types';

import type { IProduct } from '@/entities/product/model/types';

function formatPrice(value: number): { main: string; decimals: string } {
  const fixed = value.toFixed(2);
  const [main, dec] = fixed.split('.');
  const mainFormatted = Number(main).toLocaleString('ru-RU');

  return { main: mainFormatted.replace(/\s/g, ' '), decimals: `,${dec ?? '00'}` };
}

export const mapProductToRow = (product: IProduct): ProductTableRowData => {
  const rating = product.rating;
  const ratingStr = `${Math.round(rating * 10) / 10}/5`;
  const { main: priceMain, decimals: priceDecimals } = formatPrice(product.price);

  return {
    id: product.id,
    name: product.title,
    category: product.category ?? '-',
    vendor: product.brand ?? '-',
    article: product.sku ?? '-',
    rating: ratingStr,
    ratingLow: rating < 4,
    price: priceMain,
    priceDecimals,
    thumbnail: product.thumbnail,
    selected: false,
  };
};
