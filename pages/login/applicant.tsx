import { NextPage } from "next";
import ApplicantLoginPage from "../../GTGPages/applicant/login/applicant-login";
import MinimalLayout from "../../layouts/minimal/minimal.layout";

const LoginApplicant: NextPage = () => (
  <MinimalLayout>
    <ApplicantLoginPage />
  </MinimalLayout>
);

export default LoginApplicant;
