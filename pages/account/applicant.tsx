import { NextPage } from "next";
import ApplicantLoginPage from "../../GTGPages/applicant/applicant-login.componnent";
import MinimalLayout from "../../layouts/minimal/minimal.layout";

const ApplicantLogin: NextPage = (): JSX.Element => (
  <MinimalLayout>
    <ApplicantLoginPage />
  </MinimalLayout>
);

export default ApplicantLogin;
