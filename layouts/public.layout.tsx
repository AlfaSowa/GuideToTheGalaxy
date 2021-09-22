import { ReactNode } from 'react';
import Header from '../components/header/header.component';
import Container from '../components/lib/container/container.component';
import Sidebar from '../components/sidebar/sidebar.component';
import CustomText from '../components/ui/text/text.component';
import styles from './layout.module.scss';

interface PublicLayoutProps {
  children: ReactNode;
  title: string;
}

const PublicLayout = ({ children, title }: PublicLayoutProps): JSX.Element => (
  <>
    <Header />

    <Container>
      <Sidebar />

      <div className={styles.content}>
        <CustomText component='h1'>{title}</CustomText>

        <main>
          {children}
        </main>
      </div>
    </Container>
  </>
);

export default PublicLayout;
