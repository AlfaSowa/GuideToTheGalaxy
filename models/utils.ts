import {
  createEffect,
  createStore,
} from 'effector';
import { getUtils } from '../methods/utils';

export const getUtilsFx = createEffect(
  async (): Promise<any> => {
    const chapters = await getUtils();
    return chapters;
  },
);

export const $utils = createStore<any>(null).on(
  getUtilsFx.doneData,
  (_, utilsData) => utilsData,
);
