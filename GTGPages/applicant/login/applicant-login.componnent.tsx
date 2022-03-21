import { FC } from "react";
import ApplicantLoginForm from "../../../components/forms/applicant/login/applicant-login.component";
import styles from "./styles.module.scss";

const ApplicantLoginPage: FC = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <ApplicantLoginForm />
    </div>
  </div>
);

export default ApplicantLoginPage;
