import styles from "./button.module.sass";

import React, { useState } from "react";

interface Props {
    onClick: any;
    type?: any;
    text: string;
}

export const Button = (props: Props) => {
    return (
        <button className={styles.btn} onClick={props.onClick} type={props.type || "text"}>
            {props.text}
        </button>
    );
};
