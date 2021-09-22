import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import CustomHead from '../components/lib/head.component';
import PublicLayout from '../layouts/public.layout';
import { $pages } from '../models/pages';

const Game = (): JSX.Element => {
  const router = useRouter();
  const pages = useStore($pages);
  const titleRef = useRef(pages.find((page) => page.link === router.pathname).name);

  return (
    <PublicLayout title={titleRef.current}>
      <CustomHead title={titleRef.current} />

      <div>Game</div>
    </PublicLayout>
  );
};

export default Game;
