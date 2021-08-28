import { useStore } from 'effector-react';
import FormEditProfile from '../../components/forms/form-edit-profile/form-edit-profile.component';
import { $account } from '../../models/account';
import style from './profile.module.scss';

const ProfilePage = (): JSX.Element => {
  const account = useStore($account);

  return (
    <div className={style.profile}>
      <div className={style.profile__item}>
        Имя: <span>{account?.firstName}</span>
      </div>
      <div className={style.profile__item}>
        Email: <span>{account?.email}</span>
      </div>

      <FormEditProfile />
    </div>
  );
};

export default ProfilePage;
