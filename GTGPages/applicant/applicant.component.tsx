import { FC } from "react";
import FormRegistrationApplicant from "../../components/forms/form-registration-applicant/form-registration-applicant.component";
import styles from "./styles.module.scss";

const ApplicantPage: FC = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <FormRegistrationApplicant />
    </div>
  </div>
);

export default ApplicantPage;
