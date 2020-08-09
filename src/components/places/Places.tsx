import React, { useState, useEffect } from "react";

import { PlaceType } from "../../general/types";
import { Place } from "./Place";
import { Loading } from "../lib/Loading";
import { Link, useRouteMatch, Switch, Route, useParams, useLocation } from "react-router-dom";
import { PlaceDetails } from "./PlaceDetails";

export const Places = (props: PlacesProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [places, setPlaces] = useState<PlaceType[]>([]);
    const [place, setPlace] = useState<PlaceType>({ name: "" });

    let parametrs = useLocation().search;

    const fetchPlaces = async () => {
        await fetch(`/api/places${parametrs && parametrs}`)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(true);
                setPlaces(data);
            });
    };

    const createPlace = async () => {
        const response = await fetch("/api/places/add", {
            method: "POST",
            body: JSON.stringify(place),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        setPlaces((prev) => [...prev, data.place]);
    };

    const deletePlace = async (e: any, card: PlaceType) => {
        e.preventDefault();
        console.log(123);

        setPlaces((prev) => prev.filter((item) => item._id !== card._id));

        const response = await fetch("/api/places/delete", {
            method: "DELETE",
            body: JSON.stringify(card),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    const handleChange = (value: string) => {
        setPlace({ name: value });
    };
    let { path, url } = useRouteMatch();

    useEffect(() => {
        if (!isLoading) {
            fetchPlaces();
        }
    }, [isLoading, places]);

    return isLoading ? (
        <React.Fragment>
            <div className="places grid">
                {places.map((item: PlaceType, index) => (
                    <div key={index} className="grid__item">
                        <Place place={item} url={url} deletePlaceFromBd={deletePlace} />
                    </div>
                ))}
            </div>

            <div>
                <input
                    onChange={(e) => handleChange(e.target.value)}
                    type="text"
                    id="place"
                    value={place.name ? place.name : ""}
                />
                <button onClick={createPlace}>добавить</button>
            </div>
        </React.Fragment>
    ) : (
        <Loading value={"places"} />
    );
};

type PlacesProps = {};
