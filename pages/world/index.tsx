import CustomHead from '../../components/lib/head.component';
import PartsList from '../../components/parts/parts.component';
import PublicLayout from '../../layouts/public.layout';

const World = (): JSX.Element => {
	return (
		<PublicLayout title='World'>
			<CustomHead title='World' />

			<PartsList />
		</PublicLayout>
	);
};

export default World;
