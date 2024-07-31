import { Context } from '@nuxt/types';
import { sendRequest } from '~/helpers/api';
import { Page, PageResponse, PagesResolveBody } from '~/domains/Page/page.models';

export function pagesResolveService (context: Context, data: PagesResolveBody): Promise<Page> {
  const url = '/api/pages/resolve';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<PageResponse>(context, url, method, data).then((response) => {
      if (response?.data) {
        resolve(response.data);
      } else {
        reject(new Error('Ошибка получения данных страницы'));
      }
    })
      .catch((e) => {
        reject(e || 'Что-то пошло не так');
      });
  });
}
