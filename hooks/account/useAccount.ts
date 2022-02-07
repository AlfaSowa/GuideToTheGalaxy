import { useStore } from "effector-react";
import { $account, fetchAccountDataFx } from "../../models/account";
import { $token } from "../../models/account/token";

export const useAccount = () => {
  const account = useStore($account);
  const token = useStore($token);
  const fetchingAccount = useStore(fetchAccountDataFx.pending);

  return {
    account,
    fetchingAccount,
    token,
  };
};
