import { Context } from '@nuxt/types';
import { sendRequest } from '~/helpers/api';
import {
  CurrentOrder,
  CurrentOrderProps,
  GetOrderDataResponse, OrderCancelResponse,
  OrderLink,
  OrderLinkResponse,
} from '~/domains/Order/order.models';
import { RequestResponse } from '~/domains/Request/request.model';

// Получить информацию о текущем заказе
export function getOrderDataService (context: Context, productIds: number[]): Promise<CurrentOrder | {}> {
  const data = { productIds };
  const url = '/api/order/getorderdata';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetOrderDataResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось получить данные о заказе';
          reject(new Error(errorMessage));
        }
      });
  });
}

// Получить информацию о текущем заказе
export function createOrderService (context: Context, data: CurrentOrderProps): Promise<OrderLink> {
  const url = '/api/order/create';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<OrderLinkResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data);
        } else {
          reject(response?.error || 'Не удалось создать заказ');
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Отменить заказ
export function cancelOrderService (context: Context, data: {orderId: number}): Promise<OrderCancelResponse> {
  const url = '/api/order/cancel';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<RequestResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data);
        } else {
          reject(response?.error || 'Не удалось отменить заказ');
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Загрузить все заказы
export function loadOrdersService (context: Context) : Promise<any> {
  const url = '/api/order/getorders';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<RequestResponse>(context, url, method, {})
      .then((response) => {
        if (response?.success) {
          resolve(response?.data);
        } else {
          reject(response?.error || 'Не удалось отменить заказ');
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}
