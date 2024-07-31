import { Context } from '@nuxt/types';
import { CancelToken } from 'axios';
import { sendRequest } from '~/helpers/api';
import {
  GetAccessorsResponse,
  getFiltersProps,
  getFiltersResponse,
  GetHomeSlidersResponse,
  getCatalogProductsProps,
  getCatalogProductsResponse,
  HomeSliders,
  ProductAccessors,
  ProductReviews,
  ProductOptions,
  getBlogProductsProps,
  getBlogProductsResponse,
  BlogSearchData,
  SearchBlog,
  SearchBlogResponse,
  GetSaleProductsResponse, GetSaleProductsProps,
  getSpecialProductsProps,
  getBrandsProductsProps,
  CatalogData,
  getSearchProductsProps,
  ProductZonds,
  GetZondsResponse,
  getProductAccessorsProps
} from '~/domains/Catalog/catalog.models';

// Получить опции продукта
export function getProductOptionsService (context: Context, productId: number): Promise<ProductOptions> {
  const data = {
    productId
  };

  const url = '/api/catalog/getproductoptions';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось загрузить список опций';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить аксессуары продукта
export function getProductAccessorsService (context: Context, data: getProductAccessorsProps): Promise<ProductAccessors> {
  const url = '/api/catalog/getproductaccessors';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetAccessorsResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось загрузить список аксессуаров';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить зонды продукта
export function getProductZondsService (context: Context, productId: number): Promise<ProductZonds> {
  const data = {
    productId
  };

  const url = '/api/catalog/getproductzonds';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetZondsResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось загрузить список зондов';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить отзывы продукта
export function getProductReviewsService (context: Context, productId: number): Promise<ProductReviews> {
  const data = {
    productId
  };

  const url = '/api/catalog/gethiddenreviewsforproduct';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось загрузить список отзывов';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить слайдеры на главной
export function getHomeSlidersService (context: Context, type): Promise<HomeSliders> {
  const url = '/api/catalog/gethomesliders';
  const method = 'post';
  const data = {
    type
  };

  return new Promise((resolve, reject) => {
    sendRequest<GetHomeSlidersResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось загрузить список слайдеров';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить продукты каталога
export function getFilteredCatalogProductsService (context: Context, data: getCatalogProductsProps): Promise<CatalogData> {
  const url = '/api/catalog/getproducts';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<getCatalogProductsResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось получить список товаров';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить продукты со скидками
export function getFilteredSaleProductsService (context: Context, data: GetSaleProductsProps): Promise<CatalogData> {
  const url = '/api/promotion/getpromotionproducts';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetSaleProductsResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось получить список товаров';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить товары страницы бренда
export function getFilteredBrandsProductsService (context: Context, data: getBrandsProductsProps): Promise<CatalogData> {
  const url = '/api/catalog/getproductsforbrand';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<getCatalogProductsResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось получить список товаров';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить продукты каталога с отмеченными фильтрами
export function submitSelectedFiltersService (context: Context, data: getFiltersProps, cancelToken?: CancelToken): Promise<getFiltersResponse> {
  const url = '/api/catalog/submitfilter';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<getFiltersResponse>(context, url, method, data, cancelToken)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage =
                response?.error || 'Не удалось получить фильтры';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить статьи блога
export function getFilteredBlogProductsService (context: Context, data: getBlogProductsProps): Promise<getBlogProductsResponse> {
  const url = '/api/blog/getblogs';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<getBlogProductsResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось получить список статей';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить товары хитов/новинок
export function getFilteredSpecialProductsService (context: Context, data: getSpecialProductsProps): Promise<CatalogData> {
  const url = '/api/catalog/getproductsforspecialsection';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<getCatalogProductsResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось получить список товаров';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Получить товары поиска
export function getFilteredSearchProductsService (context: Context, data: getSearchProductsProps): Promise<CatalogData> {
  const url = '/api/search/getproducts';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<getCatalogProductsResponse>(context, url, method, data)
      .then((response) => {
        if (response?.success) {
          resolve(response?.data ?? {});
        } else {
          const errorMessage = response?.error || 'Не удалось получить список товаров';
          reject(new Error(errorMessage));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Поиск в блоге
export function searchBlogService (context: Context, data: BlogSearchData): Promise<SearchBlog> {
  const url = '/api/blog/search';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<SearchBlogResponse>(context, url, method, data)
      .then((response) => {
        if (response?.data) {
          resolve(response.data);
        } else {
          reject(new Error('Ошибка в поиске'));
        }
      })
      .catch((e) => {
        reject(e || 'Что-то пошло не так');
      });
  });
}
