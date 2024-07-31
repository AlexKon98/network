import { Context } from '@nuxt/types';
import { SetCatalogViewResponse } from '~/domains/Cookie/cookie.models';
import { setCatalogViewService } from '~/domains/Cookie/cookie.services';

export async function setCatalogViewController (context: Context, catalogView: 'tiles' | 'list') {
  let result: SetCatalogViewResponse | undefined;

  try {
    result = await setCatalogViewService(context, catalogView);
  } catch (e) {
  }

  return result;
}