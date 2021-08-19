import CustomHead from '../components/lib/head.component';
import Loginpage from '../GTGPages/login/login.component';
import PublicLayout from '../layouts/public.layout';

const Login = (): JSX.Element => {
  return (
    <>
      <CustomHead title="Вход" />

      <Loginpage />
    </>
  );
};

export default Login;
