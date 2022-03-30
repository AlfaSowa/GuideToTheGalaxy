import { GetServerSideProps, NextPage } from "next";
import ApplicantPage from "../../GTGPages/applicant/index/applicant.component";

// eslint-disable-next-line @typescript-eslint/require-await
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

const Applicant: NextPage = () => (
  <div>
    <ApplicantPage />
  </div>
);

export default Applicant;
