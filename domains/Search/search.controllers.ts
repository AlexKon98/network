import { Context } from '@nuxt/types';
import axios from 'axios';
import { searchHeaderService, searchDeleteSearchQueryService, searchHistoryService } from '~/domains/Search/search.services';
import { SearchHeader, SearchHistory } from '~/domains/Search/search.models';
import { cancelTokens } from '~/helpers/api';

export async function searchHeaderController (context: Context, query: string) {
  let result: SearchHeader | undefined;
  const url = '/api/search/header';

  // Отменяем предыдущие запросы для данного url
  if (cancelTokens[url]) {
    cancelTokens[url].cancel('Canceled by the user.');
    delete cancelTokens[url];
  }

  // Создаем новый токен отмены для данного url
  cancelTokens[url] = axios.CancelToken.source();

  try {
    result = await searchHeaderService(context, query);
  } catch (e) {
  }

  return result;
}

export async function searchHistoryController (context: Context) {
  let result: SearchHeader | undefined;

  try {
    result = await searchHistoryService(context);
  } catch (e) {
  }

  return result;
}

export async function searchDeleteSearchQueryController (context: Context, queryIds: number[]) {
  let result: Array<SearchHistory>;

  try {
    result = await searchDeleteSearchQueryService(context, queryIds);
  } catch (e) {
  }

  return result;
}
