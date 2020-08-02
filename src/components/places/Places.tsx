import React, { useState, useEffect } from "react";

import { PlaceType } from "../../general/types";
import { Place } from "./Place";
import { Loading } from "../lib/Loading";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { PlaceDetails } from "./PlaceDetails";

export const Places = (props: PlacesProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [places, setPlaces] = useState([]);
    const [place, setPlace] = useState({ name: "" });

    const fetchPlaces = async () => {
        await fetch("/api/places/")
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
        console.log(data);
    };

    const handleChange = (value: string) => {
        setPlace({ name: value });
    };
    let { path, url } = useRouteMatch();

    useEffect(() => {
        if (!isLoading) {
            fetchPlaces();
        }
    }, [isLoading]);

    return isLoading ? (
        <React.Fragment>
            <div className="places grid">
                {places.map((item: PlaceType, index) => (
                    <div key={index} className="grid__item">
                        <Link className="card place" to={`${url}/${item._id}`}>
                            <Place place={item} />
                        </Link>
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
