import CustomHead from '../../components/lib/head/head.component';
import PlacesPage from '../../components/places/page.component';
import PublicLayout from '../../layouts/public.layout';

export const getServerSideProps = async ({ query, res, req }): Promise<any> => {
  return {
    props: {},
  };
};

export const Places = (): JSX.Element => {
  return (
    <PublicLayout title="Places">
      <CustomHead title="места" />

      <PlacesPage />
    </PublicLayout>
  );
};

export default Places;
