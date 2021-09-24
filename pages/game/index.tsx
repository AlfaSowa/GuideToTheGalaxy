import CustomHead from '../../components/lib/head.component';
import PartsList from '../../components/parts/parts.component';
import PublicLayout from '../../layouts/public.layout';

const Game = (): JSX.Element => {
	return (
		<PublicLayout title='Game'>
			<CustomHead title='Game' />

			<PartsList />
		</PublicLayout>
	);
};

export default Game;
