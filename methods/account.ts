import { Axios } from '../utils/axios';

export const getAccount = async (cookie) => {
  const reg = /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/;
  const token = cookie ? cookie.replace(reg, '$1') : '';

  if (token) {
    const config = {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    };

    try {
      console.log(1111);
      const response = await Axios.get('account/get/context', config);

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return null;
};
