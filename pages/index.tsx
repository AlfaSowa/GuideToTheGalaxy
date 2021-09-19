import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CustomHead from '../components/lib/head.component';
import Frontpage from '../GTGPages/frontpage/frontpage.component';
import PublicLayout from '../layouts/public.layout';
import { getAccount } from '../methods/account';
import { getPlaces } from '../methods/places';
import { $account } from '../models/account';
import { updatePlacesFx } from '../models/places';

// interface PlacesProps {
//   placesData: any;
// }

export const getServerSideProps = async ({ query, res, req }): Promise<any> => {
  return {
    props: {},
  };
};

const Home = (): JSX.Element => {
  const getPlacesData = async () => {
    const response = await getPlaces();
    updatePlacesFx(response);
  };

  useEffect(() => {
    getPlacesData();
  }, []);
  return (
    <PublicLayout title='Home'>
      <CustomHead title='главная' />

      <Frontpage />
    </PublicLayout>
  );
};

export default Home;
