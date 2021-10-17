import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import {
  memo,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import Header from '../../components/header/header.component';
import Container from '../../components/lib/container/container.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import UserNavigation from '../../components/sidebar/user/navigation.component';
import Typography from '../../components/ui/typography/typography.component';
import { $pages } from '../../models/pages';
import styles from './public.module.scss';

interface PublicLayoutProps {
  children: ReactNode;
  title?: string
}

const PublicLayout = ({ children, title }: PublicLayoutProps): JSX.Element => {
  return (
    <>
      <Header />

      <Container>
        <Sidebar>
          <UserNavigation />
        </Sidebar>

        <div className={styles.content}>
          {title && <Typography component='h1'>{title}</Typography>}

          <main>{children}</main>
        </div>
      </Container>
    </>
  );
};

PublicLayout.defaultProps = {
  title: null,
};

export default PublicLayout;
