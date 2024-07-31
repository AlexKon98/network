import { Context } from '@nuxt/types';
import { sendRequest } from '~/helpers/api';
import { RequestResponse } from '~/domains/Request/request.model';
import { GetStationPointsResponse, StationPoint } from '~/domains/Basestations/basestations.models';

export function getPointsService (context: Context, mapType: string): Promise<StationPoint[]> {
  const data = {
    mapType
  };

  const url = '/api/basestations/getpoints';
  const method = 'post';

  return new Promise((resolve, reject) => {
    sendRequest<GetStationPointsResponse>(context, url, method, data)
      .then((response) => {
        if (response?.data.points) {
          resolve(response.data.points);
        } else {
          reject(new Error('Координаты базовых станций не найдены!'));
        }
      })
      .catch((e) => {
        reject(e || 'Что-то пошло не так');
      });
  });
}
