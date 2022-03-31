import { useCallback, useMemo } from "react";
import { IClass } from "../../interfaces/classes";

export const useClasses = () => {
  const classesIsLoad = useMemo(() => false, []);

  const setShortClassDetails = useCallback((details: IClass): void => {}, []);

  const fetchClasses = useCallback((): void => {}, []);

  const deleteClass = useCallback((): void => {
    console.log("deleteClass");
  }, []);

  return {
    classesIsLoad,
    fetchClasses,
    deleteClass,
    setShortClassDetails,
  };
};
