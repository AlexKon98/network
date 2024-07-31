import { Context } from '@nuxt/types';
import { CheckResponse, RequestResponse } from '../Request/request.model';
import { sendRequest } from '~/helpers/api';
import {
  FeedbackForm,
  CallbackForm,
  ReviewProductForm,
  RentForm,
  TradeInProductForm,
  CheckForm,
  CheckFormRepairs,
  InformAdmissionFormParams,
  personalManagerForm,
  personalManagerResponse,
  WholesaleForm,
  DemoPresentationForm,
  ConsultationForm,
  VerificationForm,
  CheckVerificationFormResponse,
  CheckVerificationForm,
  RepairForm, ErrorForm, ServiceReviewForm,
} from '~/domains/Form/form.models';
import { serializeData } from '~/helpers/utils';

// Форма обратной связи
export function feedbackFormService (context: Context, formData: FeedbackForm) {
  const data = formData;
  const url = '/api/forms/feedback';
  const method = 'post';

  return new Promise<RequestResponse>((resolve, reject) => {
    sendRequest(context, url, method, data).then((response: RequestResponse) => {
      if (response?.success) {
        resolve(response);
      } else {
        const errorMessage = response?.error || 'Ошибка в отправке формы';
        reject(new Error(errorMessage));
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма лизинга
export function leasingFormService (context: Context, formData: FeedbackForm) {
  const data = formData;
  const url = '/api/forms/leasing';
  const method = 'post';

  return new Promise<RequestResponse>((resolve, reject) => {
    sendRequest(context, url, method, serializeData(data)).then((response: RequestResponse) => {
      if (response?.success) {
        resolve(response);
      } else {
        const errorMessage = response?.error || 'Ошибка в отправке формы';
        reject(new Error(errorMessage));
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма обратного звонка
export function callbackFormService (context: Context, data: CallbackForm) {
  const url = '/api/forms/callback';
  const method = 'post';

  return new Promise<RequestResponse>((resolve, reject) => {
    sendRequest(context, url, method, data).then((res: RequestResponse) => {
      if (res?.status === 'captcha_error') {
        reject(new Error('Captcha error'));
      } else if (!res?.success) {
        reject(new Error('Ошибка отправки формы'));
      } else {
        resolve(res);
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма сообщения об ошибке
export function errorFormService (context: Context, data: ErrorForm) {
  const url = '/api/forms/contenterror';
  const method = 'post';

  return new Promise<RequestResponse>((resolve, reject) => {
    sendRequest(context, url, method, data).then((res: RequestResponse) => {
      if (res?.status === 'captcha_error') {
        reject(new Error('Captcha error'));
      } else if (!res?.success) {
        reject(new Error('Ошибка отправки формы'));
      } else {
        resolve(res);
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма выкупа
export function buybackFormService (context: Context, data: CallbackForm) {
  const url = '/api/forms/buyback';
  const method = 'post';

  return new Promise<RequestResponse>((resolve, reject) => {
    sendRequest(context, url, method, serializeData(data)).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма поверки
export function verificationFormService (context: Context, data: VerificationForm) {
  const url = '/api/verification/createorder';
  const method = 'post';

  return new Promise<RequestResponse>((resolve, reject) => {
    sendRequest(context, url, method, serializeData(data)).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма добавления отзыва к товару
export function reviewProductFormService (context: Context, data: ReviewProductForm) {
  const url = '/api/forms/addcomment';
  const method = 'post';

  return new Promise<RequestResponse>((resolve, reject) => {
    sendRequest(context, url, method, serializeData(data)).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма заявки на аренду товара
export function rentFormService (context: Context, data: RentForm) {
  const url = '/api/forms/rent';
  const method = 'post';

  return new Promise<RequestResponse>((resolve, reject) => {
    sendRequest(context, url, method, data).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма заявки на ремонт товара
export function repairFormService (context: Context, data: RepairForm) {
  const url = '/api/forms/repair';
  const method = 'post';

  return new Promise<RequestResponse>((resolve, reject) => {
    sendRequest(context, url, method, serializeData(data)).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

export function tradeInProductFormService (context: Context, data: TradeInProductForm) {
  const url = '/api/forms/tradein';
  const method = 'post';

  return new Promise<RequestResponse>((resolve, reject) => {
    sendRequest(context, url, method, serializeData(data)).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res);
      } else {
        reject(new Error('Что-то пошло не так'));
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма проверки статуса ремонта
export function checkFormService (context: Context, data: CheckForm): Promise<CheckFormRepairs> {
  const url = 'api/personal/getrepairitems';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<CheckResponse>(context, url, method, data).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res?.data?.repairs);
      } else {
        reject(new Error(res?.error));
      }
    })
      .catch((e) => {
        reject(e.response?.data?.error || e);
      });
  });
}

// Форма проверки статуса поверки
export function checkVerificationFormService (context: Context, data: CheckVerificationForm): Promise<CheckVerificationFormResponse> {
  const url = '/api/verification/getstatus';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<CheckResponse>(context, url, method, data).then((res: RequestResponse) => {
      if (res?.success) {
        resolve(res?.data?.entries);
      } else {
        reject(new Error(res?.error));
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

export function requestInformAdmissionService (context, data: InformAdmissionFormParams): Promise<true> {
  const url = '/api/forms/informadmission';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<RequestResponse>(context, url, method, data).then((res) => {
      if (!res?.success && res?.error) {
        reject(res.error);

        return;
      }

      resolve(res.data);
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

export function requestAddToAwaitableService (context, data: InformAdmissionFormParams): Promise<true> {
  const url = '/api/forms/addtoawaittable';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<RequestResponse>(context, url, method, data).then((res) => {
      if (!res?.success && res?.error) {
        reject(res.error);

        return;
      }

      resolve(res.data);
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма обратного звонка
export function personalManagerFormService (context: Context, data: personalManagerForm):Promise<personalManagerResponse> {
  const url = '/api/forms/personalmanager';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, serializeData(data)).then((res: RequestResponse) => {
      if (res?.status === 'captcha_error') {
        reject(new Error('Captcha error'));
      } else if (!res?.success) {
        reject(new Error('Ошибка отправки формы'));
      } else {
        resolve(res.data);
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма демо показа товара
export function DemoPresentationFormService (context: Context, data: DemoPresentationForm) {
  const url = '/api/forms/consultation';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((res: RequestResponse) => {
      if (res?.status === 'captcha_error') {
        reject(new Error('Captcha error'));
      } else if (!res?.success) {
        reject(new Error('Ошибка отправки формы'));
      } else {
        resolve(res);
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма консультации по товару
export function ConsultationFormService (context: Context, data: ConsultationForm) {
  const url = '/api/forms/consultation';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((res: RequestResponse) => {
      if (res?.status === 'captcha_error') {
        reject(new Error('Captcha error'));
      } else if (!res?.success) {
        reject(new Error('Ошибка отправки формы'));
      } else {
        resolve(res);
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма оптовой покупки товара
export function WholesaleFormService (context: Context, data: WholesaleForm) {
  const url = '/api/forms/buywholesale';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, data).then((res: RequestResponse) => {
      if (res?.status === 'captcha_error') {
        reject(new Error('Captcha error'));
      } else if (!res?.success) {
        reject(new Error('Ошибка отправки формы'));
      } else {
        resolve(res);
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}

// Форма отзыва о ремонте
export function ServiceReviewFormService (context: Context, data: ServiceReviewForm) {
  const url = '/api/forms/servicereview';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest(context, url, method, serializeData(data)).then((res: RequestResponse) => {
      if (!res?.success) {
        reject(new Error('Ошибка отправки формы'));
      } else {
        resolve(res);
      }
    })
      .catch((e) => {
        reject(e.response?.data || e);
      });
  });
}
