import Head from "next/head";

interface CustomHeadProps {
  title?: string;
}

function CustomHead({ title }: CustomHeadProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

CustomHead.defaultProps = {
  title: "GuideToTheGalaxy",
};

export default CustomHead;
