import CustomHead from '../../../components/lib/head.component';
import ContentLinks from '../../../components/content-links/content-links.component';
import PublicLayout from '../../../layouts/public.layout';

const Part = (): JSX.Element => {
  return (
    <PublicLayout title='Part'>
      <CustomHead title='Part' />

      <ContentLinks />
    </PublicLayout>
  );
};

export default Part;
