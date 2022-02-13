import { useStore } from "effector-react";
import { deleteCookie } from "../../methods/cookies";
import {
  $account,
  clearAccoutFx,
  fetchAccountDataFx,
} from "../../models/account";
import { $token, setTokenFx } from "../../models/account/token";

export const useAccount = () => {
  const account = useStore($account);
  const token = useStore($token);
  const fetchingAccount = useStore(fetchAccountDataFx.pending);

  const logout = () => {
    deleteCookie("token");
    setTokenFx(null);
    clearAccoutFx(null);
  };

  return {
    account,
    fetchingAccount,
    token,
    logout,
  };
};
