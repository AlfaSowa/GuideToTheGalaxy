import styles from "./places.module.sass";

import React, { useState, useEffect } from "react";
import { Place, PlaceType } from "../places-card/places-card.component";
import { useRouteMatch, useLocation } from "react-router-dom";
import { useHttp } from "../../../hooks/http.hook";
import { PlacesForm } from "../places-form/places-form.component";
import { PLACES_URL } from "../../../general/config";

interface Props {}

export const Places = (props: Props) => {
    const [places, setPlaces] = useState<PlaceType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowForm, setIsShowForm] = useState(false);

    const { url } = useRouteMatch();
    const parametrs = useLocation().search;

    const { loading, error, request } = useHttp();

    useEffect(() => {
        if (!isLoading) {
            fetchPlaces();
        }
    }, [isLoading, places]);

    const deletePlace = async (e: any, id: string) => {
        e.preventDefault();

        setPlaces((prev) => prev.filter((item) => item._id !== id));
        const data = await request(`${PLACES_URL}/delete`, "DELETE", { id: id });
    };

    const createPlace = async (form: any, tags: string[]) => {
        const dataPlace = { ...form, tags };

        console.log("dataPlace", dataPlace);

        try {
            const data = await request(`${PLACES_URL}/add`, "POST", dataPlace);
            console.log("data.place", data.place);
            setPlaces((prev) => [...prev, data.place]);
        } catch (error) {}
    };

    const fetchPlaces = async () => {
        setIsLoading(true);
        const data = await request(`${PLACES_URL}${parametrs && parametrs}`);
        setPlaces(data);
    };

    const showForm = () => {
        setIsShowForm(!isShowForm);
        document.body.classList.toggle("fixed");
    };

    return (
        <React.Fragment>
            <div className={`${styles.places} grid`}>
                {places.length > 0 &&
                    places.map((item: PlaceType, index) => (
                        <div key={index} className="grid__item">
                            <Place place={item} url={url} deletePlaceFromBd={deletePlace} />
                        </div>
                    ))}

                <div className={`grid__item ${styles.places__add}`}>
                    <div className={styles.places__add_inner} onClick={showForm}>
                        добавить карточку
                    </div>
                </div>
            </div>

            {isShowForm && <PlacesForm createPlace={createPlace} showForm={showForm} />}
        </React.Fragment>
    );
};
