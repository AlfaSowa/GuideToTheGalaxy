import { deleteCookie } from "../../methods/cookies";

export const useAccount = () => {
  const logout = () => {
    deleteCookie("token");
  };

  return {
    logout,
  };
};
