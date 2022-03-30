import { GetServerSideProps, NextPage } from "next";
import ApplicantResumesPage from "../../../GTGPages/applicant/resumes/applicant-resumes.component";

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

const ApplicantResumes: NextPage = (): JSX.Element => (
  <div>
    <ApplicantResumesPage />
  </div>
);

export default ApplicantResumes;
