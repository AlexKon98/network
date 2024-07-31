// Получить опции продукта
import { Context } from '@nuxt/types';
import { sendRequest } from '~/helpers/api';
import { SetCatalogViewResponse } from '~/domains/Cookie/cookie.models';

export function setCatalogViewService (context: Context, catalogView: 'tiles' | 'list'): Promise<SetCatalogViewResponse> {
  const data = {
    catalogView
  };

  const url = '/api/cookie/setcatalogview';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<SetCatalogViewResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось изменить список товаров';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}