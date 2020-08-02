import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useParams } from "react-router-dom";

import { Auth } from "../components/auth/Auth";
import { Places } from "../components/places/Places";

export class UseRoutes extends React.Component<UseRoutesProps> {
    render() {
        const { id } = useParams();
        console.log("id", id);
        const { isAuth } = this.props;
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/:id">
                            <div>1</div>
                        </Route>
                        <Route exact path="/">
                            {isAuth ? <Redirect to="/" /> : <Places />}
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
