import { makeStyles } from '@material-ui/core';
import GridItem from './item.component';

interface GridProps {
  children: any;
}

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const GridList = ({ children }: GridProps): JSX.Element => {
  const classes = useStyles();

  return <div className={classes.grid}>{children}</div>;
};

export default GridList;
