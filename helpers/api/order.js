import { sendRequest } from '~/helpers/api';
const { serializeData } = require('../utils');

export function order (context, dataOrder) {
  const data = serializeData(dataOrder);

  const url = '/api/order/create';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.success) {
        if (response?.data.orderSuccessUrl) {
          location.href = response.data.orderSuccessUrl;
          resolve();
        } else {
          reject(new Error('Что-то пошло не так'));
        }
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}
