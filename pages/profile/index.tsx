import { useStore } from 'effector-react';
import { $account, getAccountFx } from '../../models/account';
import ProfilePage from '../../GTGPages/profile/profile.component';
import CustomHead from '../../components/lib/head.component';
import PublicLayout from '../../layouts/public.layout';
import router from 'next/router';

export const getServerSideProps = async ({ req }) => {
  const acc = await getAccountFx(req.headers.cookie);

  if (!acc) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: acc,
  };
};

const Profile = (): JSX.Element => {
  return (
    <PublicLayout title="Profile">
      <CustomHead title="Профиль" />

      <ProfilePage />
    </PublicLayout>
  );
};

export default Profile;
