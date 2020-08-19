import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useParams } from "react-router-dom";
import { Places } from "../components/places/places-list/places.component";

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
