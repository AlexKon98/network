import { Context } from '@nuxt/types';
import { RequestResponse } from '~/domains/Request/request.model';

export interface GetFavoriteParams {
  context: Context;
}

export interface Sticker {
  name: string,
  code: string
}

export interface Image {
  src: string,
  big: string,
  small: string,
  medium: string,
  alt: string,
}

export interface Product {
  id: number,
  offerId: number,
  name: string,
  shortName: string,
  link: string,
  productCode: number,
  stickers: Sticker[],
  images: Record<string, Image[]>,
  stock: boolean,
  showStock: boolean,
  description: string,
  price: {
    price: number,
      priceOld: number
  },
  rating: number,
  reviews: string,
  manager: [],
  additional: string,
  mainButton: string,
  allowCompare: false,
  inFavorite: boolean,
  inCompare: boolean,
  inCart: boolean
}

export interface CompareDataGroups {
  name: string,
  count: number,
  products: Product[]
}

export interface CompareData {
  groups: CompareDataGroups[],
  totalCount: number,
}

export interface CompareIdsData {
  productIds: number[],
  totalCount: number,
}

export interface GetCompareResponse extends RequestResponse {
  data: CompareData
}

export interface GetCompareIdsResponse extends RequestResponse {
  data: CompareIdsData
}
