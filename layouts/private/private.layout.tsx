import { ReactNode } from 'react';
import Header from '../../components/header/header.component';
import Container from '../../components/lib/container/container.component';
import AdminContent from '../../components/sidebar/admin/content.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import MainBlock from '../../components/ui/main/main.component';
import styles from './private.module.scss';

interface PrivateLayoutProps {
  children: ReactNode
}

const PrivateLayout = ({ children }:PrivateLayoutProps): JSX.Element => {
  return (
    <>
      <Header />

      {/* <Sidebar>
          <AdminContent />
        </Sidebar> */}

      <MainBlock noPadding>
        {children}
      </MainBlock>
    </>
  );
};

export default PrivateLayout;
