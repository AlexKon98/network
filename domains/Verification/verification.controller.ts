import { Context } from '@nuxt/types';
import {
  addOptionToBasketService,
  addProductToBasketService,
  deleteFromBasketService,
  getBasketService, getBySearchService,
  getFilterProductsService,
  getInputFromSelectedLengthService,
  getOptionsForProductService,
  getProductsService,
  getStatusService, removeOptionToBasketService,
  updateBasketService,
} from '~/domains/Verification/verification.services';
// import { createOrderService } from '~/domains/Order/order.services';

export async function getInputFromSelectedLengthController (propCode, selectedLength) {
  let result;

  try {
    result = await getInputFromSelectedLengthService(propCode, selectedLength);
  } catch (e) {}

  return result;
}

export async function getFilterProductsController (context: Context, data) {
  let result;

  try {
    result = await getFilterProductsService(context, data);
  } catch (e) {}

  return result;
}

export async function getProductsController (context: Context, data) {
  let result;

  try {
    result = await getProductsService(context, data);
  } catch (e) {}

  return result;
}

export async function getStatusController (context: Context, invoiceNumber) {
  let result;

  try {
    result = await getStatusService(context, invoiceNumber);
  } catch (e) {}

  return result;
}

export async function addProductToBasketController (context: Context, id) {
  let result;

  try {
    result = await addProductToBasketService(context, id);
  } catch (e) {}

  return result;
}

export async function updateBasketController (context: Context, data) {
  let result;

  try {
    result = await updateBasketService(context, data);
  } catch (e) {}

  return result;
}

export async function getBasketController (context: Context) {
  let result;

  try {
    result = await getBasketService(context);
  } catch (e) {}

  return result;
}

export async function deleteFromBasketController (context: Context, id) {
  let result;

  try {
    result = await deleteFromBasketService(context, id);
  } catch (e) {}

  return result;
}

export async function getOptionsForProductController (context: Context, id) {
  let result;

  try {
    result = await getOptionsForProductService(context, id);
  } catch (e) {}

  return result;
}

export async function addOptionToBasketController (context: Context, data) {
  let result;

  try {
    result = await addOptionToBasketService(context, data);
  } catch (e) {}

  return result;
}

export async function removeOptionToBasketController (context: Context, data) {
  let result;

  try {
    result = await removeOptionToBasketService(context, data);
  } catch (e) {}

  return result;
}

export function getBySearchFilterController (context: Context, data) {
  let result;

  try {
    // result = await getBySearchFilterService(context, data);
  } catch (e) {}

  return result;
}

export async function getBySearchController (context: Context, query) {
  let result;

  try {
    result = await getBySearchService(context, query);
  } catch (e) {}

  return result;
}

// export async function createOrderController (context: Context, dataOrder) {
//   let result;
//
//   try {
//     result = await createOrderService(context, dataOrder);
//   } catch (e) {}
//
//   return result;
// }
