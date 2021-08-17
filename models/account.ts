import { createEffect, createStore } from 'effector';
import { Axios } from '../utils/axios';
import { app } from './model';

export const updateAccount = app.createEvent();

export const $account = app
  .createStore(null)
  .on(updateAccount, (_, account) => {
    return account;
  });
