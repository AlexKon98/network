import { RequestResponse } from '~/domains/Request/request.model';
import { Phone } from '~/domains/Base/base.models';

export interface UserPermissions {
  advertising?: boolean;
  stocks?: boolean;
  seoComments?: boolean;
  sectionFilterId?: boolean;
}

export interface UserCompany {
  active?: boolean
  address?: string
  id?: number | string
  inn?: string
  isLegal?: boolean
  kpp?: string
  name?: string
}

export interface UserLink {
  url?: string;
  name?: string;
}

export interface User {
  isAuthorized?: boolean;
  name?: string;
  permissions?: UserPermissions;
  companies?: UserCompany[];
  links?: UserLink[]
}

export interface UserData {
    user: User;
    timeout: number;
}

export interface Timeout {
    timeout: number;
}

export interface UserInitDataCompare {
        productIds?: Array<number>;
        count?: number;
}

export interface UserInitDataHeaderBanner {
        id?: number;
        text?: string;
        bgColor?: string;
        fontColor?: string;
        expireDays?: number;
}

export interface LastOrder {
  fio: string,
  phone: string,
  email: string,
  city: string,
  cityFias: string,
  address: string,
}

export interface UserInitData {
  basketProductIds?: string[];
  basketProductQuantity?: number;
  compare?: UserInitDataCompare;
  currentBranchEmail: string;
  codeLength?: number | string;
  currentBranchPhones: Phone[];
  currentBranchWorkTime: string;
  currentBranchAddress: string;
  domainCityName: string;
  domainCityNameEn: string;
  wishlist?: UserInitDataCompare;
  user?: User;
  sessid?: string;
  headerBanner?: UserInitDataHeaderBanner;
  spread?: any; // TODO: выяснить типы
  initials?: string;
  phone?: {
    value?: string;
    valueFormatted?: string;
  };
  email?: string;
  lastOrder?: LastOrder;
  lang?: string;
}

export interface UserLoginBody {
        login?: string;
        remember?: boolean;
        sessid?: string;
}
export interface UserLogoutBody {
        sessid?: string;
}

export interface GetInitDataResponse extends RequestResponse{
    data: UserInitData
}

export interface loginForm {
  login: string,
  code?: string,
  remember?: boolean,
  sessid?: string
}

export interface legalAuthForm {
  login: string,
  remember: boolean,
  sessid: string
}

export interface legalRegistrationForm {
  inn: string,
  email: string,
}

export interface logoutForm {
  sessid: string
}

export interface passwordRecoveryForm {
  email: string,
}

export interface newPasswordForm {
  uid: string,
  token: string,
}

export interface verificationEmailForm {
  email: string;
  profileId: string | number;
}

export interface verificationPhoneForm {
  login: string;
  code: number;
}

export interface resendCodeForm {
  phone: string
}

export interface initData {
  cityName: string,
  cityRegion: string,
  citySelected: boolean
}
