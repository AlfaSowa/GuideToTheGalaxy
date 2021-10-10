import { Axios } from '../utils/axios';

/* eslint-disable import/prefer-default-export */
export const getUtils = async (): Promise<any> => {
  try {
    const { data, status } = await Axios.get('utils');

    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }

  return [];
};
