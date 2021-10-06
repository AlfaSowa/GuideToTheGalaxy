import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import {
  useEffect,
  useState,
} from 'react';
import ContentLinks from '../../components/content-links/content-links.component';
import CustomHead from '../../components/lib/head/head.component';
import PublicLayout from '../../layouts/public.layout';
import { $pages } from '../../models/pages';

const Chapter = (): JSX.Element => {
  const router = useRouter();
  const pages = useStore($pages);
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    if (pages.length > 0) {
      setChapter(pages.find((page) => page.alias === router?.query?.chapter));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.query?.chapter, pages]);

  return (
    <PublicLayout title={chapter?.name}>
      <CustomHead title='Chapter' />

      <ContentLinks />
    </PublicLayout>
  );
};

export default Chapter;
