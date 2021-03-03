import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import CustomHead from '../../components/lib/head/head.component';
import PublicLayout from '../../layouts/public.layout';

export const getServerSideProps = async ({ query, res, req }): Promise<any> => {
  return {
    props: {},
  };
};

export const PlacesItem = (): JSX.Element => {
  const router = useRouter();

  return (
    <PublicLayout title="PlacesItem">
      <CustomHead title="Место" />

      <button onClick={() => router.push('/places/qweqwe')}>qweqwe</button>
    </PublicLayout>
  );
};

export default PlacesItem;
