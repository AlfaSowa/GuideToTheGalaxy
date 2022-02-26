import { useStore } from "effector-react";
import { useCallback } from "react";
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

  const fetchAccountData = useCallback((tokenString: string): void => {
    fetchAccountDataFx({ token: tokenString });
  }, []);

  const logout = () => {
    deleteCookie("token");
    setTokenFx(null);
    clearAccoutFx(null);
  };

  return {
    account,
    fetchingAccount,
    fetchAccountData,
    token,
    logout,
  };
};
