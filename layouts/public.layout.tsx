import { ReactNode } from 'react';
import Header from '../components/header/header.component';
import Container from '../components/lib/container/container.component';
import Sidebar from '../components/sidebar/sidebar.component';
import styles from './layout.module.scss';

interface PublicLayoutProps {
  children: ReactNode;
  title: string;
}

const PublicLayout = ({ children, title }: PublicLayoutProps): JSX.Element => {
  return (
    <>
      <Header />

      <main>
        <Container className={styles.layout}>
          <Sidebar title={title} />

          <div className={styles.layout__content}>{children}</div>
        </Container>
      </main>
    </>
  );
};

export default PublicLayout;
