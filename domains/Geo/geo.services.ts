import { Context } from '@nuxt/types';
import { sendRequest } from '~/helpers/api';
import {
  CityItem,
  ConcreteCitySuggestion,
  GetAddressHouseSuggestionsParams,
  GetAddressHouseSuggestionsResponse,
  GetBranchesListResponse,
  GetCityByIpResponse,
  GetCityListResponse,
  GetConcreteCitySuggestionsResponse,
  GetStreetSuggestionsParams,
  GetStreetSuggestionsResponse,
  SetCityParams, SetCityResponse
} from '~/domains/Geo/geo.models';

export function getCitySuggestionsService (context: Context, query: string): Promise<ConcreteCitySuggestion[]> {
  const data = {
    query,
    count: 10,
  };

  const url = '/api/geo/suggestcity';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetConcreteCitySuggestionsResponse>(context, url, method, data).then((response) => {
      if (response?.data?.suggestions.length > 0) {
        resolve(response.data.suggestions);
      } else {
        reject('Город не найден');
      }
    })
      .catch((e) => {
        reject(e || 'Что-то пошло не так');
      });
  });
}

// Получить подсказки dadata по введенному адресу
export function getStreetSuggestionsService (params: GetStreetSuggestionsParams): Promise<string[]> {
  const data = {
    query: params.query,
    cityFias: params.cityFias,
    settlementFias: params.settlementFias,
    count: 10,
  };

  const url = '/api/geo/suggeststreet';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetStreetSuggestionsResponse>(params.context, url, method, data).then((response) => {
      if (response?.data?.suggestions.length > 0) {
        resolve(response.data.suggestions);
        return;
      }

      reject('Адрес не найден');
    })
      .catch((e) => {
        reject(e || 'Ошибка в получении адресов');
      });
  });
}

// Получить подсказки dadata по введенному адресу
export function getAddressSuggestionsService (params): Promise<string[]> {
  const data = {
    query: params.query,
    cityFias: params.cityFias,
    count: 10,
  };

  const url = '/api/geo/suggestaddress';
  const method = 'post';
  return new Promise((resolve, reject) => {
    sendRequest<GetStreetSuggestionsResponse>(params.context, url, method, data).then((response) => {
      if (response?.data?.suggestions.length > 0) {
        resolve(response.data.suggestions);
        return;
      }

      reject('Адрес не найден');
    })
      .catch((e) => {
        reject(e || 'Ошибка в получении адресов');
      });
  });
}

// Получить подсказки dadata по номеру дома
export function getAddressHouseSuggestionsService (params: GetAddressHouseSuggestionsParams): Promise<string[]> {
  // cityFias: "a52b7389-0cfe-46fb-ae15-298652a64cf8"
  // count: 10
  // house: "12"
  // settlementFias: null
  // streetFias: "ea1e3e1a-f5b3-48f1-8568-d239fcecf2d6"
  // street_fias_id
  const data = {
    settlementFias: params.settlementFias,
    cityFias: params.cityFias,
    streetFias: params.streetFias,
    house: params.house,
    count: 10,
  };

  const url = '/api/geo/suggesthouse';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetAddressHouseSuggestionsResponse>(params.context, url, method, data).then((response) => {
      if (response?.data?.suggestions.length > 0) {
        resolve(response.data.suggestions);
      } else {
        reject(new Error('Дома не найдены'));
      }
    })
      .catch((e) => {
        reject(e || 'Ошибка при получении домов');
      });
  });
}

// Получить подсказки dadata по городу
export function getConcreteCitySuggestionsService (context: Context, city: string): Promise<ConcreteCitySuggestion> {
  const data = {
    query: city,
    count: 1,
  };
  const url = '/api/geo/suggestcity';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((response: GetConcreteCitySuggestionsResponse | undefined) => {
      if (response?.data?.suggestions) {
        resolve(response?.data.suggestions[0]);
      } else {
        resolve(undefined);
      }
    })
      .catch((e) => {
        reject(e || 'Что-то пошло не так');
      });
  });
}

// Получить город по ip
export function getCityByIpService (context: Context): Promise<CityItem> {
  const url = '/api/geo/detectcurrentcity';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetCityByIpResponse>(context, url, method).then((response) => {
      resolve(response?.data);
    })
      .catch((e) => {
        reject(e || 'Что-то пошло не так');
      });
  });
}

// Получить список филиалов (магазинов)
export function getBranchesListService (context: Context): Promise<CityItem[]> {
  const url = '/api/geo/getbranches';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetBranchesListResponse>(context, url, method).then((response) => {
      resolve(response?.data?.branches || []);
    })
      .catch((e) => {
        reject(e || 'Города не найдены');
      });
  });
}

// Получить список городов для попапа выбора города
export function getCityListService (context: Context): Promise<Record<string, CityItem[]>> {
  const url = '/api/geo/getcitiesalphabet';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetCityListResponse>(context, url, method).then((response) => {
      resolve(response?.data?.cities ?? {});
    })
      .catch((e) => {
        reject(e || 'Города не найдены');
      });
  });
}

// Получить список городов для попапа выбора города
export function getNearestCityService (context: Context, city): Promise<any> {
  const data = {
    city
  };

  const url = '/api/geo/getnearestcities';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<any>(context, url, method, data).then((response) => {
      resolve(response?.data?.cities ?? {});
    })
      .catch((e) => {
        reject(e || 'Города не найдены');
      });
  });
}

// Выбор города
export function setCityService (params: SetCityParams) {
  const data = {
    city: params.city,
    region: params.region,
    url: params.path
  };

  const url = '/api/geo/selectcity';
  const method = 'post';

  return new Promise<string>((resolve, reject) => {
    sendRequest<SetCityResponse>(params.context, url, method, data).then((response) => {
      resolve(response?.data?.redirectUrl);
    })
      .catch((e) => {
        reject(e);
      });
  });
}
