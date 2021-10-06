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

const ContentLinks = (): JSX.Element => {
  const pages = useStore($pages);
  const router = useRouter();
  const [linksArray, setLinksArray] = useState([]);

  const getLinks = () => {
    const chapter = pages?.find((page) => page.alias === router?.query?.chapter);

    if (chapter) {
      if (router?.query?.part) {
        const part = chapter?.parts.find((item) => item.alias === router?.query?.part);

        if (part) {
          return part?.themes;
        }

        return [];
      }

      return chapter?.parts;
    }

    return [];
  };

  const getUrl = (elem) => {
    if (router?.query?.part) {
      return `/${router?.query?.chapter}/${router?.query?.part}/${elem.alias}`;
    }
    return `/${router?.query?.chapter}/${elem.alias}`;
  };

  useEffect(() => {
    if (pages.length > 0) {
      setLinksArray(getLinks());
    }
  }, [router, pages]);

  if (linksArray.length > 0) {
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
  }

  return <Error statusCode={404} />;
};

export default ContentLinks;
