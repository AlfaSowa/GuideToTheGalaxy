import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import {
  useEffect,
  useState,
} from 'react';
import Error from 'next/error';
import ContentLinks from '../../../components/content-links/content-links.component';
import CustomHead from '../../../components/lib/head/head.component';
import PublicLayout from '../../../layouts/public.layout';
import { $pages } from '../../../models/pages';

const Part = (): JSX.Element => {
  const router = useRouter();
  const pages = useStore($pages);
  const [part, setPart] = useState(null);

  useEffect(() => {
    if (pages.length > 0) {
      const chapter = pages.find((page) => page.alias === router?.query?.chapter);
      setPart(chapter.parts.find((item) => item.alias === router?.query?.part));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, pages]);

  return (
    <>
      {part && (
        <PublicLayout title={part?.name}>
          <CustomHead title='Part' />

          <ContentLinks />
        </PublicLayout>
      )}
      {!part && <Error statusCode={404} />}
    </>
  );
};

export default Part;
