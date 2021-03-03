import Head from 'next/head';
import CustomHead from '../components/lib/head/head.component';
import PublicLayout from '../layouts/public.layout';

const Home = () => {
  return (
    <PublicLayout title="Home">
      <CustomHead title="главная" />

      <div>123</div>
    </PublicLayout>
  );
};

export default Home;
