import Axios from 'axios';
import { BASE_URL } from '../general/config';

export const FetchAxios = Axios.create({
    baseURL: BASE_URL,
});

export default FetchAxios;
