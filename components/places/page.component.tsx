// import { places } from './data';
import PlacesCard from './card.component';
import GridList from '../lib/grid/list.component';
import GridItem from '../lib/grid/item.component';
import { makeStyles } from '@material-ui/core';
import { Axios } from '../../utils/axios';
import { useEffect } from 'react';
import { $places } from '../../models/places';
import { useStore } from 'effector-react/ssr';

const useStyles = makeStyles((theme) => ({
  mediaQuery: {},
}));

const PlacesPage = (): JSX.Element => {
  const classes = useStyles();
  const places = useStore<any[]>($places);

  return (
    <div>
      <GridList>
        {places.map((i, idx) => (
          <GridItem inRow={6} className={classes.mediaQuery} key={idx}>
            <PlacesCard item={i} />
          </GridItem>
        ))}
      </GridList>
    </div>
  );
};

export default PlacesPage;
