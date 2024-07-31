import { Context } from '@nuxt/types';
import {
  cancelOrderService,
  createOrderService,
  getOrderDataService,
  loadOrdersService,
} from '~/domains/Order/order.services';
import { CurrentOrder, CurrentOrderProps, OrderCancelResponse, OrderLink } from '~/domains/Order/order.models';
import { serializeData } from '~/helpers/utils';

// Получить информацию о текущем заказе
export async function getOrderDataController (context: Context, productIds: number[]) {
  let result: CurrentOrder | {};

  try {
    result = await getOrderDataService(context, productIds);
  } catch (e) {
  }

  return result;
}

// Создать новый заказ
export async function createOrderController (context: Context, data: CurrentOrderProps) {
  let result: OrderLink;

  try {
    result = await createOrderService(context, serializeData(data));
  } catch (e) {
    throw new Error(e?.response?.data?.error || e);
  }

  return result;
}

// Отменить заказ
export async function cancelOrderController (context: Context, data: {orderId: number}) {
  let result: OrderCancelResponse;

  try {
    result = await cancelOrderService(context, data);
  } catch (e) {
    throw new Error(e);
  }

  return result;
}

export async function loadOrdersController (context: Context) {
  let result: any;

  try {
    result = await loadOrdersService(context);
  } catch (e) {
    throw new Error(e);
  }

  return result;
}
