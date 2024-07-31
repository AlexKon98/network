// Получить пункты самовывоза в городе
import { Context } from '@nuxt/types';
import {
  CourierDelivery,
  GetCatalogCourierElementDelivery,
  GetCatalogElementDeliveriesParams,
  PickupPoint,
  GetPickupPointsParams, PickupFilterItem,
  PickupPeriod,
} from '~/domains/Delivery/delivery.models';
import {
  getCatalogElementCourierDeliveriesService,
  getCatalogElementPickupDeliveriesService,
  getCourierDeliveriesByCityService,
  getDeliveryListByCityService,
  getPickupPointsService
} from '~/domains/Delivery/delivery.services';

export async function getDeliveryListByCityController (context: Context, city: string, settlement: string | null) {
  let result;

  try {
    result = await getDeliveryListByCityService(context, city, settlement);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить доставки по адресу
export async function getCourierDeliveriesByCityController (context: Context, cityFias:string, address: string) {
  let result: CourierDelivery[] | undefined;

  const data = {
    cityFias,
    address,
  };

  try {
    result = await getCourierDeliveriesByCityService(context, data);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить точки самовывоза
export async function getPickupPointsController (params: GetPickupPointsParams): Promise<any[]> {
  let result;

  try {
    result = await getPickupPointsService(params);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить информацию по доставке для детальной страницы товара
export async function getCatalogElementCourierDeliveriesController (params: GetCatalogElementDeliveriesParams) {
  let result: GetCatalogCourierElementDelivery[] | undefined;

  try {
    result = await getCatalogElementCourierDeliveriesService(params);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить информацию по самовывозу для детальной страницы товара
export async function getCatalogElementPickupDeliveriesController (params: GetCatalogElementDeliveriesParams): Promise<{deliveriesList: PickupPoint[]; filter: PickupFilterItem[], periods: PickupPeriod[]} | undefined> {
  let result;

  try {
    result = await getCatalogElementPickupDeliveriesService(params);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return {
    deliveriesList: result?.deliveriesList,
    filter: result?.filter?.variants,
    periods: result?.periods
  };
}
