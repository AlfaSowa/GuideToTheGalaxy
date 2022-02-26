import { createEvent, createStore } from "effector-next";

export const setTokenFx = createEvent<string>();
export const $token = createStore<string>(null).on(
  setTokenFx,
  (_, data) => data,
);
