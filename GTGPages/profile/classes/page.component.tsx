import { useRouter } from 'next/router';
import Button from '../../../components/ui/button/button.component';

const ProfileClassesPage = (): JSX.Element => {
  const router = useRouter();
  return (
    <div>
      <div>
        <Button onClick={() => router.push('classes/new')}>Добавить класс</Button>
      </div>

      <div>ProfileClassesPage</div>
    </div>
  );
};

export default ProfileClassesPage;
