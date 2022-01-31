import { createEvent, createStore } from "effector-next";

export const sidebarToggleFx = createEvent<boolean>();
export const $sidebarIsOpen = createStore<boolean>(true).on(sidebarToggleFx, (_, data) => data);
