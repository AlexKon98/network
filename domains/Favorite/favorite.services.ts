import { Context } from '@nuxt/types';
import { RequestResponse } from '../Request/request.model';
import { sendRequest } from '~/helpers/api';
import { GetFavoriteResponse, FavoriteData, FavoritePageData } from '~/domains/Favorite/favorite.models';

// добавить в фавориты
export function addToFavoriteService (context, id: number): Promise<FavoriteData> {
  const data = {
    id
  };

  const url = '/api/wishlist/add';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetFavoriteResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response.data ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка при добавлении в избранное';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function getFavoritesListProductsService (context, share: string, sort): Promise<FavoritePageData> {
  const data = {
    share,
    sort
  };

  const url = '/api/wishlist/getproducts';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetFavoriteResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response.data);
        } else {
          const errorMessage = response?.error || 'Ошибка в фаворитах';
          reject(errorMessage);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// удалить из фаворитов
export function deleteFromFavoriteService (context, id: number): Promise<FavoritePageData> {
  const data = {
    id
  };

  const url = '/api/wishlist/delete';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetFavoriteResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка при удалении товара из избранного';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function clearFavoriteService (context: Context, productIds?: number[]): Promise<FavoritePageData> {
  const data = {
    ...(productIds ? { productIds } : {})
  };
  const url = '/api/wishlist/clear';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response) => {
      if (!response?.success || response?.error) {
        reject(response?.error ?? 'Ошибка');
        return;
      }

      resolve(response.data);
    })
      .catch((e) => {
        reject(e.response?.data?.error || e);
      });
  });
}
