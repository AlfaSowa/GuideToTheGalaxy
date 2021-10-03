import CustomHead from '../../components/lib/head/head.component';
import ProfilePage from '../../GTGPages/profile/profile.component';
import PublicLayout from '../../layouts/public.layout';

const Profile = (): JSX.Element => {
  return (
    <PublicLayout title='ProfilePage'>
      <CustomHead title='ProfilePage' />

      <ProfilePage />
    </PublicLayout>
  );
};

export default Profile;
