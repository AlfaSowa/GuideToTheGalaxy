import { useStore } from 'effector-react';
import Link from 'next/link';
import { $classes } from '../../models/classes';
import styles from './classes.module.scss';

const ClassesPage = (): JSX.Element => {
  const classes = useStore($classes);
  console.log('classes', classes);

  return (
    <div className={styles.list}>
      {classes.map((item) => (
        <div className={styles.list__item} key={item._id}>
          <Link href={`/classes/${item.alias}`}>
            <a className={styles.card}>
              {item.name}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ClassesPage;
