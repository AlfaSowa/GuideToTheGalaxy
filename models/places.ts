import {
  createEvent,
  createStore,
  fork,
} from 'effector';
import places from '../components/fakeAPI/places';

export const updatePlacesFx = createEvent();

export const $places = createStore<any[]>(places).on(
  updatePlacesFx,
  (_, data) => data,
);
