import { NextPage } from "next";
import Frontpage from "../GTGPages/frontpage/frontpage";
import PublicLayout from "../layouts/public/public.layout";

const Home: NextPage = () => (
  <PublicLayout padding title="Главная">
    <Frontpage />
  </PublicLayout>
);

export default Home;
