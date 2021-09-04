import { createEvent, createStore } from 'effector';

export const toogleSidebarActionFx = createEvent<boolean>();
export const $sidebarAction = createStore<boolean>(true).on(
  toogleSidebarActionFx,
  (_, data) => data,
);
