import styles from "./places-card.module.sass";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHttp } from "../../../hooks/http.hook";
import { WEATHER__URL } from "../../../general/config";

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

interface Props {
    place: PlaceType;
    url: string;
    deletePlaceFromBd: any;
}

export const Place = (props: Props) => {
    const { url, place, deletePlaceFromBd } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState();
    const { loading, error, request } = useHttp();

    const deletePlace = (e: any, id: string) => {
        deletePlaceFromBd(e, id);
    };

    const fetchWeather = async () => {
        const data = await request(`${WEATHER__URL}`);
        setWeather(data);
    };

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);
            fetchWeather();
        }
    }, [isLoading, weather]);

    return (
        <React.Fragment>
            <Link className={`card ${styles.place}`} to={`${url}/${place._id}`}>
                <div className={styles.place__header}>
                    <div className={styles.place__title}>
                        <div className={styles.place__temp}>{weather}</div>

                        <div className={styles.place__title_inner}>
                            <span>{place.title}</span>
                            <p>
                                {place.country || "country"} -- {place.city || "city"}
                            </p>
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
        </React.Fragment>
    );
};
