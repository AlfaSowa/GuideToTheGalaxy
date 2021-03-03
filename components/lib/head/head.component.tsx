import Head from 'next/head';

interface CustomHeadProps {
  title?: string;
}

const CustomHead = ({ title = 'GuideToTheGalaxy' }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
export default CustomHead;
