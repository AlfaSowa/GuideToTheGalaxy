import { NextPage } from "next";
import ApplicantPage from "../../GTGPages/applicant/applicant.component";
import PublicLayout from "../../layouts/public/public.layout";

const Applicant: NextPage = (): JSX.Element => (
  <PublicLayout>
    <ApplicantPage />
  </PublicLayout>
);

export default Applicant;
