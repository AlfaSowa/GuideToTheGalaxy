import CustomHead from '../../components/lib/head/head.component';
import PublicLayout from '../../layouts/public.layout';
import FormLogin from '../../components/forms/form-login/form-login.component';

const Login = (): JSX.Element => {
	return (
		<PublicLayout title='Логин'>
			<CustomHead title='Логин' />

			<FormLogin />
		</PublicLayout>
	);
};

export default Login;
