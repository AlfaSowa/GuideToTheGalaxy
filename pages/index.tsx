import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import {
  useEffect,
  useRef,
} from 'react';
import CustomHead from '../components/lib/head.component';
import Frontpage from '../GTGPages/frontpage/frontpage.component';
import PublicLayout from '../layouts/public.layout';
import { getAccount } from '../methods/account';
import { getPlaces } from '../methods/places';
import { $account } from '../models/account';
import { $pages } from '../models/pages';
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
  const router = useRouter();
  const pages = useStore($pages);
  const titleRef = useRef(pages.find((page) => page.link === router.pathname).name);

  return (
    <PublicLayout title={titleRef.current}>
      <CustomHead title={titleRef.current} />

      <Frontpage />
    </PublicLayout>
  );
};

export default Home;
