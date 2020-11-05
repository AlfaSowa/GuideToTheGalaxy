import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './app.module.sass';
import '../../sass/global.sass';

import { Sidebar } from '../sidebar/Sidebar';
import { pages } from '../../general/data';

export const App = (): ReactElement => {
    return (
        <div className={styles.app__inner}>
            <Router>
                <Sidebar />

                <main className={styles.main}>
                    <div className={styles.main__inner}>
                        <Switch>
                            {pages.map((page) => (
                                <Route exact path={`/${page.router}`} key={page.name}>
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

export default App;
