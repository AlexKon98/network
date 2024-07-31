import { Context } from '@nuxt/types';
import {
  addToFavoriteService, clearFavoriteService,
  deleteFromFavoriteService,
  getFavoritesListProductsService,
} from '~/domains/Favorite/favorite.services';
import { FavoriteData, FavoritePageData } from '~/domains/Favorite/favorite.models';

// добавить в фавориты
export async function addToFavoriteController (context: Context, id: number): Promise<FavoriteData> {
  let result: FavoriteData | undefined;

  try {
    result = await addToFavoriteService(context, id);
  } catch (e) {}

  return result;
}

export async function getFavoritesListProductsController (context, share: string, sort): Promise<FavoritePageData> {
  let result;

  try {
    result = await getFavoritesListProductsService(context, share, sort);
  } catch (e) {
  }

  return result;
}

// удалить из фаворитов
export async function deleteFromFavoriteController (context: Context, id: number): Promise<FavoritePageData> {
  let result: FavoritePageData | undefined;

  try {
    result = await deleteFromFavoriteService(context, id);
  } catch (e) {}

  return result;
}

export async function clearFavoriteController (context: Context, productIds?: number[]): Promise<FavoritePageData> {
  let result: FavoritePageData | undefined;

  try {
    result = await clearFavoriteService(context, productIds);
  } catch (e) {
    throw new Error(e);
  }

  return result;
}
