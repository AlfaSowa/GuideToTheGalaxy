import CustomHead from '../../components/lib/head.component';
import PlacesPage from '../../components/places/page.component';
import PublicLayout from '../../layouts/public.layout';
import { $places, getPlaces } from '../../models/places';
import { getPlacesFetch } from '../../methods/places';
import { $account } from '../../models/account';
import { getAccount } from '../../methods/account';

export const getServerSideProps = async ({ query, res, req }): Promise<any> => {
  return {
    props: {
      initialState: {
        [$places.sid]:
          $places.getState().length > 0
            ? $places.getState()
            : await getPlacesFetch(),
      },
    },
  };
};

export const Places = ({ initialState }): JSX.Element => {
  getPlaces(initialState[$places.sid]);

  return (
    <PublicLayout title="Places">
      <CustomHead title="места" />

      <PlacesPage />
    </PublicLayout>
  );
};

export default Places;
