import { ReactNode } from 'react';
import Header from '../components/header/header.component';
import Container from '../components/lib/container/container.component';
import Sidebar from '../components/sidebar/sidebar.component';
import styles from './layout.module.scss';

interface PublicLayoutProps {
  children: ReactNode;
  title: string;
}

const PublicLayout = ({ children, title }: PublicLayoutProps): JSX.Element => (
  <>
    <Header />

    <main>
      <Container>
        <Sidebar />

        <div className={styles.content}>{children}</div>
      </Container>
    </main>
  </>
);

export default PublicLayout;
