import { NextPage } from "next";
import Frontpage from "../GTGPages/frontpage/frontpage.component";
import PublicLayout from "../layouts/public/public.layout";

const Home: NextPage = (): JSX.Element => (
  <PublicLayout>
    <Frontpage />
  </PublicLayout>
);

export default Home;
