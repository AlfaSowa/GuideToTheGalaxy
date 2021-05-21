import { useEvent, useStore } from 'effector-react';
import { useEffect } from 'react';
import { $account, tokenActionFx } from '../../models/account';
import NoAuth from './noAuth.component';

const MiniProfile = (): JSX.Element => {
  // const account = useStore($account);

  return (
    <div>
      {/* {account && (
        <div>
          <div>1111111</div>
        </div>
      )}

      {!account && <NoAuth />} */}
      132
    </div>
  );
};

export default MiniProfile;
