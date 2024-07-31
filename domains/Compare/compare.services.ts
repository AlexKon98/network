import { Context } from '@nuxt/types';
import { RequestResponse } from '../Request/request.model';
import { sendRequest } from '~/helpers/api';
import {
  GetCompareResponse,
  CompareData,
  CompareIdsData,
  GetCompareIdsResponse,
} from '~/domains/Compare/compare.models';

// добавить в сравнения
export function addToCompareService (context: Context, id: number): Promise<CompareData> {
  const data = {
    id
  };

  const url = '/api/compare/add';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetCompareResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка в сравнении';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// удалить из сравнения
export function deleteFromCompareService (context: Context, id: number): Promise<CompareData> {
  const data = {
    id
  };

  const url = '/api/compare/delete';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetCompareResponse>(context, url, method, data)
      .then((response: RequestResponse) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Ошибка в сравнении';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function clearCompareService (context: Context, productIds?: number[]): Promise<CompareData> {
  const data = {
    ...(productIds ? { productIds } : {})
  };
  const url = '/api/compare/clear';
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

export function getCompareListService (context: Context): Promise<CompareIdsData> {
  const url = '/api/compare/getids';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetCompareIdsResponse>(context, url, method).then((response) => {
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

export function getCompareListProductsService (context: Context): Promise<CompareData> {
  const url = '/api/compare/getproducts';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetCompareResponse>(context, url, method).then((response) => {
      if (!response?.success || response?.error) {
        reject(response?.error ?? 'Ошибка');
        return;
      }

      resolve(response.data);
    }).catch((e) => {
      reject(e.response?.data?.error || e);
    });
  });
}
