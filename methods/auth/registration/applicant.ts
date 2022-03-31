import { AxiosResponse } from "axios";
import { Axios } from "../../../service/axios";
import { ICreateApplicant } from "./interfaces";

export const createApplicant = async ({
  username,
  password,
}: ICreateApplicant): Promise<void> => {
  const model = {
    username,
    password,
  };

  try {
    const { status }: AxiosResponse<{ username: string }> = await Axios.post(
      "auth/registration",
      model
    );

    if (status === 201) {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
