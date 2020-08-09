import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import { Places } from "../places/Places";
import { PlaceDetails } from "../places/PlaceDetails";

export const App = (props: AppProps) => {
    const loggedIn = true;
    return (
        <div className="app__inner">
            <Router>
                <Sidebar />

                <main className="main">
                    <div className="main__inner">
                        <Switch>
                            <Route exact path="/">
                                {loggedIn ? <Redirect to="/places" /> : <div>12312</div>}
                            </Route>

                            <Route exact path="/places">
                                <Places />
                            </Route>

                            <Route path="/places/:placeId">
                                <PlaceDetails />
                            </Route>

                            <Route path="/other">
                                <div>other</div>
                            </Route>
                        </Switch>
                    </div>
                </main>
            </Router>
        </div>
    );
};

type AppProps = {};
