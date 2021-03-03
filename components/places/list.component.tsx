import { places } from './data';
import Place from './item/item.component';

const PlacesList = (): JSX.Element => {
  return (
    <div>
      <div>
        {places.map((i) => (
          <Place item={i} />
        ))}
      </div>
    </div>
  );
};

export default PlacesList;
