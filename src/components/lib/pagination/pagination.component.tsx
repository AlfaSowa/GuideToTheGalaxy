/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { ReactElement, useEffect, useState } from 'react';
import styles from './pagination.module.sass';

interface PaginationProps {
    pageCount: number;
    totalCount: number;
    data: any[];
    pageSize: number;
    goTo: (value: number) => void;
}

export const Pagination = (props: PaginationProps): ReactElement => {
    const { totalCount, pageCount, data, pageSize, goTo } = props;
    const [arrPagination, setArrPagination] = useState<number[]>([]);

    const getPagination = () => {
        const number = totalCount / pageSize;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < Math.ceil(number); i++) {
            setArrPagination((prev) => prev.concat(i));
        }
    };

    useEffect(() => {
        if (totalCount > pageSize && data.length > 0) {
            getPagination();
        }
    }, [data]);

    return (
        <div className={styles.pagination}>
            <ul className={styles.pagination__list}>
                {pageCount > 2 && (
                    <li className={styles.pagination__item} onClick={() => goTo(1)}>
                        1
                    </li>
                )}
                {pageCount > 3 && <li className={styles.pagination__item}>...</li>}
                {arrPagination.map(
                    (item) =>
                        ((item > 0 && item === pageCount - 1) || item === pageCount || item === pageCount + 1) && (
                            <li className={styles.pagination__item} key={item} onClick={() => goTo(item)}>
                                {item}
                            </li>
                        )
                )}
                {pageCount < arrPagination.length - 2 && <li className={styles.pagination__item}>...</li>}
                <li className={styles.pagination__item} onClick={() => goTo(arrPagination.length)}>
                    {arrPagination.length}
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
