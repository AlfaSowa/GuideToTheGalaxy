/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-void */
import React, { useState, useEffect, ReactElement, ReactNode } from 'react';
import { useSelector, useStore } from 'react-redux';
import { useRouteMatch, useLocation } from 'react-router-dom';
import getPlaces from '../../redux/actions/places';
import { Places as TypePlaces, PlaceType } from '../../redux/reducers/places';
import { State } from '../../redux/store';
import { Pagination } from '../lib/pagination/pagination.component';
import { PlacesList } from './places-list/places-list.component';

export const Places = (): ReactElement => {
    const { places } = useSelector<State, State>((state) => state);
    const store = useStore();
    const { url } = useRouteMatch();
    const [placesData, setPlacesData] = useState<PlaceType[] | null>(null);
    const [pageCount, setPageCount] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(2);

    const fetchPlaces = async (): Promise<void> => {
        await getPlaces(store);
    };

    const goTo = (value: any): void => {
        setPageCount(value);
    };

    useEffect(() => {
        void fetchPlaces();
    }, []);

    useEffect(() => {
        if (places.data.length > 0) {
            setPlacesData(places.data);
        }
    }, [places]);

    return (
        <div>
            {placesData && placesData?.length + 24 > pageSize && (
                <Pagination
                    pageSize={pageSize}
                    totalCount={placesData.length + 24}
                    pageCount={pageCount}
                    data={places.data}
                    goTo={goTo}
                />
            )}
            {placesData && <PlacesList data={placesData} url={url} />}
        </div>
    );
};

export default Places;
