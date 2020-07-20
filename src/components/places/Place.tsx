import React from "react";
import { PlaceType } from "../../general/types";

export class Place extends React.Component<PlaceProps> {
    state = {
        placeInfoShow: false,
    };

    handleClick = (event: any) => {
        event.preventDefault();
        console.log(this.props.place);
    };

    render() {
        const { place } = this.props;
        return (
            <a className="card place" href={place._id} onClick={this.handleClick}>
                <div className="place__img">{place.img ? <img src={place.img} /> : null}</div>
                <div className="place__title">{place.name}</div>
                <div className="place__content"></div>
            </a>
        );
    }
}

type PlaceProps = {
    place: PlaceType;
};
