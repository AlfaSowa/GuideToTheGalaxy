import { useRouter } from 'next/router';
import CustomHead from '../components/lib/head.component';
import Frontpage from '../GTGPages/frontpage/frontpage.component';
import PublicLayout from '../layouts/public.layout';
import { getAccount } from '../methods/account';
import { $account } from '../models/account';

// export const getServerSideProps = async ({ query, res, req }): Promise<any> => {
//   return {
//     props: {
//       initialState: {
//         [$account.sid]: $account.getState()
//           ? $account.getState()
//           : await getAccount(req.headers.cookie),
//       },
//     },
//   };
// };

const Home = (): JSX.Element => {
  return (
    <PublicLayout title="Home">
      <CustomHead title="главная" />

      <Frontpage />
    </PublicLayout>
  );
};

export default Home;
