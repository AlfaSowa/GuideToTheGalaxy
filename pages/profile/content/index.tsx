import ProfileContentPage from '../../../GTGPages/profile/content/page.component';
import PrivateLayout from '../../../layouts/private/private.layout';

const Content = (): JSX.Element => {
  return (
    <PrivateLayout>
      <ProfileContentPage />
    </PrivateLayout>
  );
};

export default Content;
