/* eslint-disable no-underscore-dangle */
import React, { ReactElement, ReactNode } from 'react';
import styles from './places.module.sass';
import { PlaceType } from '../../../redux/reducers/places';
import { Place } from '../places-card/places-card.component';

interface PlacesListProps {
    data: PlaceType[];
    url: string;
}

export const PlacesList = (props: PlacesListProps): ReactElement => {
    const { data, url } = props;

    return (
        <div className={styles.places}>
            {data.map(
                (item: PlaceType): ReactNode => (
                    <div className={styles.places__item} key={item._id}>
                        <Place place={item} url={url} />
                    </div>
                )
            )}
        </div>
    );
};

export default PlacesList;
