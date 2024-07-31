import {
  AddAddressParams,
  AddAddressResponse,
  AddCompanyResponse,
  ChangeAddressParams,
  ChangeAddressResponse,
  ChangeDataWithCodeResponse,
  CredentialsControllerData,
  DeleteAddressResponse, DeleteCompanyResponse,
  ProfileCompany,
  ProfileDeliveryAddress,
  ResendCodeResponse,
  SuggestCityResponse,
  SuggestCompanyResponse,
} from './profile.model';
import { sendRequest } from '~/helpers/api';
import { RequestResponse } from '~/domains/Request/request.model';

class ProfileController {
  private getApiUrl (endpoint) {
    return '/api/personal/' + endpoint;
  }

  addAddress (data: AddAddressParams): Promise<ProfileDeliveryAddress[] | string> {
    return new Promise((resolve, reject) => {
      sendRequest<AddAddressResponse>(window.$nuxt.context, this.getApiUrl('addaddress'), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
            return;
          }

          resolve(response.data.address);
        }).catch((e) => {
          reject(e.response?.data?.error || e);
        });
    }
    );
  }

  addCompany (inn: string, makeActive?: boolean): Promise<AddCompanyResponse['data']['companies'] | string> {
    const data = {
      inn,
      makeActive
    };

    return new Promise((resolve, reject) => {
      sendRequest<AddCompanyResponse>(window.$nuxt.context, this.getApiUrl('addcompany'), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
            return;
          }

          resolve(response.data?.companies);
        }).catch((e) => {
          reject(e.response?.data?.error || e);
        });
    }
    );
  }

  changeAddress (data: ChangeAddressParams): Promise<ChangeAddressResponse['data']['address'] | string> {
    return new Promise((resolve, reject) => {
      sendRequest<ChangeAddressResponse>(window.$nuxt.context, this.getApiUrl('changeaddress'), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
            return;
          }

          resolve(response.data.address);
        }).catch((e) => {
          reject(e.response?.data?.error || e);
        });
    });
  }

  changeCredentials (data: CredentialsControllerData): Promise<any> {
    return new Promise((resolve, reject) => {
      sendRequest<RequestResponse>(window.$nuxt.context, this.getApiUrl('changecredentials'), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
            return;
          }

          resolve(response.data);
        }).catch((e) => {
          reject(e.response?.data?.error || e);
        });
    });
  }

  changePhone (phone = '', code = ''): Promise<{timeout?: number | boolean, confirmed?: boolean}> {
    return this.sendChangeDataRequest({
      ...(phone ? { phone } : {}),
      ...(code ? { code } : {}),
    }, 'changephone');
  }

  changeEmail (email = '', code = ''): Promise<{timeout?: number | boolean, confirmed?: boolean}> {
    return this.sendChangeDataRequest({
      ...(email ? { email } : {}),
      ...(code ? { code } : {}),
    }, 'changeemail');
  }

  deleteAddress (addressId: number): Promise<ProfileDeliveryAddress[] | string> {
    const data = {
      id: addressId
    };
    return new Promise((resolve, reject) => {
      sendRequest<DeleteAddressResponse>(window.$nuxt.context, this.getApiUrl('deleteaddress'), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
            return;
          }

          resolve(response.data.address);
        })
        .catch((e) => {
          reject(e.response?.data?.error || e);
        });
    });
  }

  deleteCompany (companyId: number): Promise<ProfileCompany[] | string> {
    const data = {
      id: companyId
    };
    return new Promise((resolve, reject) => {
      sendRequest<DeleteCompanyResponse>(window.$nuxt.context, this.getApiUrl('deletecompany'), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
            return;
          }

          resolve(response.data?.companies);
        })
        .catch((e) => {
          reject(e.response?.data?.error || e);
        });
    });
  }

  sendChangeDataRequest (data = {}, endpoint = ''): Promise<{timeout?: number | boolean, confirmed?: boolean}> {
    return new Promise((resolve, reject) => {
      sendRequest<ChangeDataWithCodeResponse>(window.$nuxt.context, this.getApiUrl(endpoint), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
            return;
          }

          resolve(response?.data ?? {});
        }).catch((e) => {
          reject(e.response?.data?.error || e);
        });
    });
  }

  suggestCity (query: string): Promise<string[] | string> {
    const data = {
      query
    };
    return new Promise((resolve, reject) => {
      sendRequest<SuggestCityResponse>(window.$nuxt.context, this.getApiUrl('suggestcity'), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
            return;
          }

          resolve(response.data.suggestions);
        })
        .catch((e) => {
          reject(e.response?.data?.error || e);
        });
    });
  }

  suggestCompany (query: string): Promise<ProfileCompany[] | string> {
    const data = {
      query
    };
    return new Promise((resolve, reject) => {
      sendRequest<SuggestCompanyResponse>(window.$nuxt.context, this.getApiUrl('suggestcompany'), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
            return;
          }

          resolve(response.data.companies);
        })
        .catch((e) => {
          reject(e.response?.data?.error || e);
        });
    });
  }

  resendEmailCode (email = ''): Promise<number> {
    const data = {
      email
    };

    return new Promise((resolve, reject) => {
      sendRequest<ResendCodeResponse>(window.$nuxt.context, this.getApiUrl('resendemailcode'), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
            return;
          }

          resolve(response.data.timeout);
        }).catch((e) => {
          reject(e.response?.data?.error || e);
        });
    });
  }

  resendPhoneCode (phone = ''): Promise<number> {
    const data = {
      phone
    };

    return new Promise((resolve, reject) => {
      sendRequest<ResendCodeResponse>(window.$nuxt.context, this.getApiUrl('resendcode'), 'post', data)
        .then((response) => {
          if (!response.success || response.error) {
            reject(response.error || 'Ошибка');
            return;
          }

          resolve(response.data.timeout);
        }).catch((e) => {
          reject(e.response?.data?.error || e);
        });
    });
  }
}

const profileController = new ProfileController();

export default profileController;
