import React, { Children } from 'react';
import { PlaceType } from '../../../redux/reducers/places';
import styles from './grid.module.sass';

interface Props {
    children: PlaceType[];
}

export const Grid = (props: Props) => {
    const { children } = props;

    return (
        <div className={styles.grid}>
            {children.map((child, index) => (
                <div key={index} className="grid__item">
                    1
                </div>
            ))}
        </div>
    );
};

export default Grid;
