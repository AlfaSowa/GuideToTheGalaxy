import { NextPage } from "next";
import ProfileClassesNewPage from "../../../components/profile/classes/new/profile-classes-new.component";
import PrivateLayout from "../../../layouts/private/private.layout";

const ProfileClassesNew: NextPage = () => (
  <PrivateLayout title="Добавить новый класс">
    <ProfileClassesNewPage />
  </PrivateLayout>
);

export default ProfileClassesNew;
