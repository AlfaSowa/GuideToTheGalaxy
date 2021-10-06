/* eslint-disable import/prefer-default-export */
import { createEffect } from 'effector';
import { createStore } from 'effector-next';
import { Chapter } from '../interfaces/chapters';
import { getChapters } from '../methods/chapters';
import { Axios } from '../utils/axios';

export const getPagesDataFx = createEffect(
  async (): Promise<Chapter[]> => {
    const chapters = await getChapters();
    return chapters;
  },
);

export const $pages = createStore<Chapter[]>([]).on(
  getPagesDataFx.doneData,
  (_, pagesData) => pagesData,
);

$pages.watch((data) => console.log(data));
