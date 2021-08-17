import CustomHead from '../components/lib/head.component';
import Registrationpage from '../GTGPages/registration/registration.component';
import PublicLayout from '../layouts/public.layout';

const Registration = (): JSX.Element => {
  return (
    <PublicLayout title="Registration">
      <CustomHead title="Регистрация" />

      <Registrationpage />
    </PublicLayout>
  );
};

export default Registration;
