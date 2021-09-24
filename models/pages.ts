/* eslint-disable import/prefer-default-export */
import { createEffect } from 'effector';
import { createStore } from 'effector-next';
import { Chapter } from '../interfaces/chapters';
import { Axios } from '../utils/axios';

export const getPagesDataFx = createEffect(
  async (): Promise<Chapter[]> => {
    try {
      const { data, status } = await Axios.get('chapters');

      if (status === 200) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
    return [];
  },
);

export const $pages = createStore<Chapter[]>([]).on(
  getPagesDataFx.doneData,
  (_, pagesData) => pagesData,
);

$pages.watch((data) => console.log(data));
