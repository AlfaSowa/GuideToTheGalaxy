import { AxiosResponse } from "axios";
import { createEffect, createEvent, createStore } from "effector-next";
import { IClass } from "../../interfaces/classes";
import { Axios } from "../../service/axios";

export const fetchClassesFx = createEffect(async (): Promise<IClass[]> => {
  try {
    const { data, status }: AxiosResponse<IClass[]> = await Axios.get(
      "classes"
    );

    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log("fetchClassesFx error", error);
  }

  return [];
});

export const $classes = createStore<IClass[]>([]).on(
  fetchClassesFx.doneData,
  (_, data) => data
);

// ShortClassDetails
export const setShortClassDetailsFx = createEvent<IClass>();
export const $shortClassDetails = createStore<IClass>(null).on(
  setShortClassDetailsFx,
  (_, data) => data
);
