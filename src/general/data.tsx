import React from 'react';
import Place from '../components/places/places.component';
import { PlaceDetails } from '../components/places/places-details/places-details.component';

export const pages = [
    {
        router: '',
        name: 'главная',
        title: 'Добро пожаловать в галактику',
        content: <div>12312</div>,
    },
    {
        router: 'places',
        name: 'места',
        title: 'Места',
        content: <Place />,
    },
    // {
    //     router: 'places/:placeId',
    //     title: 'Описание места',
    //     content: <PlaceDetails />,
    // },
];

export default pages;
