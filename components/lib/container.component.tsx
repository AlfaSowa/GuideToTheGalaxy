import { makeStyles } from '@material-ui/core';

interface ContainerProps {
  children: any;
  className?: any;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0 16px',
  },
}));

const Container = ({ children, className }: ContainerProps) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};
export default Container;
