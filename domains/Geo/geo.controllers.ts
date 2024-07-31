import { Context } from '@nuxt/types';
import {
  getAddressHouseSuggestionsService, getAddressSuggestionsService,
  getBranchesListService,
  getCityByIpService,
  getCityListService,
  getCitySuggestionsService,
  getConcreteCitySuggestionsService, getNearestCityService,
  getStreetSuggestionsService,
  setCityService,
} from '~/domains/Geo/geo.services';
import {
  CityItem,
  ConcreteCitySuggestion,
  GetAddressHouseSuggestionsParams, GetStreetSuggestionsParams,
  SetCityParams
} from '~/domains/Geo/geo.models';

export async function getCitySuggestionsController (context: Context, query: string) {
  let result: ConcreteCitySuggestion[] | undefined;

  try {
    result = await getCitySuggestionsService(context, query);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить подсказки dadata по введенному адресу
export async function getStreetSuggestionsController (params: GetStreetSuggestionsParams) {
  let result: string[] | undefined;

  try {
    result = await getStreetSuggestionsService(params);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить подсказки dadata по введенному адресу
export async function getAddressSuggestionsController (params) {
  let result: any;

  try {
    result = await getAddressSuggestionsService(params);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить подсказки dadata по номеру дома
export async function getAddressHouseSuggestionsController (params: GetAddressHouseSuggestionsParams) {
  let result: string[] | undefined;

  try {
    result = await getAddressHouseSuggestionsService(params);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить подсказки dadata по городу
export async function getConcreteCitySuggestionsController (context: Context, city: string) {
  let result: ConcreteCitySuggestion | undefined;

  try {
    result = await getConcreteCitySuggestionsService(context, city);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить город по ip
export async function getCityByIpController (context: Context) {
  let result: CityItem | undefined;

  try {
    result = await getCityByIpService(context);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить список филиалов (магазинов)
export async function getBranchesListController (context: Context) {
  let result: CityItem[] | undefined;

  try {
    result = await getBranchesListService(context);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить список филиалов (магазинов)
export async function getNearestCityController (context: Context, city: string) {
  let result: any[] | undefined;

  try {
    result = await getNearestCityService(context, city);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

// Получить список городов для попапа выбора города
export async function getCityListController (context: Context) {
  let result: Record<string, CityItem[]> | undefined;
  try {
    result = await getCityListService(context);
  } catch (e) {
    throw new Error(e.response?.data?.error || e);
  }

  return result;
}

export async function setCityController (params: SetCityParams) {
  try {
    const redirectURL = await setCityService(params);
    if (redirectURL) {
      location.href = redirectURL;
    }
  } catch (e) { }
}
