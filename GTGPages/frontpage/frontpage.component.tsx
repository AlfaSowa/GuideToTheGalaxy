import { useStore } from 'effector-react';
import GridItem from '../../components/lib/grid/item/item.component';
import GridList from '../../components/lib/grid/list/list.component';
import Card from '../../components/ui/cards/base/card-base.component';
import { $places } from '../../models/places';
import style from './frontpage.module.scss';

interface PlacesProps {
  placesData: any;
}

const Frontpage = ({ placesData }: PlacesProps): JSX.Element => {
  // const places = useStore<any[]>($places);

  return (
    <div className={style.main}>
      <GridList>
        {placesData.map((item) => (
          <GridItem>
            <Card item={item} />
          </GridItem>
        ))}
      </GridList>
    </div>
  );
};

export default Frontpage;
