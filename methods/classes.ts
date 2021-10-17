import { Axios } from '../utils/axios';

export const getClasses = async (): Promise<any[]> => {
  try {
    const { data, status } = await Axios.get('classes');

    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }

  return [];
};
