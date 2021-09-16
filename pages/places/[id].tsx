import places from '../../components/fakeAPI/places';
import CustomHead from '../../components/lib/head.component';
import PlaceId from '../../GTGPages/places/places.component';
import PublicLayout from '../../layouts/public.layout';

interface PlaceIdProps {
  item: TypeCard;
}

type TypeCard = {
  id: number;
  description: string;
  name: string;
  country: string;
  img: string;
};

export const getServerSideProps = async ({ query }): Promise<any> => {
  const item = places[query?.id];

  return {
    props: { item },
  };
};

const PlaceIdPage = ({ item }: PlaceIdProps): JSX.Element => {
  return (
    <PublicLayout title={item.name}>
      <CustomHead title={item.name} />

      <PlaceId item={item} />
    </PublicLayout>
  );
};

export default PlaceIdPage;
