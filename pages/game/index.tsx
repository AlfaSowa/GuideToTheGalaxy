import CustomHead from '../../components/lib/head.component';
import ContentLinks from '../../components/content-links/content-links.component';
import PublicLayout from '../../layouts/public.layout';

const Game = (): JSX.Element => {
  return (
    <PublicLayout title='Game'>
      <CustomHead title='Game' />

      <ContentLinks />
    </PublicLayout>
  );
};

export default Game;
