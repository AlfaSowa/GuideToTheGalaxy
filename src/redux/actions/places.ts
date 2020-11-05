import Axios from 'axios';
import { Store } from 'redux';
import { PLACES_URL } from '../../general/config';
import { GET_PLACES_FETCH } from '../action-types';
import { Places, PlaceType } from '../reducers/places';
import { State } from '../store';

const getPlaces = async (store: Store<State>): Promise<void> => {
    const { places } = store.getState();
    const response = await Axios.get(PLACES_URL);

    const dataPlaces: Places = {
        ...places,
        data: response.data as PlaceType[]
    };

    store.dispatch({ type: GET_PLACES_FETCH, payload: dataPlaces });
};

export default getPlaces;