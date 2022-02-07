import { createEvent } from "effector";
import { createEffect, createStore } from "effector-next";
import { Account } from "../../interfaces/account";
import { Axios } from "../../service/axios";
import { FetchAccountDataType } from "./interfaces";
import { setTokenFx } from "./token";

export const clearAccoutFx = createEvent();

export const fetchAccountDataFx = createEffect(
  async ({ token }: FetchAccountDataType): Promise<Account> => {
    if (token) {
      try {
        const { data, status } = await Axios.get("auth/token", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (status === 200) {
          setTokenFx(token);
          return data;
        }
      } catch (error) {
        console.log("fetchAccountDataFx error", error);
      }
    }

    return null;
  }
);

export const $account = createStore<Account>(null)
  .on(fetchAccountDataFx.doneData, (_, data) => data)
  .on(clearAccoutFx, (_, data) => null);

$account.watch((account) => console.log("account:", account));
