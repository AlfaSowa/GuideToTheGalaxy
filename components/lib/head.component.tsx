import Head from 'next/head';

interface CustomHeadProps {
  title?: string;
}

const CustomHead = ({ title }: CustomHeadProps) => (
  <Head>
    <title>{title}</title>
  </Head>
);

CustomHead.defaultProps = {
  title: 'GuideToTheGalaxy',
};

export default CustomHead;
