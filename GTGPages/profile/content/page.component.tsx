import { useStore } from 'effector-react';
import { $pages } from '../../../models/pages';
import styles from './page.module.scss';

const ProfileContentPage = (): JSX.Element => {
  const pages = useStore($pages);
  console.log('pages', pages);

  return (
    <div>
      {pages.map((page) => (
        <>
          <div>{page.name}</div>

          {page.parts.map((part) => (
            <div className={styles.list}>
              <div>{part.name}</div>

              {part.themes.map((theme) => (
                <div className={styles.list}>
                  <div>{theme.name}</div>
                </div>
              ))}
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default ProfileContentPage;
