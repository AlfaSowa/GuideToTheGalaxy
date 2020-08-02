import React from "react";
import { PlaceType } from "../../general/types";

export const Place = (props: PlaceProps) => {
    const { place } = props;

    return (
        <React.Fragment>
            <div className="place__img">{place.img ? <img src={place.img} alt="" /> : null}</div>
            <div className="place__title">{place.name}</div>
            <div className="place__content"></div>
        </React.Fragment>
    );
};

type PlaceProps = {
    place: PlaceType;
};
