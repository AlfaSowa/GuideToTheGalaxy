import { FC } from "react";
import { useClasses } from "../../../../hooks/classes/useClasses";

const ProfileClassesList: FC = () => {
  const { classes } = useClasses();

  return (
    <div>
      <div>{`classes.length = ${classes.length}`}</div>
    </div>
  );
};

export default ProfileClassesList;
