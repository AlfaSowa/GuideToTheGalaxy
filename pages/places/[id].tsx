import { useStore } from 'effector-react/ssr';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CustomHead from '../../components/lib/head.component';
import PlacesItem from '../../components/places/item.component';
import PublicLayout from '../../layouts/public.layout';
import { getPlacesFetch } from '../../methods/places';
import { $places, getPlaces } from '../../models/places';
import { Axios } from '../../utils/axios';

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

export const PlacesId = ({ initialState }): JSX.Element => {
  getPlaces(initialState[$places.sid]);

  const router = useRouter();
  const places = useStore<any[]>($places);
  const [item, seItem] = useState();

  useEffect(() => {
    seItem(places.find((i) => i.id === router.query.id));
  }, [router.query]);

  return (
    <PublicLayout title="PlacesItem">
      <CustomHead title="Место" />

      <PlacesItem item={item} />
    </PublicLayout>
  );
};

export default PlacesId;
