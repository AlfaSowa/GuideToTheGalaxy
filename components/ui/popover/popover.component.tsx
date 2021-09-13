import dynamic from 'next/dynamic';

const Popover = dynamic(
  () => import('./popoverComponent.component'),
  { ssr: false },
);

export default Popover;
