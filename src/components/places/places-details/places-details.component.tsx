/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { PlaceType } from '../../../redux/reducers/places';
import styles from './places-details.module.sass';

export const PlaceDetails = () => {
    const [place, setPlace] = useState<PlaceType>();
    const { url } = useRouteMatch();
    const urlResult = url.replace('/places/', '');

    const getPlaceDetails = async () => {
        await fetch(`/api/places/${urlResult}`)
            .then((res) => res.json())
            .then((data) => {
                setPlace(data);
            });
    };

    console.log(place);

    useEffect(() => {
        getPlaceDetails();
    }, []);

    return place ? (
        <div className={styles.place}>
            <div className={styles.place__header}>
                <h1 className={styles.place__title}>{place.title}</h1>
                <div className={styles.place__subtitle}>
                    <span>{place.city}</span>
                    <span className={styles.place__subtitle_details}>{place.country}</span>
                </div>
            </div>

            <div className={styles.place__content}>
                <div className={styles.place__left}>
                    <div className={styles.images}>
                        <div className={styles.images__preview} />
                        <div className={styles.images__slider} />
                    </div>
                </div>

                <div className={styles.right}>
                    <p>{place.description}</p>
                    <div>
                        <img src={place.img?.preview} alt="" />
                    </div>
                </div>
            </div>

            <Link to="/places">назад</Link>
        </div>
    ) : (
        <PlaceSetailsSkeleton />
    );
};

const PlaceSetailsSkeleton = () => {
    return (
        <div className={styles.skeleton}>
            <div className={styles.skeleton__title} />

            <div className={styles.skeleton__content}>123213</div>
        </div>
    );
};

export default PlaceDetails;
