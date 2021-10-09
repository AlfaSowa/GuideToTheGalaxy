import { getAccountFx } from '../models/account';
import { Axios } from '../utils/axios';

export const getToken = async ({ username, password }) => {
  try {
    const { data, status } = await Axios.post('auth/login', {
      username,
      password,
    });

    if (status === 201) {
      getAccountFx(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async ({ username, password }) => {
  try {
    const { data, status } = await Axios.post('auth/registration', {
      username,
      password,
    });

    if (status === 201) {
      getToken({
        username: data.username,
        password,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
