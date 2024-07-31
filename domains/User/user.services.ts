import { Context } from '@nuxt/types';
import { CancelToken } from 'axios';
import { sendRequest } from '~/helpers/api';
import {
  GetInitDataResponse,
  UserData,
  UserInitData,
  legalAuthForm,
  legalRegistrationForm,
  loginForm,
  logoutForm,
  resendCodeForm,
  verificationEmailForm,
  initData, Timeout, verificationPhoneForm,
} from '~/domains/User/user.models';
import {
  CodeResponse,
  LoginResponse,
  RequestResponse
} from '~/domains/Request/request.model';

export function getInitDataService (context: Context, data: initData): Promise<UserInitData> {
  const url = '/api/user/getinitdata';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetInitDataResponse>(context, url, method, data)
      .then((response) => {
        if (response?.data) {
          resolve(response.data);
        } else {
          reject(new Error(response?.error));
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// Форма логина физ. лица
export function loginFormService (context: Context, data: loginForm): Promise<UserData> {
  const url = '/api/user/login';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<LoginResponse>(context, url, method, data).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res?.data);
      } else {
        reject(new Error(res?.error));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Форма логаута
export function logoutFormService (context: Context, data: logoutForm):Promise<UserData> {
  const url = '/api/user/logout';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<LoginResponse>(context, url, method, data).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res?.data);
      } else {
        reject(new Error(res?.error));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Форма авторизации юр.лица
export function legalAuthFormService (context: Context, data: legalAuthForm): Promise<UserData> {
  const url = '/api/user/loginlegal';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<LoginResponse>(context, url, method, data).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res?.data);
      } else {
        reject(new Error(res?.error));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Форма регистрации юр. лица
export function legalRegistrationFormService (context: Context, data: legalRegistrationForm) {
  const url = '/api/user/register';
  const method = 'post';

  return new Promise<void>((resolve, reject) => {
    sendRequest(context, url, method, data).then((res: RequestResponse) => {
      if (res?.success) {
        resolve();
      } else {
        reject(new Error(res?.error));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Отправка почтового сообщения для подтверждения почты
export function verificationEmailFormService (context: Context, data: verificationEmailForm) {
  const url = '/api/user/sendverificationemail';
  const method = 'post';

  return new Promise<void>((resolve, reject) => {
    sendRequest(context, url, method, data).then((res: RequestResponse) => {
      if (res?.success) {
        resolve();
      } else {
        reject(new Error(res?.error));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

export function verificationPhoneFormService (context: Context, data: verificationPhoneForm) {
  const url = '/api/user/verifycode';
  const method = 'post';

  return new Promise<void>((resolve, reject) => {
    sendRequest(context, url, method, data).then((res: RequestResponse) => {
      if (res?.success) {
        resolve();
      } else {
        reject(new Error(res?.error));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Переотправка кода по номеру телефона
export function resendCodeFormService (context: Context, data: resendCodeForm): Promise<Timeout> {
  const url = '/api/personal/resendcode';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<CodeResponse>(context, url, method, data).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res?.data);
      } else {
        reject(new Error(res?.error));
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Поиск заказа пользователя
export function searchUserOrderService (context: Context, data, cancelToken?: CancelToken) {
  const url = '/api/order/search';
  const method = 'post';

  return new Promise<void>((resolve, reject) => {
    sendRequest(context, url, method, data, cancelToken).then((res: RequestResponse) => {
      if (res.success) {
        resolve(res.data);
      } else {
        const errorMessage = res?.error || 'Ошибка в поиске';
        reject(errorMessage);
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Поиск заказа пользователя
export function searchDropdownUserOrderService (context: Context, data, cancelToken?: CancelToken) {
  const url = '/api/order/header';
  const method = 'post';

  return new Promise<void>((resolve, reject) => {
    sendRequest(context, url, method, data, cancelToken).then((res: RequestResponse) => {
      if (res.success) {
        resolve(res.data);
      } else {
        const errorMessage = res?.error || 'Ошибка в поиске';
        reject(errorMessage);
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}

// Смена профиля пользователя
export function changeCompanyUserService (context: Context, data): Promise<void> {
  const url = '/api/personal/changecompany';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((res: RequestResponse) => {
      if (res.success) {
        resolve(res.data);
      } else {
        const errorMessage = res?.error || 'Ошибка в поиске';
        reject(errorMessage);
      }
    })
      .catch((e) => {
        reject(e);
      });
  });
}
