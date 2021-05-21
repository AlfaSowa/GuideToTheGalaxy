import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  inner: {
    display: 'block',
    cursor: 'pointer',
    background: 'var(--color-main)',
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative',
  },
  header: {},
  content: {
    padding: '8px',
    height: '160px',
  },
  description: {
    maxHeight: 'calc(0.7rem * 4)',
    overflow: 'hidden',
    '& p': {
      fontSize: '0.7rem',
    },
  },
  title: {
    fontSize: '0.875rem',
    fontWeight: 600,
    '& span': {
      whiteSpace: 'nowrap',
    },
  },
  titleBox: {
    overflow: 'hidden',
  },
  img: {
    height: '100px',
    '& img': {
      objectFit: 'cover',
    },
  },
}));

const PlacesCard = ({ item }): JSX.Element => {
  const classes = useStyles();

  return (
    <Link href={`/places/${item.id}`}>
      <a className={classes.inner}>
        <div className={classes.img}>
          {item?.images?.length > 0 && (
            <img src={item?.images[0]?.url} alt="alt" />
          )}
        </div>

        <div className={classes.content}>
          <div className={classes.title}>
            <div className={classes.titleBox}>
              <span>{item.name}</span>
            </div>
          </div>

          <div className={classes.description}>
            <p>{item?.description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PlacesCard;
