import { User } from '~/domains/User/user.models';
import { CheckFormRepair } from '~/domains/Form/form.models';

export interface RequestResponse {
    status?: string;
    success?: boolean;
    error?: string;
    data?: any;
}

export interface LoginResponse extends RequestResponse {
    user?: User;
    timeout?: number;
}

export interface CodeResponse extends RequestResponse {
    timeout?: number;
}

export interface CheckResponse extends RequestResponse {
    repairs?: Array<CheckFormRepair>
}
