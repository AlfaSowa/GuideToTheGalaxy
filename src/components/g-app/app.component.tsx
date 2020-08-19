import styles from "./app.module.sass";
import "../../sass/global.sass";

import React, { ReactNode } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import { Places } from "../places/places-list/places.component";

const loggedIn = true;

type PageType = {
    router: string;
    title: string;
    content: JSX.Element;
};

interface Props {
    pages: PageType[];
}

export const App = (props: Props) => {
    return (
        <div className={styles.app__inner}>
            <Router>
                <Sidebar />

                <main className={styles.main}>
                    <div className={styles.main__inner}>
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
        // {
        //     router: "places/:placeId",
        //     title: "Описание места",
        //     content: <PlaceDetails />,
        // },
    ],
};
