import CustomHead from '../../../components/lib/head.component';
import PublicLayout from '../../../layouts/public.layout';

const Theme = (): JSX.Element => {
	return (
		<PublicLayout title='Theme'>
			<CustomHead title='Theme' />

			<div>Theme</div>
		</PublicLayout>
	);
};

export default Theme;
