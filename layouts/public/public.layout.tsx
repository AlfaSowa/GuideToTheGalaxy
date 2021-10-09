import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import {
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
  const router = useRouter();
  const pages = useStore($pages);
  const [dataArray, setDataArray] = useState<any>();

  const getList = () => {
    const chapter = pages?.find((page) => page.alias === router?.query?.chapter);
    if (chapter) {
      const part = chapter?.parts.find((item) => item.alias === router?.query?.part);

      if (router?.query?.theme) {
        return part?.themes.find((item) => item.alias === router?.query?.theme);
      }
      if (router?.query?.part) {
        return part;
      }
      if (router?.query?.chapter) {
        return chapter;
      }
    }

    return null;
  };

  useEffect(() => {
    if (pages.length > 0) {
      setDataArray(getList());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, pages]);

  return (
    <>
      <Header />

      <Container>
        <Sidebar>
          <UserNavigation />
        </Sidebar>

        <div className={styles.content}>
          {pages.length > 0 && (
            <>
              {dataArray && <Typography component='h1'>{dataArray?.name}</Typography>}

              {!dataArray && title && <Typography component='h1'>{title}</Typography>}

              <main>{children}</main>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

PublicLayout.defaultProps = {
  title: null,
};

export default PublicLayout;
