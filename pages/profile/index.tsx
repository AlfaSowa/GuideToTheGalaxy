import PrivateLayout from '../../layouts/private/private.layout';

export const getServerSideProps = ({ req }) => {
  if (!req?.cookies?.token) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {},
  };
};

const Profile = (): JSX.Element => {
  return (
    <PrivateLayout>
      <div>Profile</div>
    </PrivateLayout>
  );
};

export default Profile;
