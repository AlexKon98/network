import { Context } from '@nuxt/types';
import { pagesResolveService } from '~/domains/Page/page.services';
import { Page, PagesResolveBody } from '~/domains/Page/page.models';

export async function pagesResolveController (context: Context, data: PagesResolveBody) {
  let result: Page | undefined;

  try {
    result = await pagesResolveService(context, data);
  } catch (e) {
  }

  return result;
}
