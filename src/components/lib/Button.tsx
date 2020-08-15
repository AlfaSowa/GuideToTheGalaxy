import React, { useState } from "react";

export const Button = (props: ButtonProps) => {
    return (
        <button className="btn" onClick={props.onClick} type={props.type || "text"}>
            {props.text}
        </button>
    );
};

type ButtonProps = {
    onClick: any;
    type?: any;
    text: string;
};
