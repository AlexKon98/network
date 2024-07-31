// Получить подсказки dadata по введенному городу
import { sendRequest } from '~/helpers/api';

// Получить пункты самовывоза в городе
export function getDeliveryListByCity (context, city, settlement = null) {
  const data = {
    cityFias: city,
    settlementFias: settlement,
    isMobile: window.matchMedia('(max-width: 767px)').matches,
    defaultPoint: true,
  };

  const url = '/api/delivery/getpickupdeliveries';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.data.deliveries) {
        resolve(response.data.deliveries);
      } else {
        resolve({});
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить доставки по адресу
export function getCourierDeliveriesByCity (context, address) {
  const data = {
    address,
    isMobile: window.matchMedia('(max-width: 767px)').matches,
  };

  const url = '/api/delivery/getcourierdeliveries';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.data.deliveries) {
        resolve(response.data.deliveries);
      } else {
        resolve({});
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить точки самовывоза
export function getPickupPoints (context, deliveryId, cityfias) {
  const data = {
    delivery: deliveryId,
    cityfias,
  };

  const url = '/api/delivery/getpickuppoints';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.data.points) {
        resolve(response.data.points);
      } else {
        resolve({});
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить информацию по доставке для детальной страницы товара
export function getCatalogElementDeliveries (context, cityName = '', productId = '', verification = false) {
  const data = {
    command: 'getCatalogElementDeliveries',
    cityName,
    productId,
    verification
  };

  const url = '/api/delivery/getdeliveriesforproduct';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.success) {
        resolve(response.data);
      } else {
        resolve({});
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}
