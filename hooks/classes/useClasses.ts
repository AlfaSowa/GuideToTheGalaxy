import { useStore } from "effector-react";
import { useCallback, useMemo } from "react";
import { IClass } from "../../interfaces/classes";
import {
  $classes,
  $shortClassDetails,
  fetchClassesFx,
  setShortClassDetailsFx,
} from "../../models/classes";

export const useClasses = () => {
  const classes = useStore($classes);
  const shortClassDetails = useStore($shortClassDetails);
  const pending = useStore(fetchClassesFx.pending);

  const classesIsLoad = useMemo(() => {
    if (classes.length > 0 && !pending) {
      console.log(2);
      return true;
    }
    return false;
  }, [classes.length, pending]);

  const setShortClassDetails = useCallback((details: IClass): void => {
    setShortClassDetailsFx(details);
  }, []);

  const fetchClasses = useCallback((): void => {
    fetchClassesFx();
  }, []);

  const deleteClass = useCallback((): void => {
    console.log("deleteClass");
  }, []);

  return {
    classes,
    pending,
    classesIsLoad,
    shortClassDetails,
    fetchClasses,
    deleteClass,
    setShortClassDetails,
  };
};
