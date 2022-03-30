import { NextPage } from "next";
import ApplicantRegistrationPage from "../../GTGPages/applicant/registration/applicant-registration.component";
import MinimalLayout from "../../layouts/minimal/minimal.layout";

const AuthApplicant: NextPage = () => (
  <MinimalLayout>
    <ApplicantRegistrationPage />
  </MinimalLayout>
);

export default AuthApplicant;
