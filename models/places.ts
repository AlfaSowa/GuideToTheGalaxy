import { fork } from 'effector';
import { app } from './model';

export const getPlaces = app.createEvent();

export const $places = app
  .createStore<any[]>([])
  .on(getPlaces, (_, data) => data);
