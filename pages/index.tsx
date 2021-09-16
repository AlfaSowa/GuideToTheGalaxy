import { useRouter } from 'next/router';
import CustomHead from '../components/lib/head.component';
import Frontpage from '../GTGPages/frontpage/frontpage.component';
import PublicLayout from '../layouts/public.layout';
import { getAccount } from '../methods/account';
import { getPlacesFetch } from '../methods/places';
import { $account } from '../models/account';

interface PlacesProps {
  placesData: any;
}

export const getServerSideProps = async ({ query, res, req }): Promise<any> => {
  const placesData = await getPlacesFetch();

  return {
    props: {
      initialState: {
        [$account.sid]: $account.getState()
          ? $account.getState()
          : await getAccount(req.headers.cookie),
      },
      placesData,
    },
  };
};

const Home = ({ placesData }: PlacesProps): JSX.Element => {
  return (
    <PublicLayout title="Home">
      <CustomHead title="главная" />

      <Frontpage placesData={placesData} />
    </PublicLayout>
  );
};

export default Home;
