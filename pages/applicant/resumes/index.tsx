/* eslint-disable @typescript-eslint/require-await */
import { GetServerSideProps } from "next";
import ApplicantResumesPage from "../../../GTGPages/applicant/resumes/applicant-resumes.component";
import { Resumes } from "../../../interfaces/resumes";
import PrivateLayout from "../../../layouts/private/private.layout";

interface IApplicantResumes {
  resumes: Resumes[];
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const resumes = [
    {
      id: 0,
      name: "Резюме 1",
    },
    {
      id: 1,
      name: "Резюме 2",
    },
    {
      id: 2,
      name: "Резюме 3",
    },
  ];

  if (!req?.cookies?.token) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {
      resumes,
    },
  };
};

const ApplicantResumes = ({ resumes }: IApplicantResumes) => (
  <PrivateLayout>
    <ApplicantResumesPage resumes={resumes} />
  </PrivateLayout>
);

export default ApplicantResumes;
