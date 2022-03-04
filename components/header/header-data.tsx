// ------------------- navigation ------------------- //
export type Navigation = {
  id: number;
  name: string;
  route: string;
};

export const navigation: Navigation[] = [
  {
    id: 1,
    name: "главная",
    route: "/",
  },
  {
    id: 2,
    name: "места",
    route: "/places",
  },
];
