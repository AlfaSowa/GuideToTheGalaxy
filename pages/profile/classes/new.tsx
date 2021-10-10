import { useStore } from 'effector-react';
import { useEffect } from 'react';
import ProfileClassesNew from '../../../GTGPages/profile/classes/new.component';
import PrivateLayout from '../../../layouts/private/private.layout';
import {
  $utils,
  getUtilsFx,
} from '../../../models/utils';

const ClassesNew = (): JSX.Element => {
  const utils = useStore($utils);

  useEffect(() => {
    if (!utils) {
      getUtilsFx();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PrivateLayout>
      <ProfileClassesNew />
    </PrivateLayout>
  );
};

export default ClassesNew;
