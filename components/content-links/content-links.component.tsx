/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import {
  useEffect,
  useState,
} from 'react';
import {
  Chapter,
  Part,
} from '../../interfaces/chapters';
import { $pages } from '../../models/pages';
import styles from './content-links.module.scss';
import Typography from '../ui/typography/typography.component';

const ContentLinks = (): JSX.Element => {
  const pages = useStore($pages);
  const router = useRouter();
  const [linksArray, setLinksArray] = useState([]);

  const getUrl = (elem) => {
    if (router?.query?.part) {
      return `/${router?.query?.chapter}/${router?.query?.part}/${elem.alias}`;
    }
    return `/${router?.query?.chapter}/${elem.alias}`;
  };

  useEffect(() => {
    if (pages.length > 0) {
      if (router?.query?.chapter) {
        const pageData = pages.find((page) => page.alias === router?.query?.chapter);
        setLinksArray(pageData.parts);

        if (router?.query?.part) {
          const partData = pageData.parts.find((part) => part.alias === router?.query?.part);
          setLinksArray(partData.themes);
        }
      }
    }
  }, [pages]);

  return (
    <div>
      <div className={styles.list}>
        {linksArray.map((item) => (
          <div className={styles.list__item}>
            <Link href={getUrl(item)} key={item.alias}>
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
    </div>
  );
};

export default ContentLinks;
