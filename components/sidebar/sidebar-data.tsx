// ------------------- navigation ------------------- //
export type SidebarNav = {
  id: number;
  name: string;
  route: string;
  nesting?: any[];
};
export const sidebarNav: SidebarNav[] = [
  {
    id: 1,
    name: 'главная',
    route: '/',
  },
  {
    id: 2,
    name: 'места',
    route: '/places',
    nesting: [
      {
        name: 'qwe',
      },
      {
        name: 'qwe',
      },
      {
        name: 'qwe',
      },
    ],
  },
  {
    id: 3,
    name: 'главная',
    route: '/',
  },
  {
    id: 4,
    name: 'места',
    route: '/places',
  },
  {
    id: 5,
    name: 'главная',
    route: '/',
    nesting: [
      {
        name: 'qwe',
      },
      {
        name: 'qwe',
      },
      {
        name: 'qwe',
      },
      {
        name: 'qwe',
      },
      {
        name: 'qwe',
      },
    ],
  },
  {
    id: 6,
    name: 'места',
    route: '/places',
  },
  {
    id: 7,
    name: 'главная',
    route: '/',
  },
  {
    id: 8,
    name: 'места',
    route: '/places',
  },
];
