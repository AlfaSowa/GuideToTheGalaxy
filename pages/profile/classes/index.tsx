/* eslint-disable @typescript-eslint/require-await */
import { GetServerSideProps, NextPage } from "next";
import PrivateLayout from "../../../layouts/private/private.layout";

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

const ProfileClasses: NextPage = () => (
  <PrivateLayout title="Классы">
    <div>
      <div>Классы</div>
    </div>
  </PrivateLayout>
);

export default ProfileClasses;
