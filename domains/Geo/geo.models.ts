import { Context } from '@nuxt/types';
import { RequestResponse } from '~/domains/Request/request.model';

export interface CityItem {
    name?: string;
    cityName?: string;
    nameEn: string;
    region?: string;
    regionName?: string;
    regionShort?: string;
    hasShop?: boolean;
    domain?: string;
    regionAndCityFormatted?: string;
    phone?: string;
    phoneFormatted?: string;
    email?: string;
}

export interface CityItemLight {

}

export interface GetCityListResponse extends RequestResponse{
    data: {
        cities: Record<string, CityItem[]>
    }
}

export interface SetCityParams {
    context: Context;
    city: string;
    region: string;
    path: string;
}

export interface SetCityResponse extends RequestResponse {
    data: {
        redirectUrl: string;
    }
}

export interface GetCityByIpResponse extends RequestResponse {
    data: CityItem
}

export interface ConcreteCitySuggestion {
    city: string;
    fias: string;
    regionAndCityFormatted: string;
}

export interface GetConcreteCitySuggestionsResponse extends RequestResponse {
    data: {
        suggestions: ConcreteCitySuggestion[];
    }
}

export interface GetAddressHouseSuggestionsParams {
    context: Context;
    settlementFias: string;
    cityFias: string;
    streetFias: string;
    house: string;
}

export interface GetAddressHouseSuggestionsResponse extends RequestResponse {
    data: {
        suggestions: string[];
    }
}

export interface GetStreetSuggestionsParams {
    context: Context;
    query: string;
    cityFias: string;
    settlementFias: string | null;
}

export interface GetStreetSuggestionsResponse extends RequestResponse{
    data: {
        suggestions: string[];
    }
}

export interface GetBranchesListResponse extends RequestResponse {
    data: {
        branches: CityItem[]
    }
}
