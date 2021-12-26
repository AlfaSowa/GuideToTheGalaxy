import clsx from 'clsx';
import { ReactNode } from 'react';
import Typography from '../typography/typography.component';
import styles from './main.module.scss';

interface MainBlockProps {
  children: ReactNode
  title?: string
  noPadding?: boolean
}

const MainBlock = ({ children, title, noPadding }:MainBlockProps): JSX.Element => {
  return (
    <main className={styles.root}>
      <div className={clsx(styles.inner, { [styles.padding]: !noPadding })}>
        {title && <Typography component='h1'>{title}</Typography>}
        {children}
      </div>
    </main>
  );
};

MainBlock.defaultProps = {
  title: null,
  noPadding: false,
};

export default MainBlock;
