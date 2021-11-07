import { useStore } from 'effector-react';
import { useEffect } from 'react';
import ProfileClassesPage from '../../../GTGPages/profile/classes/page.component';
import PrivateLayout from '../../../layouts/private/private.layout';
import { getClasses } from '../../../methods/classes';
import {
  $classes,
  getClassesDataFx,
} from '../../../models/classes';

const Classes = (): JSX.Element => {
  const classes = useStore($classes);

  useEffect(() => {
    if (!classes.length) {
      getClassesDataFx();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PrivateLayout>
      <ProfileClassesPage />
    </PrivateLayout>
  );
};

export default Classes;
