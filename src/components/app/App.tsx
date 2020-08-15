import React, { ReactNode } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import { Places } from "../places/Places";
import { PlaceDetails } from "../places/PlaceDetails";
import { PageType } from "../../types/app";

const loggedIn = true;

export const App = (props: AppProps) => {
    return (
        <div className="app__inner">
            <Router>
                <Sidebar />

                <main className="main">
                    <div className="main__inner">
                        <Switch>
                            {props.pages.map((page, index) => (
                                <Route exact path={`/${page.router}`} key={index}>
                                    {page.content}
                                </Route>
                            ))}
                        </Switch>
                    </div>
                </main>
            </Router>
        </div>
    );
};

type AppProps = {
    pages: PageType[];
};

App.defaultProps = {
    pages: [
        {
            router: "",
            title: "Добро пожаловать в галактику",
            content: loggedIn ? <Redirect to="/places" /> : <div>12312</div>,
        },
        {
            router: "places",
            title: "Места",
            content: <Places />,
        },
        {
            router: "places/:placeId",
            title: "Описание места",
            content: <PlaceDetails />,
        },
    ],
};
