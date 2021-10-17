import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import PartPage from '../GTGPages/part/part.component';
import PublicLayout from '../layouts/public/public.layout';
import { $pages } from '../models/pages';

const Part = (): JSX.Element => {
  const pages = useStore($pages);
  const router = useRouter();

  return (
    <PublicLayout title={pages.find((page) => page.alias === router.query.part)?.name}>
      {pages.length > 0 && (
        <>
          {pages.find((page) => page.alias === router.query.part) && <PartPage />}
          {!pages.find((page) => page.alias === router.query.part) && <Error statusCode={404} />}
        </>
      )}
    </PublicLayout>
  );
};

export default Part;
