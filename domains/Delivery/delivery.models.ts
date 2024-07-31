import { Context } from '@nuxt/types';
import { RequestResponse } from '~/domains/Request/request.model';

export interface GetDeliveryListByCityParams {
    context: Context;
    city: string;
    settlement: string | null;
}

export interface GetDeliveryListByCityResponse extends RequestResponse{
    data: {
        deliveries: string[];
    }
}

export interface CourierDelivery {
    isCalculated: boolean;
    message: string;
    deliveryId: number;
    name: string;
    description: string;
    price: number;
    managerPrice: number;
    priceFormatted: string;
    periodFormatted: string;
    icon: string;
    contractorCode: string;
    paymentSystemIds: number[];
    hasPickupPoints: boolean;
}

export interface GetCourierDeliveriesByCityResponse extends RequestResponse{
    data: {
        deliveries: CourierDelivery[]
    }
}

export interface GetPickupPointsParams {
    context: Context;
    deliveryId: number;
    cityfias: string;
}

export interface PickupPoint {
    address: string;
    coords: [number, number];
    deliveryId: string;
    id?: string;
    icon?: string;
    marker?: string;
    name: string;
    phoneNumbers: string[];
    workingTime: string[];
}

export interface PickupFilterItem {
    id: string;
    isSelected: boolean;
    name: string;
}

export interface PickupPeriod {
    deliveryId: string;
    period: string;
    price: string;
}

export interface GetPickupPointsResponse extends RequestResponse {
    data: {
        points: PickupPoint[]
    }
}

export interface GetCatalogElementDeliveriesParams {
    context: Context;
    cityName: string;
    productId: string;
    verification: boolean;
}

export interface GetCatalogCourierElementDelivery {
    icon?: string;
    isCalculated: boolean;
    message: string;
    name: string;
    periodDays?: string;
    periodFormatted: string;
    price: number,
    priceFormatted?: string;
    managerPrice?: string;
}

export interface GetCatalogElementCourierDeliveriesResponse extends RequestResponse {
    data: {
        deliveries: GetCatalogCourierElementDelivery[];
    }
}

export interface GetCatalogElementPickupDeliveriesResponse extends RequestResponse {
    data: {
        deliveriesList: PickupPoint[];
        filter: {
            variants: PickupFilterItem[];
        };
    }
}
