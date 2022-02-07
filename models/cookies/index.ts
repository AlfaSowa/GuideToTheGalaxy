import { createEvent, createStore } from "effector-next";

export const setCookiesFx = createEvent<string>();
export const $cookies = createStore<string>(null).on(
  setCookiesFx,
  (_, data) => data
);
