import { NextPage } from "next";
import ApplicantLoginPage from "../../GTGPages/applicant/login/applicant-login.componnent";
import MinimalLayout from "../../layouts/minimal/minimal.layout";

const Applicant: NextPage = (): JSX.Element => (
  <MinimalLayout>
    <ApplicantLoginPage />
  </MinimalLayout>
);

export default Applicant;
