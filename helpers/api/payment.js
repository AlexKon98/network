import { sendRequest } from '~/helpers/api';

export function getPayments (context) {
  const url = '/api/payment/getpayments';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method).then((response) => {
      if (response?.success) {
        if (response?.data.payments) {
          resolve(response?.data.payments);
        } else {
          resolve({});
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

export function createYookassaPayment (context, orderId) {
  const data = { orderId };
  const url = '/api/payment/createyookassapayment';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}
