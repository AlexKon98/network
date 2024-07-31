// import { serializeData } from '../utils';
import { sendRequest } from '~/helpers/api';

export function getInputFromSelectedLengthService (propCode, selectedLength) {
  const propCodeToInput = {
    productId: `Выбрано ID (${selectedLength})`,
    service: `Выбрано номеров (${selectedLength})`,
    category: `Выбрано категорий (${selectedLength})`,
    brand: `Выбрано брендов (${selectedLength})`,
    model: `Выбрано моделей (${selectedLength})`,
  };

  return propCodeToInput[propCode];
}

export function getFilterProductsService (context, data) {
  const url = '/api/verification/getfilteredproducts';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.success) {
        resolve(response.data.variants);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

export function getProductsService (context, data) {
  const url = '/api/verification/getproducts';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response.data);
        } else {
          reject(new Error('Что-то пошло не так'));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// export function getBySearchFilterService (context, data) {
//   const url = '/api/verification/getproducts';
//   const method = 'post';
//
//   return new Promise((resolve, reject) => {
//     sendRequest(context, url, method, data).then((response) => {
//       if (response?.success) {
//         resolve(response.data);
//       } else {
//         reject(new Error('Что-то пошло не так'));
//       }
//     })
//       .catch((e) => {
//         reject(e);
//       });
//   });
// }

export function getStatusService (context, invoiceNumber) {
  const url = '/api/verification/getstatus';
  const method = 'post';
  const data = {
    invoice_number: invoiceNumber
  };

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.success) {
        resolve(response.data.entries);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

export function addProductToBasketService (context, id) {
  const url = '/api/verification/addproducttobasket';
  const method = 'post';
  const data = {
    id
  };

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.success) {
        resolve(response.data.basket);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

export function updateBasketService (context, data) {
  const url = '/api/verification/updateBasket';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.success) {
        resolve(response.data.basket);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

export function getBasketService (context) {
  const url = '/api/verification/getbasket';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method).then((response) => {
      if (response?.success) {
        resolve(response.data.basket);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

export function deleteFromBasketService (context, id = []) {
  const url = '/api/verification/deletefrombasket';
  const method = 'post';
  const data = {
    id
  };
  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.success) {
        resolve(response.data.basket);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

export function getOptionsForProductService (context, id) {
  const url = '/api/verification/getoptionsforproduct';
  const method = 'post';
  const data = {
    id
  };

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.success) {
        resolve(response.data.options);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

export function addOptionToBasketService (context, data) {
  const url = '/api/verification/addoptiontobasket';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.success) {
        resolve(response.data.basket);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

export function removeOptionToBasketService (context, data) {
  const url = '/api/verification/removeoptionfrombasket';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.success) {
        resolve(response.data.basket);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

export function getBySearchService (context, query) {
  const url = '/api/verification/getbysearch';
  const method = 'post';
  const data = {
    query
  };

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (response?.success) {
        resolve(response.data);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// export function createOrderService (context, dataOrder) {
//   const url = '/api/verification/createorder';
//   const method = 'post';
//   const data = serializeData(dataOrder);
//
//   return new Promise((resolve, reject) => {
//     sendRequest(context, url, method, data).then((response) => {
//       if (response?.success) {
//         resolve(true);
//       } else {
//         reject(new Error('Что-то пошло не так'));
//       }
//     })
//       .catch((e) => {
//         reject(e);
//       });
//   });
// }
