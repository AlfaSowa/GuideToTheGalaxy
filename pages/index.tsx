import { useStore } from 'effector-react';
import { NextPage } from 'next';
import CustomHead from '../components/lib/head/head.component';
import Frontpage from '../GTGPages/frontpage/frontpage.component';
import PublicLayout from '../layouts/public/public.layout';

export const getServerSideProps = async ({ query, res, req }): Promise<any> => {
  return {
    props: {},
  };
};

const Home: NextPage = (): JSX.Element => {
  return (
    <PublicLayout>
      <Frontpage />
    </PublicLayout>
  );
};

export default Home;
