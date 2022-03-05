import Link from "next/link";
import { FC } from "react";

const ProfileClassesNewPage: FC = () => {
  console.log(12);

  return (
    <div>
      <Link href="/profile/classes">
        <a>назад</a>
      </Link>

      <div>ProfileClassesNewPage</div>
    </div>
  );
};

export default ProfileClassesNewPage;
