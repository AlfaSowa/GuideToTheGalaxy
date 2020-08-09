import React, { useState, useEffect } from "react";

import { PlaceType } from "../../general/types";
import { Place } from "./Place";
import { Loading } from "../lib/Loading";
import { useRouteMatch, useLocation } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";

const PLACES_URL = "/api/places";

export const Places = (props: PlacesProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [places, setPlaces] = useState<PlaceType[]>([]);
    const [form, setForm] = useState({});

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

    const createPlace = async () => {
        try {
            const data = await request(`${PLACES_URL}/add`, "POST", { ...form });
            setPlaces((prev) => [...prev, data.place]);
        } catch (error) {}
    };

    const fetchPlaces = async () => {
        setIsLoading(true);
        const data = await request(`${PLACES_URL}${parametrs && parametrs}`);
        setPlaces(data);
    };

    const handleChange = (event: any) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return isLoading ? (
        <React.Fragment>
            {places.length > 0 && (
                <div className="places grid">
                    {places.map((item: PlaceType, index) => (
                        <div key={index} className="grid__item">
                            <Place place={item} url={url} deletePlaceFromBd={deletePlace} />
                        </div>
                    ))}
                </div>
            )}

            <div className="form">
                <label>
                    <span>title</span>
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <button onClick={createPlace} type="submit">
                    добавить
                </button>
            </div>
        </React.Fragment>
    ) : (
        <Loading value={"places"} />
    );
};

type PlacesProps = {};
