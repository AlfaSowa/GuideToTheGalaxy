import { createEvent, createStore } from 'effector';

export const places = createStore([]);
export const changed = createEvent();

const updateStore = (state, data) => {
  return [...data];
};

places.on(changed, updateStore);
