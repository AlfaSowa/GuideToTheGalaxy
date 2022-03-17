import { AxiosResponse } from "axios";
import { Axios } from "../../../service/axios";
import { ICreateApplicant } from "./interfaces";

export const createApplicant = async ({
  lastName,
  firstName,
  phone,
  email,
  password,
  confirmPassword,
}: ICreateApplicant): Promise<void> => {
  const model = {
    lastName,
    firstName,
    phone,
    email,
    password,
    confirmPassword,
  };

  try {
    const { data, status }: AxiosResponse<{ username: string }> =
      await Axios.post("auth/registration", model);

    if (status === 201) {
      console.log("регистрация Соискателя прошла успешно", data);
    }
  } catch (error) {
    console.log(error);
  }
};
