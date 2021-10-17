/* eslint-disable react-hooks/exhaustive-deps */
import { useStore } from 'effector-react';
import { useEffect } from 'react';
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

  console.log('classes', classes);

  return (
    <PublicLayout title='Классы'>
      {classes.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </PublicLayout>
  );
};

export default Classes;
