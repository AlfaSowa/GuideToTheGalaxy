import { NextPage } from "next";
import PrivateLayout from "../../../layouts/private/private.layout";

const ProfileClasses: NextPage = () => {
  return (
    <PrivateLayout title="Классы">
      <div>
        <div>Классы</div>
      </div>
    </PrivateLayout>
  );
};

export default ProfileClasses;
