import React from "react";
import { PlaceType } from "../../general/types";
import { Link } from "react-router-dom";

export const Place = (props: PlaceProps) => {
    const { url, place, deletePlaceFromBd } = props;

    const deletePlace = (e: any, id: string) => {
        deletePlaceFromBd(e, id);
    };

    return (
        <React.Fragment>
            <Link className="card place" to={`${url}/${place._id}`}>
                <div className="place__img">{place.img ? <img src={place.img.preview} alt={place.img.alt} /> : null}</div>
                <div className="place__content">
                    <div className="place__title">{place.title}</div>
                </div>
                <div className="place__delete" onClick={(e) => deletePlace(e, place._id)}></div>
            </Link>
        </React.Fragment>
    );
};

type PlaceProps = {
    place: PlaceType;
    url: string;
    deletePlaceFromBd: any;
};
