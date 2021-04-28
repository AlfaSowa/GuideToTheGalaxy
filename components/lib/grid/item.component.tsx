import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

interface GridItemProps {
  children: any;
  inRow?: 4 | 6;
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '8px',
    flex: '0 0 calc(100% / 2)',
    maxWidth: 'calc(100% / 2)',
  },
  inRow: {
    '&-6': {
      [theme.breakpoints.up('md')]: {
        flex: '0 0 calc(100% / 4)',
        maxWidth: 'calc(100% / 4)',
      },
      [theme.breakpoints.up('xl')]: {
        flex: '0 0 calc(100% / 6)',
        maxWidth: 'calc(100% / 6)',
      },
    },
    '&-4': {
      [theme.breakpoints.up('md')]: {
        flex: '0 0 calc(100% / 4)',
        maxWidth: 'calc(100% / 4)',
      },
    },
  },
}));

const GridItem = (props: GridItemProps): JSX.Element => {
  const { children, inRow, className } = props;
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.root, {
        [`${classes.inRow}-${inRow}`]: inRow,
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

GridItem.defaultProps = {
  inRow: false,
  className: false,
};

export default GridItem;
