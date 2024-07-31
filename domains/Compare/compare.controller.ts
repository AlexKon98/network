import { Context } from '@nuxt/types';
import {
  addToCompareService,
  clearCompareService,
  deleteFromCompareService, getCompareListProductsService,
  getCompareListService,
} from '~/domains/Compare/compare.services';
import { CompareData, CompareIdsData } from '~/domains/Compare/compare.models';

// добавить в фавориты
export async function addToCompareController (context: Context, id: number): Promise<CompareData> {
  let result: CompareData | undefined;

  try {
    result = await addToCompareService(context, id);
  } catch (e) {}

  return result;
}

// удалить из фаворитов
export async function deleteFromCompareController (context: Context, id: number): Promise<CompareData> {
  let result: CompareData | undefined;

  try {
    result = await deleteFromCompareService(context, id);
  } catch (e) {}

  return result;
}

export async function clearCompareController (context: Context, productIds?: number[]): Promise<CompareData> {
  let result: CompareData | undefined;

  try {
    result = await clearCompareService(context, productIds);
  } catch (e) {
    throw new Error(e);
  }

  return result;
}

export async function getCompareListController (context: Context): Promise<CompareIdsData> {
  let result: {productIds: any[], totalCount: number};

  try {
    result = await getCompareListService(context);
  } catch (e) {
    throw new Error(e);
  }

  return result;
}

export async function getCompareListProductsController (context: Context): Promise<CompareData> {
  let result: CompareData;

  try {
    result = await getCompareListProductsService(context);
  } catch (e) {
    throw new Error(e);
  }

  return result;
}
