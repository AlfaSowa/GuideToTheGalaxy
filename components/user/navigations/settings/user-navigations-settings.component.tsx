import { FC } from "react";
import { useAccount } from "../../../../hooks/account/useAccount";
import UserListButton from "../../list/user-list-button.component";
import UserListItem from "../../list/user-list-item.component";
import UserList from "../../list/user-list.component";

const SETTINGS_MENU = [
  {
    id: 1,
    name: "Профиль",
    link: "profile",
  },
];

const UserSettingsMain: FC = () => {
  const { logout } = useAccount();

  return (
    <UserList>
      {SETTINGS_MENU.map((i) => (
        <UserListItem link={i.link} key={i.id}>
          {i.name}
        </UserListItem>
      ))}

      <UserListButton onClick={logout}>Выход</UserListButton>
    </UserList>
  );
};

export default UserSettingsMain;
