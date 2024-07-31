import { Context } from '@nuxt/types';
import { CancelToken } from 'axios';
import { sendRequest } from '~/helpers/api';
import {
  SearchDeleteSearchQueryResponse,
  SearchHeader,
  SearchHeaderResponse,
  SearchHistory
} from '~/domains/Search/search.models';

export function searchHeaderService (context: Context, query: string, cancelToken?: CancelToken): Promise<SearchHeader> {
  const data = {
    query
  };

  const url = '/api/search/header';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<SearchHeaderResponse>(context, url, method, data, cancelToken)
      .then((response) => {
        if (response?.data) {
          resolve(response.data);
        } else {
          const errorMessage = response?.error || 'Ошибка в поиске';
          reject(errorMessage);
        }
      })
      .catch((e) => {
        reject(e || 'Что-то пошло не так');
      });
  });
}

export function searchHistoryService (context: Context, cancelToken?: CancelToken): Promise<SearchHeader> {
  const url = '/api/search/gethistory';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<SearchHeaderResponse>(context, url, method, cancelToken)
      .then((response) => {
        if (response?.data) {
          resolve(response.data);
        } else {
          const errorMessage = response?.error || 'Ошибка в поиске';
          reject(errorMessage);
        }
      })
      .catch((e) => {
        reject(e || 'Что-то пошло не так');
      });
  });
}

export function searchDeleteSearchQueryService (context: Context, queryIds: number[]): Promise<Array<SearchHistory>> {
  const data = {
    queryIds
  };

  const url = '/api/search/deletesearchquery';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<SearchDeleteSearchQueryResponse>(context, url, method, data)
      .then((response) => {
        if (response?.data) {
          resolve(response.data?.history);
        } else {
          reject(new Error('Ошибка в поиске'));
        }
      })
      .catch((e) => {
        reject(e || 'Что-то пошло не так');
      });
  });
}
