import CustomHead from '../../../components/lib/head.component';
import ThemeList from '../../../components/themes/themes.component';
import PublicLayout from '../../../layouts/public.layout';

const Part = (): JSX.Element => {
	return (
		<PublicLayout title='Part'>
			<CustomHead title='Part' />

			<ThemeList />
		</PublicLayout>
	);
};

export default Part;
