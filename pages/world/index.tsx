import ContentLinks from '../../components/content-links/content-links.component';
import CustomHead from '../../components/lib/head.component';
import PublicLayout from '../../layouts/public.layout';

const World = (): JSX.Element => {
  return (
    <PublicLayout title='World'>
      <CustomHead title='World' />

      <ContentLinks />
    </PublicLayout>
  );
};

export default World;
