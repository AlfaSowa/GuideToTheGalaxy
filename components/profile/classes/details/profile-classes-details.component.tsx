import { FC } from "react";
import { useClasses } from "../../../../hooks/classes/useClasses";

const ProfileClassesDetails: FC = () => {
  const { shortClassDetails } = useClasses();

  console.log("shortClassDetails", shortClassDetails);

  return (
    <div>
      <div>{shortClassDetails.name}</div>
    </div>
  );
};

export default ProfileClassesDetails;
