import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Error from 'next/error';
import ClassPage from '../../GTGPages/classes/class/class.component';
import PublicLayout from '../../layouts/public/public.layout';
import {
  $classes,
  getClassesDataFx,
} from '../../models/classes';

const Class = (): JSX.Element => {
  const classes = useStore($classes);
  const router = useRouter();

  useEffect(() => {
    if (!classes.length) {
      getClassesDataFx();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PublicLayout title={classes.find((i) => i.alias === router.query.class)?.name}>
      {classes.length > 0 && (
        <>
          {classes.find((i) => i.alias === router.query.class) && <ClassPage item={classes.find((i) => i.alias === router.query.class)} />}
          {!classes.find((i) => i.alias === router.query.class) && <Error statusCode={404} />}
        </>
      )}
    </PublicLayout>
  );
};

export default Class;
