/* eslint-disable import/prefer-default-export */
import { createStore } from 'effector-next';

type PagesType = {
  id:number;
  name: string;
  link: string;
};

const pagesInitialData = [
  {
    id: 0,
    name: 'Главная',
    link: '/',
  },
  {
    id: 1,
    name: 'Мир',
    link: '/world',
  },
  {
    id: 1,
    name: 'Приключения',
    link: '/adventures',
  },
  {
    id: 1,
    name: 'Игра',
    link: '/game',
  },
];

export const $pages = createStore<PagesType[]>(pagesInitialData);
