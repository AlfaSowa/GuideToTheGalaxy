import React from "react";
import { PlaceType } from "../../general/types";
import { Link } from "react-router-dom";

type Place = {
    title: string;
    img: {
        preview: string;
        all: string[];
    };
    description: string;
    country: string;
    tags: string[];
    coord: number;
    data: {
        website: string;
    };
};

export const Place = (props: PlaceProps) => {
    const { url, place, deletePlaceFromBd } = props;

    const deletePlace = (e: any, place: PlaceType) => {
        deletePlaceFromBd(e, place);
    };

    return (
        <React.Fragment>
            <Link className="card place" to={`${url}/${place._id}`}>
                <div className="place__img">{place.img ? <img src={place.img} alt="" /> : null}</div>
                <div className="place__content">
                    <div className="place__title">{place.name}</div>
                </div>
                <div className="place__delete" onClick={(e) => deletePlace(e, place)}></div>
            </Link>
        </React.Fragment>
    );
};

type PlaceProps = {
    place: PlaceType;
    url: string;
    deletePlaceFromBd: any;
};
