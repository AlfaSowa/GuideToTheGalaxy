import { createEffect, createStore } from 'effector';
import { Axios } from '../utils/axios';

export const getAccountFx = createEffect(
  async (cookie: string): Promise<any> => {
    const reg = /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/;
    const token = cookie ? cookie.replace(reg, '$1') : '';

    if (token) {
      try {
        const { status, data } = await Axios.get('account/get/context', {
          headers: {
            Authorization: `Bearer  ${token}`,
          },
        });

        if (status === 200) {
          return { ...data, token };
        }
      } catch (err) {
        console.log('Error from getAccountFx ===', err);
      }
    }
    return null;
  },
);

export const $account = createStore(null).on(
  getAccountFx.doneData,
  (_, data) => data,
);
