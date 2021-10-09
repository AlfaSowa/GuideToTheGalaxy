import { ReactNode } from 'react';
import Header from '../../components/header/header.component';
import Container from '../../components/lib/container/container.component';
import AdminContent from '../../components/sidebar/admin/content.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import styles from './private.module.scss';

interface PrivateLayoutProps {
  children: ReactNode
}

const PrivateLayout = ({ children }:PrivateLayoutProps): JSX.Element => {
  return (
    <>
      <Header />

      <Container>
        <Sidebar>
          <AdminContent />
        </Sidebar>

        <div className={styles.content}>
          <main>{children}</main>
        </div>
      </Container>
    </>
  );
};

export default PrivateLayout;
