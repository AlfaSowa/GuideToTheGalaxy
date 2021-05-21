import { useStore } from 'effector-react/ssr';
import { useRouter } from 'next/router';
import CustomHead from '../components/lib/head.component';
import PublicLayout from '../layouts/public.layout';
import { $account } from '../models/account';
import { app } from '../models/model';
import { $places } from '../models/places';
import { useScope } from '../models/useScope';

export const getServerSideProps = async ({ query, res, req }): Promise<any> => {
  return {
    props: {},
  };
};

const Home = () => {
  const router = useRouter();

  return (
    <PublicLayout title="Home">
      <CustomHead title="главная" />

      <button onClick={() => router.push('/places')}>places</button>
    </PublicLayout>
  );
};

export default Home;
