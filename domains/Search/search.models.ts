import { RequestResponse } from '~/domains/Request/request.model';
import { CatalogPrice, Image } from '~/domains/Base/base.models';

export interface SearchProducts {
    type?: string;
    name?: string;
    url?: string;
    image?: Image;
    prices?: CatalogPrice;
    id?: number;
    offerId?: number;
    inCart?: boolean;
}

export interface SearchHistory {
    query?: string;
    ids?: Array<number>;
}

export interface SearchSections {
    name?: string;
    url?: string;
}

export interface SearchHeader {
    products?: Array<SearchProducts>;
    sections?: Array<SearchSections>;
    history?: Array<SearchHistory>;
    frequent?: Array<string>;
    submitUrl?: string;
}

export interface SearchDeleteSearchQueryResponse extends RequestResponse{
    data: {
        history: Array<SearchHistory>;
    }
}

export interface SearchHeaderResponse extends RequestResponse{
    data: SearchHeader
}
