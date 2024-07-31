import { RequestResponse } from '~/domains/Request/request.model';

export type SetCatalogViewParams = {
  catalogView: 'tiles' | 'list',
}

export interface SetCatalogViewResponse extends RequestResponse {}
