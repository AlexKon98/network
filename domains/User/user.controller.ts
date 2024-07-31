import { Context } from '@nuxt/types';
import axios from 'axios';
import {
  getInitDataService,
  legalAuthFormService,
  legalRegistrationFormService,
  loginFormService,
  logoutFormService,
  resendCodeFormService,
  verificationEmailFormService,
  searchUserOrderService, searchDropdownUserOrderService, changeCompanyUserService,
} from '~/domains/User/user.services';
import {
  UserInitData,
  UserData,
  legalAuthForm,
  legalRegistrationForm,
  loginForm,
  logoutForm,
  resendCodeForm,
  verificationEmailForm,
  initData,
  Timeout, UserCompany,
} from '~/domains/User/user.models';
import { cancelTokens } from '~/helpers/api';

export async function getInitDataController (context: Context, data: initData): Promise<UserInitData> {
  let result: UserInitData;

  try {
    result = await getInitDataService(context, data);
  } catch (e) {}

  return result;
}

// Форма логина физ. лица
export async function loginFormController (context: Context, formData: loginForm): Promise<UserData> {
  let result: UserData;

  try {
    result = await loginFormService(context, formData);
  } catch (e) {
    throw e.response?.data?.error || e;
  }

  return result;
}

// Форма регистрации юр. лица
export async function legalRegistrationFormController (context: Context, formData: legalRegistrationForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await legalRegistrationFormService(context, formData);
  } catch (e) {
    throw e.response?.data?.error || e;
  }

  return result;
}

// Форма логина юр. лица
export async function legalAuthFormController (context: Context, formData: legalAuthForm): Promise<UserData> {
  let result: UserData;

  try {
    result = await legalAuthFormService(context, formData);
  } catch (e) {
    throw e.response?.data?.error || e;
  }

  return result;
}

// Форма логаута
export async function logoutFormController (context: Context, formData: logoutForm): Promise<UserData> {
  let result: UserData;

  try {
    result = await logoutFormService(context, formData);
  } catch (e) {}

  return result;
}

// Отправка почтового сообщения для подтверждения почты
export async function verificationEmailFormController (context: Context, formData: verificationEmailForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await verificationEmailFormService(context, formData);
  } catch (e) {}

  return result;
}

// Переотправка кода на телефон
export async function resendCodeFormController (context: Context, formData: resendCodeForm): Promise<Timeout> {
  let result: Timeout;

  try {
    result = await resendCodeFormService(context, formData);
  } catch (e) {}

  return result;
}

// Поиск заказа пользователя
export async function searchUserOrderController (context:Context, formData): Promise<unknown> {
  let result;
  const url = '/api/order/search';

  // Отменяем предыдущие запросы для данного url
  if (cancelTokens[url]) {
    cancelTokens[url].cancel('Canceled by the user.');
    delete cancelTokens[url];
  }

  // Создаем новый токен отмены для данного url
  cancelTokens[url] = axios.CancelToken.source();

  try {
    result = await searchUserOrderService(context, formData);
  } catch (e) {}

  return result;
}

export async function searchDropdownUserOrderController (context:Context, formData): Promise<unknown> {
  let result;
  const url = '/api/order/header';

  // Отменяем предыдущие запросы для данного url
  if (cancelTokens[url]) {
    cancelTokens[url].cancel('Canceled by the user.');
    delete cancelTokens[url];
  }

  // Создаем новый токен отмены для данного url
  cancelTokens[url] = axios.CancelToken.source();

  try {
    result = await searchDropdownUserOrderService(context, formData);
  } catch (e) {}

  return result;
}

// Переотправка кода на телефон
export async function changeCompanyUserController (context: Context, company: UserCompany): Promise<void> {
  let result;

  try {
    result = await changeCompanyUserService(context, { id: company?.id });
  } catch (e) {}

  return result;
}
