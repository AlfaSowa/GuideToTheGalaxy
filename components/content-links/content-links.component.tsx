/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import {
  useEffect,
  useState,
} from 'react';
import Error from 'next/error';
import {
  Chapter,
  Part,
} from '../../interfaces/chapters';
import { $pages } from '../../models/pages';
import styles from './content-links.module.scss';
import Typography from '../ui/typography/typography.component';

interface ContentLinksProps {
  links: any[]
}

const ContentLinks = ({ links }: ContentLinksProps): JSX.Element => {
  return (
    <div className={styles.list}>
      {links.map((item) => (
        <div className={styles.list__item}>
          <Link href={item.alias} key={item.alias}>
            <a className={styles.card}>
              <div className={styles.card__inner}>
                <div className={styles.card__img}>
                  <img
                    src='https://via.placeholder.com/300.png/09f/fff'
                    alt='1'
                  />
                </div>

                <div className={styles.card__content}>
                  <Typography component='h5'>
                    {item.name}
                  </Typography>
                  <Typography variant='subtext'>
                    {item.name}
                  </Typography>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContentLinks;
