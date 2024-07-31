import { Context } from '@nuxt/types';
import { getPointsService } from '~/domains/Basestations/basestations.services';
import { StationPoint } from '~/domains/Basestations/basestations.models';

export async function getPointsController (context: Context, mapType: string): Promise<StationPoint[] | undefined> {
  let result: StationPoint[] | undefined;

  try {
    result = await getPointsService(context, mapType);
  } catch (e) {
  }

  return result;
}
