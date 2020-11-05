/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './places-card.module.sass';
import { useHttp } from '../../../hooks/http.hook';
import { WEATHER_URL } from '../../../general/config';
import { PlaceType } from '../../../redux/reducers/places';

interface Props {
    place: PlaceType;
    url: string;
}

export const Place = (props: Props) => {
    const { url, place } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState();
    const { loading, error, request } = useHttp();

    // const fetchWeather = async () => {
    // const data = await request(`${WEATHER_URL}`);
    // setWeather(data);
    // };

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);
        }
    }, [isLoading, weather]);

    return (
        <Link className={`card ${styles.place}`} to={`${url}/${place._id}`}>
            <div className={styles.place__header}>
                <div className={styles.place__title}>
                    <div className={styles.place__temp}>{weather}</div>

                    <div className={styles.place__title_inner}>
                        <span>{place.title}</span>
                        <p>{`${place.country || 'country'} -- ${place.city || 'city'}`}</p>
                    </div>
                </div>
            </div>

            <div className={styles.place__tags}>
                {place.tags?.map((tag, index) => (
                    <span className={styles.place__tags_item} key={index}>
                        {tag}
                    </span>
                ))}
            </div>

            <div className={styles.place__content}>
                <div className={styles.place__inner}>
                    <div className={styles.place__data}>
                        {place.description && (
                            <div className={styles.place__description}>
                                <p>{place.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Place;
