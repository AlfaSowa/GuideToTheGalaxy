// import { places } from './data';
import PlacesCard from './card.component';
import GridList from '../lib/grid/list.component';
import GridItem from '../lib/grid/item.component';
import { makeStyles } from '@material-ui/core';
import { Axios } from '../../utils/axios';
import { useEffect, useMemo, useState } from 'react';
import { createEvent, createStore } from 'effector';
import { places as placesData, changed } from '../../models/places';
import { useStore } from 'effector-react';

const useStyles = makeStyles((theme) => ({
  mediaQuery: {},
}));

const PlacesPage = (): JSX.Element => {
  const classes = useStyles();
  const places = useStore<any[]>(placesData);

  const fetchData = async () => {
    console.log('places', places);
    const response = await Axios.get('product/get/list', {
      params: {
        search: null,
        storeId: null,
        storeAlias: null,
        catalogCategoryId: null,
        catalogCategoryAlias: null,
        pageSize: null,
        page: null,
        filters: null,
        sortType: null,
        sortOrderType: null,
      },
    });

    if (response.status === 200) {
      changed(response?.data?.data);
    }
  };

  useEffect(() => {
    if (places.length === 0) {
      fetchData();
    }
  }, []);

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
