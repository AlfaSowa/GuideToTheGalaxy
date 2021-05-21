import { createStyles, makeStyles } from '@material-ui/core';
import { ReactNode } from 'react';
import Header from '../components/header/header.component';
import Container from '../components/lib/container.component';
import Sidebar from '../components/sidebar/sidebar.component';

interface PublicLayoutProps {
  children: ReactNode;
  title: string;
}

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
  },
  content: {
    flex: '1',
    background: '#aa8b8b',
    height: 'calc(100vh - 45px)',
    maxHeight: 'calc(100vh - 45px)',
    overflowY: 'auto',
  },
}));

const PublicLayout = ({ children, title }: PublicLayoutProps): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Header />

      <main>
        <Container>
          {/* <Sidebar title={title} /> */}

          <div className={classes.content}>{children}</div>
        </Container>
      </main>
    </>
  );
};

export default PublicLayout;
