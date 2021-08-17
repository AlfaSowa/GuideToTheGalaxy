import { useStore } from 'effector-react/ssr';
import { $account } from '../../models/account';
import NoAuth from './noAuth.component';

const MiniProfile = (): JSX.Element => {
  const account = useStore($account);

  return (
    <div>
      {account && (
        <div>
          <div>1111111</div>
        </div>
      )}

      {!account && <NoAuth />}
    </div>
  );
};

export default MiniProfile;
