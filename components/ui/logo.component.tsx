import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: '1.2rem',
    color: 'var(--color-main)',
  },
}));

const Logo = (): JSX.Element => {
  const classes = useStyles();
  return <div className={classes.logo}>GuideToTheGalaxy</div>;
};

export default Logo;
