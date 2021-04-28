import { useStore } from 'effector-react';
import Head from 'next/head';
import CustomHead from '../components/lib/head/head.component';
import PublicLayout from '../layouts/public.layout';
import { places as placesData, changed } from '../models/places';

// export const getServerSideProps = () => {
//   if (true) {
//     return {
//       redirect: {
//         destination: '/places',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

const Home = () => {
  const places = useStore(placesData);

  return (
    <PublicLayout title="Home">
      <CustomHead title="главная" />

      <div>123</div>
    </PublicLayout>
  );
};

export default Home;
