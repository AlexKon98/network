import { Context } from '@nuxt/types';
import axios, { AxiosRequestConfig, Method, CancelTokenSource, CancelToken } from 'axios';
import { RequestResponse } from '~/domains/Request/request.model';

export const cancelTokens: Record<string, CancelTokenSource> = {};

export function sendRequest<T = RequestResponse> (context: Context, url: string, method: Method, data: any = {}, cancelToken: CancelToken | undefined = undefined): Promise<T> {
  const config: AxiosRequestConfig = {
    url,
    method,
    data,
    cancelToken: cancelToken || cancelTokens[url]?.token,
  };

  return new Promise<T>((resolve, reject) => {
    context.$api.$request(config)
      .then((value) => {
        if (!value?.success && value?.error) {
          reject(value.error);
        }
        resolve(value);
      })
      .catch((reason) => {
        if (axios.isCancel(reason)) {
          reject(new Error('Canceled by the user.'));
        } else {
          reject(reason);
        }
      });
  });
}
