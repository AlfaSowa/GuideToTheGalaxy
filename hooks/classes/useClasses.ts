import { useStore } from "effector-react";
import { useCallback, useMemo } from "react";
import { $classes, fetchClassesFx } from "../../models/classes";

export const useClasses = () => {
  const classes = useStore($classes);
  const pending = useStore(fetchClassesFx.pending);

  const classesIsLoad = useMemo(() => {
    if (classes.length > 0 && !pending) {
      return true;
    }
    return false;
  }, [classes.length, pending]);

  const fetchClasses = useCallback((): void => {
    fetchClassesFx();
  }, []);

  return {
    classes,
    pending,
    classesIsLoad,
    fetchClasses,
  };
};
