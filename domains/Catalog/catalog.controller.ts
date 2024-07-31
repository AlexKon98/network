// Получить корзину
import { Context } from '@nuxt/types';
import axios from 'axios';
import {
  getFiltersProps, getFiltersResponse,
  getCatalogProductsProps,
  HomeSliders,
  ProductAccessors,
  ProductReviews,
  ProductOptions,
  getBlogProductsResponse,
  getBlogProductsProps,
  BlogSearchData,
  SearchBlog, GetSaleProductsProps,
  getSpecialProductsProps,
  getBrandsProductsProps, CatalogData,
  getSearchProductsProps,
  ProductZonds,
  getProductAccessorsProps,
} from '~/domains/Catalog/catalog.models';
import {
  getFilteredCatalogProductsService,
  getHomeSlidersService,
  getProductAccessorsService,
  getProductReviewsService,
  getProductOptionsService,
  submitSelectedFiltersService,
  getFilteredBlogProductsService,
  getFilteredSpecialProductsService,
  searchBlogService, getFilteredSaleProductsService,
  getFilteredBrandsProductsService,
  getFilteredSearchProductsService, getProductZondsService
} from '~/domains/Catalog/catalog.services';
import { cancelTokens } from '~/helpers/api';

// Получить опции продукта
export async function getProductOptionsController (context: Context, productId: number) {
  let result: ProductOptions | undefined;

  try {
    result = await getProductOptionsService(context, productId);
  } catch (e) {}

  return result;
}

// Получить аксессуары продукта
export async function getProductAccessorsController (context: Context, data: getProductAccessorsProps) {
  let result: ProductAccessors | undefined;

  try {
    result = await getProductAccessorsService(context, data);
  } catch (e) {}

  return result;
}

// Получить зонды продукта
export async function getProductZondsController (context: Context, productId: number) {
  let result: ProductZonds | undefined;

  try {
    result = await getProductZondsService(context, productId);
  } catch (e) {}

  return result;
}

// Получить отзывы продукта
export async function getProductReviewsController (context: Context, productId: number) {
  let result: ProductReviews | undefined;

  try {
    result = await getProductReviewsService(context, productId);
  } catch (e) {}

  return result;
}

// Получить слайдеры на главной
export async function getHomeSlidersController (context: Context, type) {
  let result: HomeSliders | undefined;

  try {
    result = await getHomeSlidersService(context, type);
  } catch (e) {}

  return result;
}

// Получить товары каталога
export async function getFilteredCatalogProductsController (context: Context, data: getCatalogProductsProps) {
  let result: CatalogData | undefined;

  try {
    result = await getFilteredCatalogProductsService(context, data);
  } catch (e) {}

  return result;
}

// Получить статьи блога
export async function getFilteredSaleProductsController (context: Context, data: GetSaleProductsProps) {
  let result: CatalogData | undefined;

  try {
    result = await getFilteredSaleProductsService(context, data);
  } catch (e) {}

  return result;
}

// Получить товары деталки бренда
export async function getFilteredBrandsProductsController (context: Context, data: getBrandsProductsProps) {
  let result: CatalogData | undefined;

  try {
    result = await getFilteredBrandsProductsService(context, data);
  } catch (e) {}

  return result;
}

// Получить статьи блога
export async function getFilteredBlogProductsController (context: Context, data: getBlogProductsProps) {
  let result: getBlogProductsResponse | undefined;

  try {
    result = await getFilteredBlogProductsService(context, data);
  } catch (e) {}

  return result;
}

// Получить товары хитов/новинок
export async function getFilteredSpecialProductsController (context: Context, data: getSpecialProductsProps) {
  let result: CatalogData | undefined;

  try {
    result = await getFilteredSpecialProductsService(context, data);
  } catch (e) {}

  return result;
}

// Получить товары поиска
export async function getFilteredSearchProductsController (context: Context, data: getSearchProductsProps) {
  let result: CatalogData | undefined;

  try {
    result = await getFilteredSearchProductsService(context, data);
  } catch (e) {}

  return result;
}

// Поиск статей
export async function searchBlogController (context: Context, data: BlogSearchData) {
  let result: SearchBlog | undefined;

  try {
    result = await searchBlogService(context, data);
  } catch (e) {
  }

  return result;
}

// Отправить отмеченные фильтры
export async function submitSelectedFiltersController (
  context: Context,
  data: getFiltersProps,
) {
  const url = '/api/catalog/submitfilter';
  let result: getFiltersResponse | undefined;

  // Отменяем предыдущие запросы для данного url
  if (cancelTokens[url]) {
    cancelTokens[url].cancel('Canceled by the user.');
    delete cancelTokens[url];
  }

  // Создаем новый токен отмены для данного url
  cancelTokens[url] = axios.CancelToken.source();

  try {
    result = await submitSelectedFiltersService(
      context,
      data,
      cancelTokens[url].token,
    );
  } catch (e) {}

  return result;
}
