/* eslint-disable @typescript-eslint/require-await */
import { NextPage } from "next";
import { useEffect } from "react";
import ProfileClassesPage from "../../../GTGPages/profile/classes/classes.component";
import { useClasses } from "../../../hooks/classes/useClasses";
import PrivateLayout from "../../../layouts/private/private.layout";

const ProfileClasses: NextPage = () => {
  const { classesIsLoad, fetchClasses } = useClasses();

  useEffect(() => {
    if (!classesIsLoad) {
      fetchClasses();
    }
  }, [classesIsLoad, fetchClasses]);

  return (
    <PrivateLayout padding title="Классы">
      <ProfileClassesPage />
    </PrivateLayout>
  );
};

export default ProfileClasses;
