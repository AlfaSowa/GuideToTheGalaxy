import { NextPage } from "next";
import ApplicantPage from "../../GTGPages/applicant/applicant.component";
import MinimalLayout from "../../layouts/minimal/minimal.layout";

const Applicant: NextPage = (): JSX.Element => (
  <MinimalLayout>
    <ApplicantPage />
  </MinimalLayout>
);

export default Applicant;
