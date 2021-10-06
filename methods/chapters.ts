/* eslint-disable import/prefer-default-export */
import { Chapter } from '../interfaces/chapters';
import { Axios } from '../utils/axios';

export const getChapters = async (): Promise<Chapter[]> => {
  try {
    const { data, status } = await Axios.get('chapters');

    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const deleteChapters = async (id): Promise<any> => {
  try {
    const { data, status } = await Axios.delete(`chapters/${id}`);

    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const postChapters = async (): Promise<any> => {
  try {
    const { data, status } = await Axios.post('chapters');

    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }

  return [];
};
