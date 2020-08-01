import React from "react";
// import placesData from "./placesData.json";

import { PlaceType } from "../../general/types";
import { Place } from "./Place";
import { Loading } from "../lib/Loading";

export class Places extends React.Component<PlacesProps, IPlaces> {
    state = {
        isLoading: false,
        places: [],
        place: { name: "" },
    };

    fetchPlaces = async () => {
        await fetch("/api/places/")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    isLoading: true,
                    places: data,
                });
            });
    };

    createPlace = async () => {
        const response = await fetch("/api/places/add", {
            method: "POST",
            body: JSON.stringify(this.state.place),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
    };

    handleChange = (value: string) => {
        this.setState({
            place: { name: value },
        });
    };

    componentDidMount = (): void => {
        this.fetchPlaces();
    };

    render() {
        const { isLoading, places, place } = this.state;
        console.log(places);
        return isLoading ? (
            <React.Fragment>
                <div className="places grid">
                    {places.map((item, index) => (
                        <div key={index} className="grid__item">
                            <Place place={item} />
                        </div>
                    ))}
                </div>
                <div>
                    <input onChange={(e) => this.handleChange(e.target.value)} type="text" id="place" value={place.name} />
                    <button onClick={this.createPlace}>добавить</button>
                </div>
            </React.Fragment>
        ) : (
            <Loading value={"places"} />
        );
    }
}

type PlacesProps = {};

interface IPlaces {
    isLoading: boolean;
    places: PlaceType[];
    place: { name: string };
}
