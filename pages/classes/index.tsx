/* eslint-disable react-hooks/exhaustive-deps */
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import ClassesPage from '../../GTGPages/classes/classes.component';
import PublicLayout from '../../layouts/public/public.layout';
import {
  $classes,
  getClassesDataFx,
} from '../../models/classes';

const Classes = (): JSX.Element => {
  const classes = useStore($classes);

  useEffect(() => {
    if (!classes.length) {
      getClassesDataFx();
    }
  }, []);

  return (
    <PublicLayout title='Классы'>
      {classes.length > 0 && <ClassesPage />}
    </PublicLayout>
  );
};

export default Classes;
