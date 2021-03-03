// ------------------- dropdown ------------------- //
export type Item = {
  id: number;
  name: string;
  route: string;
};

export const dropdown: Item[] = [
  {
    id: 1,
    name: 'главная',
    route: '/',
  },
  {
    id: 2,
    name: 'места',
    route: '/places',
  },
  {
    id: 3,
    name: 'места',
    route: '/places',
  },
];

export const options: Item[] = [
  {
    id: 1,
    name: 'настройки-1',
    route: '/',
  },
  {
    id: 2,
    name: 'настройки-2',
    route: '/',
  },
  {
    id: 3,
    name: 'настройки-3',
    route: '/',
  },
  {
    id: 4,
    name: 'настройки-4',
    route: '/',
  },
];

export const admin: Item[] = [
  {
    id: 1,
    name: 'выход',
    route: '/',
  },
];
