import clsx from 'clsx';
import { useStore } from 'effector-react';
import {
  ReactNode,
} from 'react';
import Header from '../../components/header/header.component';
import Container from '../../components/lib/container/container.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import UserNavigation from '../../components/sidebar/user/navigation.component';
import MainBlock from '../../components/ui/main/main.component';
import Typography from '../../components/ui/typography/typography.component';
// import { $sidebarAction } from '../../models/actions';
import styles from './public.module.scss';

interface PublicLayoutProps {
  children: ReactNode;
  title?: string
}

const PublicLayout = ({ children, title }: PublicLayoutProps): JSX.Element => {
  // const sidebarAction = useStore($sidebarAction);

  return (
    <>
      <Header />

      {/* <Sidebar>
        <UserNavigation />
      </Sidebar> */}

      <MainBlock title={title}>
        {children}
      </MainBlock>
    </>
  );
};

PublicLayout.defaultProps = {
  title: null,
};

export default PublicLayout;
