import { createEvent, createStore, fork } from 'effector';
import places from '../components/fakeAPI/places';

export const getPlaces = createEvent();

export const $places = createStore<any[]>(places).on(
  getPlaces,
  (_, data) => data,
);
