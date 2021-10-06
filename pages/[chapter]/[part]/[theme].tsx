import {
  useEffect,
  useState,
} from 'react';
import Error from 'next/error';
import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import CustomHead from '../../../components/lib/head/head.component';
import PublicLayout from '../../../layouts/public.layout';
import { $pages } from '../../../models/pages';

const Theme = (): JSX.Element => {
  const router = useRouter();
  const [theme, setTheme] = useState(null);
  const pages = useStore($pages);

  useEffect(() => {
    if (pages.length > 0) {
      const chapter = pages.find((page) => page.alias === router?.query?.chapter);
      const part = chapter.parts.find((item) => item.alias === router?.query?.part);
      setTheme(part.themes.find((item) => item.alias === router?.query?.theme));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, pages]);

  return (
    <>
      {theme && (
        <PublicLayout title={theme?.name}>
          <CustomHead title='Theme' />

          <div>Theme</div>
        </PublicLayout>
      )}
      {!theme && <Error statusCode={404} />}
    </>
  );
};

export default Theme;
