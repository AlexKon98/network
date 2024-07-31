import { Context } from '@nuxt/types';
import { CancelToken } from 'axios';
import { RequestResponse } from '../Request/request.model';
import { sendRequest } from '~/helpers/api';
import {
  Basket,
  GetBasketResponse,
} from '~/domains/Basket/basket.models';

// Получить корзину
export function getBasketService (context: Context, calculateDiscounts): Promise<Record<string, Basket>> {
  const data = {
    calculateDiscounts
  };

  const url = '/api/basket/getbasket';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetBasketResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data?.basket ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка в корзине';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Изменить количество товара
export function changeQuantityService (context: Context, id: number, count: number, cancelToken?: CancelToken): Promise<Record<string, Basket>> {
  const data = {
    product: id,
    count
  };

  const url = '/api/basket/changequantity';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetBasketResponse>(context, url, method, data, cancelToken)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data?.basket);
        } else {
          const errorMessage = response?.error || 'Ошибка в корзине';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Применить купон
export function setCouponService (context: Context, coupon: string): Promise<Record<string, Basket>> {
  const data = {
    coupon
  };

  const url = '/api/basket/setcoupon';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetBasketResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success && response?.data?.error) {
          resolve({
            ...response?.data?.basket,
            coupon: {
              error: response?.data?.error
            }
          });
        }

        if (response?.success) {
          resolve(response?.data?.basket);
        } else {
          const errorMessage = response?.error || 'Ошибка в корзине';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Удалить применённый купон
export function deleteCouponService (context: Context): Promise<Record<string, Basket>> {
  const url = '/api/basket/deletecoupon';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetBasketResponse>(context, url, method)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data?.basket ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка в корзине';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Обновить вариант и/или опции у товара
export function updateBasketService (context: Context, id: number, variant: number, options: number[]): Promise<Record<string, Basket>> {
  const data = {
    product: id,
    variant,
    options
  };

  const url = '/api/basket/update';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetBasketResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data?.basket ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка в корзине';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Добавить в корзину
export function addToBasketService (context: Context, product: number, options: string[], count: number, invoice: boolean, sharedBasket: string): Promise<Basket> {
  const data = {
    product,
    options,
    count,
    invoice,
    sharedBasket,
  };

  const url = '/api/basket/add';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetBasketResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data?.basket ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка в корзине';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Очистить корзину
export function clearBasketService (context: Context): Promise<Record<string, Basket>> {
  const url = '/api/basket/clear';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetBasketResponse>(context, url, method)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data?.basket ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка в корзине';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Заменить текущую корзину шаренной
export function replaceSharedBasketService (context: Context, sharedBasket: string): Promise<Record<string, Basket>> {
  const url = '/api/basket/replaceshared';
  const method = 'post';

  const data = {
    sharedBasket,
  };

  return new Promise((resolve, reject) => {
    sendRequest<GetBasketResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data?.basket ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка замены текущей корзины';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Слить текущую корзину с шаренной
export function mergeSharedBasketService (context: Context, sharedBasket): Promise<Record<string, Basket>> {
  const url = '/api/basket/mergeshared';
  const method = 'post';

  const data = {
    sharedBasket,
  };

  return new Promise((resolve, reject) => {
    sendRequest<GetBasketResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data?.basket ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка слития текущей и шаренной корзины';
          reject(errorMessage);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Удалить товар из корзины
export function deleteFromBasketService (context: Context, arr: Array<number>): Promise<Basket> {
  const data = {
    productIds: arr,
  };

  const url = '/api/basket/delete';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetBasketResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data?.basket ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка в корзине';
          reject(errorMessage);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Скопировать заказ в корзину
export function copyOrderService (context: Context, orderId: number) {
  const data = {
    orderId
  };

  const url = '/api/basket/copyfromorder';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetBasketResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data?.basket ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка в корзине';
          reject(errorMessage);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}
