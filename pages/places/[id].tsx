import CustomHead from '../../components/lib/head/head.component';
import PlacesItem from '../../components/places/item.component';
import PublicLayout from '../../layouts/public.layout';
import { Axios } from '../../utils/axios';

interface PlacesIdProps {
  item?: any;
}

export const getServerSideProps = async ({ query, res, req }): Promise<any> => {
  const response = await Axios.get('product/get', {
    params: {
      id: query.id,
    },
  });

  if (response.status === 200) {
    return {
      props: {
        item: response.data,
      },
    };
  }

  return {
    props: {},
  };
};

export const PlacesId = ({ item }: PlacesIdProps): JSX.Element => {
  return (
    <PublicLayout title="PlacesItem">
      <CustomHead title="Место" />

      <PlacesItem item={item} />
    </PublicLayout>
  );
};

PlacesId.defaultProps = {
  item: null,
};

export default PlacesId;
