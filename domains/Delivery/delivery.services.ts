// Получить пункты самовывоза в городе
import { Context } from '@nuxt/types';
import { sendRequest } from '~/helpers/api';
import {
  CourierDelivery, GetCatalogCourierElementDelivery, GetCatalogElementCourierDeliveriesResponse,
  GetCatalogElementDeliveriesParams,
  // GetCatalogElementDeliveriesResponse,
  // GetCatalogElementDelivery,
  GetCatalogElementPickupDeliveriesResponse,
  GetCourierDeliveriesByCityResponse,
  GetDeliveryListByCityResponse,
  GetPickupPointsParams,
  GetPickupPointsResponse,
  PickupPoint
} from '~/domains/Delivery/delivery.models';

export function getDeliveryListByCityService (context: Context, city, settlement): Promise<string[]> {
  const data = {
    cityFias: city,
    settlementFias: settlement,
    isMobile: window?.matchMedia('(max-width: 767px)').matches,
    defaultPoint: true,
  };

  const url = '/api/delivery/getpickupdeliveries';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetDeliveryListByCityResponse>(context, url, method, data)
      .then((response) => {
        resolve(response?.data?.deliveries);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить доставки по адресу
export function getCourierDeliveriesByCityService (context: Context, params: {cityFias:string, address: string}): Promise<CourierDelivery[] | undefined> {
  const data = {
    ...params,
    isMobile: window.matchMedia('(max-width: 767px)').matches,
  };

  const url = '/api/delivery/getcourierdeliveries';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetCourierDeliveriesByCityResponse>(context, url, method, data).then((response) => {
      resolve(response?.data?.deliveries);
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить точки самовывоза
export function getPickupPointsService (params: GetPickupPointsParams): Promise<PickupPoint[] | undefined> {
  const data = {
    delivery: params.deliveryId,
    cityfias: params.cityfias,
  };

  const url = '/api/delivery/getpickuppoints';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetPickupPointsResponse>(params.context, url, method, data).then((response) => {
      resolve(response?.data?.points);
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// // Получить информацию по доставке для детальной страницы товара
// export function getCatalogElementDeliveriesService (params: GetCatalogElementDeliveriesParams): Promise<Record<'pickup' | 'courier', GetCatalogElementDelivery[]> | undefined> {
//   const data = {
//     command: 'getCatalogElementDeliveries',
//     cityName: params.cityName,
//     productId: params.productId,
//   };
//
//   const url = '/api/delivery/getdeliveriesforproduct';
//   const method = 'post';
//
//   return new Promise((resolve, reject) => {
//     sendRequest<GetCatalogElementDeliveriesResponse>(params.context, url, method, data).then((response) => {
//       resolve(response?.data);
//     })
//       .catch((e) => {
//         reject(e);
//       });
//   });
// }

// Получить информацию по доставке для детальной страницы товара
export function getCatalogElementCourierDeliveriesService (params: GetCatalogElementDeliveriesParams): Promise<GetCatalogCourierElementDelivery[] | undefined> {
  const data = {
    command: 'getCatalogElementDeliveries',
    cityName: params.cityName,
    productId: params.productId,
    verification: params.verification
  };

  const url = '/api/delivery/getdeliverieslist';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetCatalogElementCourierDeliveriesResponse>(params.context, url, method, data).then((response) => {
      resolve(response?.data?.deliveries);
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить информацию по доставке для детальной страницы товара
export function getCatalogElementPickupDeliveriesService (params: GetCatalogElementDeliveriesParams): Promise<GetCatalogElementPickupDeliveriesResponse['data'] | undefined> {
  const data = {
    command: 'getCatalogElementDeliveries',
    cityName: params.cityName,
    productId: params.productId,
    verification: params.verification,
  };

  const url = '/api/delivery/getdeliveriespopupforproduct';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetCatalogElementPickupDeliveriesResponse>(params.context, url, method, data).then((response) => {
      resolve(response?.data);
    })
      .catch((e) => {
        reject(e);
      });
  });
}
