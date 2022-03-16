import { useRouter } from "next/router";
import { FC } from "react";
import ProfileClassesDetails from "../../../components/profile/classes/details/profile-classes-details.component";
import ProfileClassesTable from "../../../components/profile/classes/table/profile-classes-table.component";
import Button from "../../../components/ui/button/button.component";
import { useClasses } from "../../../hooks/classes/useClasses";

const ProfileClassesPage: FC = () => {
  const { shortClassDetails } = useClasses();
  const router = useRouter();

  const addNewClass = () => {
    router.push("/profile/classes/new");
  };

  return (
    <div>
      <Button onClick={addNewClass}>Добавить новый класс</Button>

      <ProfileClassesTable />

      {shortClassDetails && <ProfileClassesDetails />}
    </div>
  );
};

export default ProfileClassesPage;
