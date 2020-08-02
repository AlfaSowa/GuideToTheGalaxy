import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type PlaceType = {
    name?: string;
    img?: string;
};

export const PlaceDetails = () => {
    const [place, setPlace] = useState<PlaceType>();
    const { placeId } = useParams();
    console.log(placeId);

    const getPlaceDetails = async () => {
        await fetch(`/api/places/${placeId}`)
            .then((res) => res.json())
            .then((data) => {
                setPlace(data);
            });
    };

    useEffect(() => {
        getPlaceDetails();
    }, []);

    return place ? (
        <div>
            <div>
                <img src={place.img} alt="" />
            </div>
            <Link to="/places">назад</Link>
        </div>
    ) : (
        <div>Load...</div>
    );
};
