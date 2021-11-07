import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  useEffect,
  useState,
} from 'react';
import clsx from 'clsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '../../../components/ui/button/button.component';
import {
  $classes,
  getClassesDataFx,
} from '../../../models/classes';
import styles from './page.module.scss';
import { getClasses } from '../../../methods/classes';
import {
  Grid,
  GridItem,
} from '../../../components/lib/grid/grid.component';
import {
  ArmorEnum,
  WeaponEnum,
} from '../../../interfaces/classes';
import ProfileClassesCard from './card/card.component';

const ProfileClassesPage = (): JSX.Element => {
  const router = useRouter();
  const classes = useStore($classes);
  console.log('classes', classes);

  return (
    <div>
      <div className={styles.grid}>
        <Grid>
          {classes.map((item) => (
            <GridItem key={item._id}>
              <ProfileClassesCard item={item} />
            </GridItem>
          ))}
        </Grid>
      </div>

      <div>
        <Button onClick={() => router.push('classes/new')}>Добавить класс</Button>
      </div>

      <div>ProfileClassesPage</div>
    </div>
  );
};

export default ProfileClassesPage;
