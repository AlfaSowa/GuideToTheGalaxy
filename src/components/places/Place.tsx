import React from "react";
import { Link } from "react-router-dom";
import { PlaceType } from "../../types/places";

export const Place = (props: PlaceProps) => {
    const { url, place, deletePlaceFromBd } = props;

    const deletePlace = (e: any, id: string) => {
        deletePlaceFromBd(e, id);
    };

    return (
        <React.Fragment>
            <Link className="card place" to={`${url}/${place._id}`}>
                <div className="place__header">
                    <div className="place__title">
                        <div className="place__temp">+20</div>

                        <div className="place__title-inner">
                            <span>{place.title}</span>
                            <p>
                                {place.country || "country"} -- {place.city || "city"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="place__delete" onClick={(e) => deletePlace(e, place._id)}></div> */}

                <div className="place__tags">
                    {place.tags?.map((tag, index) => (
                        <span className="place__tags-item" key={index}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="place__content">
                    <div className="place__inner">
                        <div className="place__data">
                            {place.description && (
                                <div className="place__description">
                                    <p>{place.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* <div className="place__img">{place.img ? <img src={place.img.preview} alt={place.img.alt} /> : null}</div> */}
                {/* {place.description && <div className="place__description">{place.description}</div>} */}
            </Link>
        </React.Fragment>
    );
};

type PlaceProps = {
    place: PlaceType;
    url: string;
    deletePlaceFromBd: any;
};
