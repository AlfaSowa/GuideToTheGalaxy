import { useStore } from 'effector-react';
import {
  GetServerSideProps,
  NextPage,
} from 'next';
import ProfilePage from '../../GTGPages/profile/profile.component';
import PrivateLayout from '../../layouts/private/private.layout';
import {
  $account,
  fetchAccountDataFx,
} from '../../models/account';

export const getServerSideProps: GetServerSideProps = async ({ query, res, req }): Promise<any> => {
  if (!req?.cookies?.token) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {},
  };
};

const Profile: NextPage = (): JSX.Element => {
  return (
    <PrivateLayout>
      <ProfilePage />
    </PrivateLayout>
  );
};

export default Profile;
