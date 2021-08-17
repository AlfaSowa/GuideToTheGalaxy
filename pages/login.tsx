import CustomHead from '../components/lib/head.component';
import Loginpage from '../GTGPages/login/login.component';
import PublicLayout from '../layouts/public.layout';

const Login = (): JSX.Element => {
  return (
    <PublicLayout title="Login">
      <CustomHead title="Вход" />

      <Loginpage />
    </PublicLayout>
  );
};

export default Login;
