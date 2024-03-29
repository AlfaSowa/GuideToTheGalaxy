import { AxiosResponse } from "axios";
import { Axios } from "../../service/axios";
import { setCookie } from "../cookies";
import { AuthType } from "./interfaces";

export const getToken = async ({
  username,
  password,
}: AuthType): Promise<void> => {
  try {
    const { data, status }: AxiosResponse<{ token: string }> = await Axios.post(
      "auth/login",
      {
        username,
        password,
      }
    );

    if (status === 201) {
      setCookie({
        name: "token",
        value: data?.token,
        days: 365,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async ({
  username,
  password,
}: AuthType): Promise<void> => {
  try {
    const { data, status }: AxiosResponse<{ username: string }> =
      await Axios.post("auth/registration", {
        username,
        password,
      });

    if (status === 201) {
      getToken({
        username: data.username,
        password,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
