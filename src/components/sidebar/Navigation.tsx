import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props: NavigationProps) => {
    const { nav } = props;
    return (
        <nav className="nav">
            <ul className="nav__list">
                {nav.map((item, index) => (
                    <li key={index} className="nav__item">
                        <Link className="nav__link" to={`/${item.link}`}>
                            <div className="nav__link-icon"></div>
                            <span className="nav__link-txt">{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

type Navigation = {
    name: string;
    icon: string;
    link: string;
};

type NavigationProps = {
    nav: Navigation[];
};

Navigation.defaultProps = {
    nav: [
        {
            name: "главная",
            icon: "main",
            link: "",
        },
        {
            name: "список мест",
            icon: "places",
            link: "places",
        },
    ],
};
