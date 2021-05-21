import { createEffect, createStore } from 'effector';
import { Axios } from '../utils/axios';

export const tokenActionFx = createEffect(async (cookie) => {
  // const reg = /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/;
  // const token = cookie ? cookie.replace(reg, '$1') : '';

  // const config = {
  //   headers: {
  //     Authorization: `Bearer  ${token}`,
  //   },
  // };
  // const response = await Axios.get('account/get/context', config);

  // console.log('account', response.data);

  return null;
});

export const $account = createStore(null).on(
  tokenActionFx.doneData,
  (_, data) => data,
);
