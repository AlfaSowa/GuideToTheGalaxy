import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Axios } from '../../utils/axios';
import { places } from './data';

interface PlacesItemProps {
  item: any;
}

const useStyles = makeStyles((theme) => ({
  root: { display: 'block' },
}));

const PlacesItem = ({ item }): JSX.Element => {
  const classes = useStyles();

  console.log(item);

  return (
    <div>
      <div>{item?.name}</div>
    </div>
  );
};

export default PlacesItem;
