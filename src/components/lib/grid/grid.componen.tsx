import styles from "./grid.module.sass";
import React from "react";

interface Props {
    content: any[];
    component: any;
}

export const Grid = (props: Props) => {
    const { component, content } = props;
    return (
        <div className={styles.grid}>
            {content.map((cell, index) => (
                <div key={index} className="grid__item"></div>
            ))}
        </div>
    );
};
