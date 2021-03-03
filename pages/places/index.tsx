import { useRouter } from 'next/router';
import CustomHead from '../../components/lib/head/head.component';
import PlacesList from '../../components/places/list.component';
import PublicLayout from '../../layouts/public.layout';

export const getServerSideProps = async ({ query, res, req }): Promise<any> => {
  return {
    props: {},
  };
};

export const Places = (): JSX.Element => {
  const router = useRouter();
  return (
    <PublicLayout title="Places">
      <CustomHead title="места" />

      <PlacesList />
    </PublicLayout>
  );
};

export default Places;
