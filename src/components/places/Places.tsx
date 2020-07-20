import React from "react";
// import placesData from "./placesData.json";

import { PlaceType } from "../../general/types";
import { Place } from "./Place";
import { Loading } from "../lib/Loading";

export class Places extends React.Component<PlacesProps, IPlaces> {
    state = {
        isLoading: false,
        places: [],
    };

    fetchPlaces = async () => {
        await fetch("/api/places/list")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    isLoading: true,
                    places: data,
                });
                console.log(data);
            });
    };

    componentDidMount = (): void => {
        this.fetchPlaces();
    };

    render() {
        const { isLoading, places } = this.state;
        return isLoading ? (
            <div className="places grid">
                {places.map((item, index) => (
                    <div key={index} className="grid__item">
                        <Place place={item} />
                    </div>
                ))}
            </div>
        ) : (
            <Loading value={"places"} />
        );
    }
}

type PlacesProps = {};

interface IPlaces {
    isLoading: boolean;
    places: PlaceType[];
}
