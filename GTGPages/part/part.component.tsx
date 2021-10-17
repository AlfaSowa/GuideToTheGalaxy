import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ContentLinks from '../../components/content-links/content-links.component';
import { $pages } from '../../models/pages';

const PartPage = (): JSX.Element => {
  const pages = useStore($pages);
  const router = useRouter();

  return (
    <div>
      <ContentLinks links={pages.find((page) => page.alias === router.query.part)?.chapters} />
    </div>
  );
};

export default PartPage;
