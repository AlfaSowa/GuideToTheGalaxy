/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/prefer-default-export */
import { AnyAction } from 'redux';
import {
    GET_PLACES_FETCH,
} from '../action-types';

export type PlaceType = {
    _id: string;
    title: string;
    img?: {
        preview: string;
        alt: string;
        all: string[];
    };
    description?: string;
    country?: string;
    city?: string;
    tags?: string[];
    coord?: number;
    data?: {
        website: string;
    };
};

export interface Places {
    data: PlaceType[]
}

const initAccount: Places = {
    data: []
};

export const places = (
    state: Places = initAccount, 
    action: AnyAction
): Places => {
    switch (action.type) {
        case GET_PLACES_FETCH:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};