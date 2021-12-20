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

          {/* {page?.chapters.map((chapter) => (
            <div className={styles.list}>
              <div>{chapter.name}</div>
            </div>
          ))} */}
        </>
      ))}
    </div>
  );
};

export default ProfileContentPage;
