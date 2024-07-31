import { Context } from '@nuxt/types';
import axios from 'axios';
import { Basket } from '~/domains/Basket/basket.models';
import {
  addToBasketService,
  changeQuantityService,
  clearBasketService,
  deleteCouponService,
  deleteFromBasketService,
  getBasketService, mergeSharedBasketService, replaceSharedBasketService,
  setCouponService,
  updateBasketService,
  copyOrderService,
} from '~/domains/Basket/basket.services';
import { cancelTokens } from '~/helpers/api';

// Получить корзину
export async function getCartController (context: Context, calculateDiscounts = true) {
  let result: Record<string, Basket> | undefined;

  try {
    result = await getBasketService(context, calculateDiscounts);
  } catch (e) {}

  return result;
}

// Применить купон
export async function setCouponController (context: Context, coupon: string) {
  let result: Record<string, Basket> | undefined;

  try {
    result = await setCouponService(context, coupon);
  } catch (e) {
    console.log(e);
  }

  return result;
}

// Удалить применённый купон
export async function deleteCouponController (context: Context) {
  let result: Record<string, Basket> | undefined;

  try {
    result = await deleteCouponService(context);
  } catch (e) {}

  return result;
}

// Обновить вариант и/или опции у товара
export async function updateBasketController (context: Context, id: number, variant: number, options: number[]) {
  let result: Record<string, Basket> | undefined;

  try {
    result = await updateBasketService(context, id, variant, options);
  } catch (e) {}

  return result;
}

// Обновить количество товаров в корзине (новое)
export async function changeQuantityController (context: Context, id: number, quantity: number) {
  const url = '/api/basket/changequantity';
  let result: Record<string, Basket> | undefined;

  if (cancelTokens[url]) {
    cancelTokens[url].cancel('Canceled by the user.');
    delete cancelTokens[url];
  }

  cancelTokens[url] = axios.CancelToken.source();

  try {
    result = await changeQuantityService(
      context,
      id,
      quantity,
      cancelTokens[url].token,
    );
  } catch (e) {}

  return result;
}

// Добавить в корзину
export async function addToBasketController (context: Context, product: number, options: string[], count: number, invoice: boolean, sharedBasket: string) {
  let result: Basket | undefined;

  try {
    result = await addToBasketService(context, product, options, count, invoice, sharedBasket);
  } catch (e) {
    throw new Error(e);
  }

  return result;
}

// Удалить товар из корзины
export async function deleteFromBasketController (context: Context, arr: number[]) {
  let result: Basket;

  try {
    result = await deleteFromBasketService(context, arr);
  } catch (e) {
    throw new Error(e);
  }

  return result;
}

// Заменить текущую корзину шаренной
export async function replaceSharedBasketController (context: Context, sharedBasket: string) {
  let result: Record<string, Basket> | undefined;

  try {
    result = await replaceSharedBasketService(context, sharedBasket);
  } catch (e) {}

  return result;
}

// Слить текущую корзину с шаренной
export async function mergeSharedBasketController (context: Context, sharedBasket: string) {
  let result: Record<string, Basket> | undefined;

  try {
    result = await mergeSharedBasketService(context, sharedBasket);
  } catch (e) {}

  return result;
}

// Очистить корзину
export async function clearBasketController (context: Context) {
  let result: Record<string, Basket> | undefined;

  try {
    result = await clearBasketService(context);
  } catch (e) {}

  return result;
}

// Скопировать заказ в корзину
export async function copyOrderController (context: Context, orderId: number) {
  let result: unknown;

  try {
    result = await copyOrderService(context, orderId);
  } catch (e) {}

  return result;
}
