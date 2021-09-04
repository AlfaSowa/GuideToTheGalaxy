import { useStore } from 'effector-react';
import { $account, getAccountFx } from '../../models/account';
import ProfilePage from '../../GTGPages/profile/profile.component';
import CustomHead from '../../components/lib/head.component';
import PublicLayout from '../../layouts/public.layout';

interface ProfileProps {
  account: any;
}

export const getServerSideProps = async ({ req }) => {
  const account = await getAccountFx(req.headers.cookie);

  if (!account) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: account,
  };
};

const Profile = ({ account }: ProfileProps): JSX.Element => {
  console.log('account', account);

  return (
    <PublicLayout title="Profile">
      <CustomHead title="Профиль" />

      <ProfilePage />
    </PublicLayout>
  );
};

export default Profile;
