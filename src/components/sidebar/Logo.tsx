import React from "react";
import { Link } from "react-router-dom";

export const Logo = (props: LogoProps) => {
    return (
        <Link className="logo" to="/">
            Logo
        </Link>
    );
};

type LogoProps = {};
