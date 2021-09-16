import { Axios } from '../utils/axios';

export const getPlacesFetch = async () => {
  try {
    const response = await Axios.get('product/smallcard/random/list');

    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
