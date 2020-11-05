import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { Places } from './reducers/places';

export interface State {
    places: Places;
}

const store = createStore(reducer, compose(applyMiddleware(thunk)));
export default store;
