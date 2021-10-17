import {
  createEffect,
  createStore,
} from 'effector';
import { getClasses } from '../methods/classes';

export const getClassesDataFx = createEffect(
  async (): Promise<any[]> => {
    const chapters = await getClasses();
    return chapters;
  },
);

export const $classes = createStore<any[]>([]).on(
  getClassesDataFx.doneData,
  (_, pagesData) => pagesData,
);
