import { useStore } from 'effector-react';
import CustomHead from '../components/lib/head.component';
import Frontpage from '../GTGPages/frontpage/frontpage.component';
import PublicLayout from '../layouts/public.layout';

export const getServerSideProps = async ({ query, res, req }): Promise<any> => {
	return {
		props: {},
	};
};

const Home = (): JSX.Element => {
	return (
		<PublicLayout title='test'>
			<CustomHead />

			<Frontpage />
		</PublicLayout>
	);
};

export default Home;
