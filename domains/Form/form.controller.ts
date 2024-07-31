import { Context } from '@nuxt/types';
import {
  FeedbackForm,
  CallbackForm,
  ReviewProductForm,
  TradeInProductForm,
  CheckFormRepairs,
  BuybackForm,
  CheckForm,
  RentForm,
  InformAdmissionFormParams,
  personalManagerForm,
  personalManagerResponse,
  WholesaleForm,
  DemoPresentationForm,
  ConsultationForm,
  VerificationForm,
  CheckVerificationFormResponse,
  CheckVerificationForm,
  RepairForm,
  ErrorForm, ServiceReviewForm,
} from '~/domains/Form/form.models';
import {
  callbackFormService,
  feedbackFormService,
  reviewProductFormService,
  rentFormService,
  buybackFormService,
  tradeInProductFormService,
  checkFormService,
  requestInformAdmissionService,
  personalManagerFormService,
  WholesaleFormService,
  DemoPresentationFormService,
  ConsultationFormService,
  checkVerificationFormService,
  verificationFormService,
  requestAddToAwaitableService,
  repairFormService,
  errorFormService, leasingFormService, ServiceReviewFormService,
} from '~/domains/Form/form.services';

// Форма обратной связи
export async function feedbackFormController (context: Context, formData: FeedbackForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await feedbackFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма лизинга
export async function leasingFormController (context: Context, formData: FeedbackForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await leasingFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма обратного звонка
export async function callbackFormController (context: Context, formData: CallbackForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await callbackFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма сообщения об ошибке
export async function errorFormController (context: Context, formData: ErrorForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await errorFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма выкупа
export async function buybackFormController (context: Context, formData: BuybackForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await buybackFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма поверки
export async function verificationFormController (context: Context, formData: VerificationForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await verificationFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма отзыва к товару
export async function reviewProductFormController (context: Context, formData: ReviewProductForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await reviewProductFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма заявки на аренду товара
export async function rentFormController (context: Context, formData: RentForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await rentFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма заявки на ремонт товара
export async function repairFormController (context: Context, formData: RepairForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await repairFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

export async function tradeInProductFormController (context: Context, formData: TradeInProductForm): Promise<unknown> {
  let result: unknown;

  try {
    result = await tradeInProductFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма проверки статуса ремонта
export async function checkFormController (context: Context, formData: CheckForm): Promise<CheckFormRepairs> {
  let result: CheckFormRepairs;

  try {
    result = await checkFormService(context, formData);
  } catch (e) {
    throw new Error(e);
  }

  return result;
}

// Форма проверки статуса поверки
export async function checkVerificationFormController (context: Context, formData: CheckVerificationForm): Promise<CheckVerificationFormResponse> {
  let result: CheckVerificationFormResponse;

  try {
    result = await checkVerificationFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма обращения к менеджеру
export async function personalManagerFormController (context: Context, formData: personalManagerForm): Promise<personalManagerResponse> {
  let result: personalManagerResponse;

  try {
    result = await personalManagerFormService(context, formData);
  } catch (e) {
    result = e;
  }

  return result;
}

export async function requestInformAdmissionController (context, data: InformAdmissionFormParams) {
  let result: true;

  try {
    result = await requestInformAdmissionService(context, data);
  } catch (e) {
    result = e;
  }

  return result;
}

export async function requestAddToAwaitableController (context, data: InformAdmissionFormParams) {
  let result: true;

  try {
    result = await requestAddToAwaitableService(context, data);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма демо показа товара
export async function DemoPresentationFormController (context, data: DemoPresentationForm) {
  let result: unknown;

  try {
    result = await DemoPresentationFormService(context, data);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма консультации по товару
export async function ConsultationFormController (context, data: ConsultationForm) {
  let result: unknown;

  try {
    result = await ConsultationFormService(context, data);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма оптовой покупки товара
export async function WholesaleFormController (context, data: WholesaleForm) {
  let result: unknown;

  try {
    result = await WholesaleFormService(context, data);
  } catch (e) {
    result = e;
  }

  return result;
}

// Форма отзыва о ремонте
export async function ServiceReviewFormController (context, data: ServiceReviewForm) {
  let result: unknown;

  try {
    result = await ServiceReviewFormService(context, data);
  } catch (e) {
    result = e;
  }

  return result;
}
