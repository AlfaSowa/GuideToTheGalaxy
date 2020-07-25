import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Auth } from "../components/auth/Auth";
import { Places } from "../components/places/Places";

export class UseRoutes extends React.Component<UseRoutesProps> {
    render() {
        const { isAuth } = this.props;
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            {isAuth ? <Redirect to="/" /> : <Places />}
                        </Route>
                        <Route path="/auth">
                            <Auth />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

type UseRoutesProps = {
    isAuth: boolean;
};
