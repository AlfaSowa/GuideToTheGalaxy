import React from "react";
import { Places } from "../places/Places";

export class App extends React.Component<AppProps, IApp> {
    render() {
        return (
            <main className="main">
                <div className="container">
                    <Places />
                </div>
            </main>
        );
    }
}

interface IApp {}

type AppProps = {};
