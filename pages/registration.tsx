import CustomHead from '../components/lib/head.component';
import RegistrationPage from '../GTGPages/registration/registration.component';
import PublicLayout from '../layouts/public.layout';

const Registration = (): JSX.Element => {
  return (
    <PublicLayout title="Registration">
      <CustomHead title="Регистрация" />

      <RegistrationPage />
    </PublicLayout>
  );
};

export default Registration;
