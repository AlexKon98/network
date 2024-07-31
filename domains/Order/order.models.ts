import { RequestResponse } from '~/domains/Request/request.model';

export interface Coupon {
  code: string;
  valid: boolean;
  discount: string;
  discountSum: number;
  discountSumFormatted: string;
  error?: string;
}

export interface Price {
  finalPrice: number;
  fullPrice: number;
  productsDiscount: number;
  couponDiscount: number;
  discountPercentage: number;
}

export interface CurrentOrder {
  price: Price;
  productCount: number;
  coupon: Coupon;
}

export interface CurrentOrderProps {
  userName: string,
  userEmail: string,
  userPhone: string,
  userComment: string,
  userPayment: number,
  userType: string,
  deliveryAddress: string,
  deliveryId: number,
  deliveryCityFias: string,
  deliveryPickupPointId: string,
  headerCity: string,
  userRequisitesText: string,
  userRequisitesFile: string,
  productIds: number[]
}

export interface OrderLink {
  orderSuccessUrl: string,
}

export interface GetOrderDataResponse extends RequestResponse {
  data: CurrentOrder
}

export interface OrderLinkResponse extends RequestResponse {
  data: OrderLink
}

export interface OrderCancelResponse extends RequestResponse {
  data: {
    status: {
      title: string;
      textColor: string;
      backgroundColor: string;
    }
  }
}
