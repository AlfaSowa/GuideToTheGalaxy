import { Axios } from '../utils/axios';

export const getPlacesFetch = async () => {
  try {
    const response = await Axios.get('product/get/list', {
      params: {
        search: null,
        storeId: null,
        storeAlias: null,
        catalogCategoryId: null,
        catalogCategoryAlias: null,
        pageSize: null,
        page: null,
        filters: null,
        sortType: null,
        sortOrderType: null,
      },
    });

    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
