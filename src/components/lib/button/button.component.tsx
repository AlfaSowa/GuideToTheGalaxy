import React, { ReactElement } from 'react';
import styles from './button.module.sass';

interface Props {
    onClick: () => void;
    text?: string;
}

const Button = (props: Props): ReactElement => {
    const { onClick, text } = props;
    return (
        <button className={styles.btn} onClick={() => onClick} type="button">
            {text}
        </button>
    );
};

export default Button;
