import { createEvent, createStore, fork } from 'effector';

export const getPlaces = createEvent();

export const $places = createStore<any[]>([]).on(getPlaces, (_, data) => data);
