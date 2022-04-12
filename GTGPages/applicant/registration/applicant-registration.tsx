import { FC } from "react";
import ApplicantRegistrationForm from "../../../components/forms/applicant/registration/applicant-registration";
import styles from "./styles.module.scss";

const ApplicantRegistrationPage: FC = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <ApplicantRegistrationForm />
    </div>
  </div>
);

export default ApplicantRegistrationPage;
