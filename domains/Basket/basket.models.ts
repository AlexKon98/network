import { Context } from '@nuxt/types';
import { RequestResponse } from '~/domains/Request/request.model';
import { Image } from '~/domains/Base/base.models';

export interface GetBasketParams {
  context: Context;
}

// export interface GetBasket extends RequestResponse{
//   data: {
//     basket: string[];
//   }
// }

export interface Coupon {
  code: string;
  valid: boolean;
  discount: string;
  discountSum: number;
  discountSumFormatted: string;
  error?: string;
}

export interface Price {
  finalPrice: number;
  fullPrice: number;
  productsDiscount: number;
  couponDiscount: number;
  discountPercentage: number;
}

export interface Options {
  id: number;
  productId: number;
  name: string;
  price: number;
  priceFormatted: string;
  type: string;
}

export interface Accessories {
  // TODO: добавить типы к аксессуарам
}

export interface Product {
    id: number;
    productId: number;
    url: string;
    img: Image,
    image: Image;
    name: string;
    price: number;
    priceSum: number;
    oldPrice: number;
    oldPriceSum: number;
    quantity: number;
    invoice: boolean;
    index: number;
    inFavorite: boolean;
    inCart?: boolean;
    inCompare?: false
    options: Options[];
    accessories: Accessories;
    canBuy: boolean;
    hasOptions: boolean;
    hasAccessories: boolean;
}

export interface Basket {
  coupon: Coupon | null;
  saleSum: number;
  saleSumFormatted: string;
  price: number;
  priceFormatted: string;
  oldPrice: number;
  oldPriceFormatted: string;
  items: Product[];
}

export interface ShareLink {
  name: string;
  url: string;
}

export interface GetBasketResponse extends RequestResponse {
  data: {
    basket: Record<string, Basket>;
  };
}
