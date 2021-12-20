/* eslint-disable import/prefer-default-export */
import { createEffect } from 'effector';
import { createStore } from 'effector-next';
import { Chapter } from '../interfaces/chapters';
import { getChapters } from '../methods/chapters';
import { Axios } from '../utils/axios';

const initialPages = [
  {
    alias: 'characters',
    name: 'Персонаж',
  },
  {
    alias: 'adventures',
    name: 'Приключения',
  },
];

type PagesType = {
  alias: string,
  name: string
};

export const $pages = createStore<PagesType[]>(initialPages);
