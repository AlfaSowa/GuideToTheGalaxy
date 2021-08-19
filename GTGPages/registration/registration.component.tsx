import FormRegistration from '../../components/forms/form-registration/form-registration.component';
import style from './registration.module.scss';

const RegistrationPage = (): JSX.Element => {
  return (
    <div className={style.registration}>
      <FormRegistration />
    </div>
  );
};

export default RegistrationPage;
