/* eslint-disable @typescript-eslint/require-await */
import { GetServerSideProps, NextPage } from "next";
import ProfilePage from "../../GTGPages/profile/profile.component";
import PrivateLayout from "../../layouts/private/private.layout";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!req?.cookies?.token) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
};

const Profile: NextPage = () => (
  <PrivateLayout>
    <ProfilePage />
  </PrivateLayout>
);

export default Profile;
