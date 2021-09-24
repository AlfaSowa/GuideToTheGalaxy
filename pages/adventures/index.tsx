import CustomHead from '../../components/lib/head.component';
import ContentLinks from '../../components/content-links/content-links.component';
import PublicLayout from '../../layouts/public.layout';

const Adventures = (): JSX.Element => {
  return (
    <PublicLayout title='Adventures'>
      <CustomHead title='Adventures' />

      <ContentLinks />
    </PublicLayout>
  );
};

export default Adventures;
