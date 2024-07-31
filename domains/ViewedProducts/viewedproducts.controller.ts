import { sendRequest } from '~/helpers/api';
import { RequestResponse } from '~/domains/Request/request.model';

class ViewedProductsController {
  private getApiUrl (endpoint) {
    return '/api/viewedproducts/' + endpoint;
  }

  add (id: number): Promise<void> {
    const data = {
      id,
    };

    return new Promise((resolve, reject) => {
      sendRequest<RequestResponse>(window.$nuxt.context, this.getApiUrl('add'), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
          }

          resolve();
        }).catch((e) => {
          reject(e.response?.data?.error || e);
        });
    });
  }
}

export const viewedProductsController = new ViewedProductsController();
