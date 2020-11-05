import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useParams } from 'react-router-dom';
import { Places } from '../components/places/places.component';

export const UseRoutes = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);

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
};

export default UseRoutes;
