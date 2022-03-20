import { FC } from "react";
import ApplicantRegistrationForm from "../../components/forms/applicant/registration/applicant-registration.component";
import styles from "./styles.module.scss";

const ApplicantPage: FC = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <ApplicantRegistrationForm />
    </div>
  </div>
);

export default ApplicantPage;
