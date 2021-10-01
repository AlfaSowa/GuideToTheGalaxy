import FormRegistration from '../../components/forms/form-registration/form-registration.component';
import CustomHead from '../../components/lib/head/head.component';
import PublicLayout from '../../layouts/public.layout';

const Registration = (): JSX.Element => {
	return (
		<PublicLayout title='Регистрация'>
			<CustomHead title='Регистрация' />

			<FormRegistration />
		</PublicLayout>
	);
};

export default Registration;
