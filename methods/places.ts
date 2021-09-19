/* eslint-disable import/prefer-default-export */
import { Axios } from '../utils/axios';

export const getPlaces = async (): Promise<any> => {
  try {
    const { data, status } = await Axios.get('/places');

    if (status === 200) {
      console.log('placesData', data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }

  return [];
};
