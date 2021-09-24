import CustomHead from '../../components/lib/head.component';
import PartsList from '../../components/parts/parts.component';
import PublicLayout from '../../layouts/public.layout';

const Adventures = (): JSX.Element => {
	return (
		<PublicLayout title='Adventures'>
			<CustomHead title='Adventures' />

			<PartsList />
		</PublicLayout>
	);
};

export default Adventures;
