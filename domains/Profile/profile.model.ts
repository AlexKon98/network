import { UserCompany } from '~/domains/User/user.models';

export interface CredentialsControllerData {
  birth_day?: string;
  fio?: string;
  gender?: string;
}

export interface ProfileControllerResponse {
  success?: boolean;
  error?: string;
}

export interface ChangeDataWithCodeResponse extends ProfileControllerResponse {
  data?: {
    timeout?: number;
  }
}

export interface ResendCodeResponse extends ProfileControllerResponse {
  data: {
    timeout: number;
  }
}

export interface ProfileCompany {
  id?: number,
  inn?: string,
  kpp?: string,
  name?: string,
  address?: string
}

export interface ProfileDeliveryAddress {
  address: string
  city: string,
  comment: string,
  fullAddress: string;
  id: number,
  label: string,
}

export interface AddAddressParams {
  city?: string;
  address?: string;
  comment?: string;
  useAsDefault?: boolean
}

export interface ChangeAddressParams {
  id: number;
  city: string;
  fullAddress: string;
  comment: string;
  useAsDefault: boolean
}

export interface AddAddressResponse extends ProfileControllerResponse {
  data: {address: ProfileDeliveryAddress[]}
}

export interface ChangeAddressResponse extends ProfileControllerResponse {
  data: { address: ProfileDeliveryAddress[] }
}

export interface DeleteAddressResponse extends ProfileControllerResponse {
  data: { address: ProfileDeliveryAddress[] }
}

export interface DeleteCompanyResponse extends ProfileControllerResponse {
  data: {
    companies: ProfileCompany[]
  }
}

export interface AddCompanyResponse extends ProfileControllerResponse {
  data: { companies: UserCompany[] }
}

export interface SuggestCompanyResponse extends ProfileControllerResponse {
  data: {
    companies: ProfileCompany[]
  }
}

export interface SuggestCityResponse extends ProfileControllerResponse {
  data: {
    suggestions: string[]
  }
}
