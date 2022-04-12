import { FC } from "react";
import UserListItem from "../../list/user-list-item";
import UserList from "../../list/user-list";

const USER_MENU = [
  {
    id: "1111111111",
    name: "22222222",
    link: "22222222",
  },
  {
    id: "1111111111",
    name: "22222222",
    link: "22222222",
  },
  {
    id: "1111111111",
    name: "22222222",
    link: "22222222",
  },
  {
    id: "1111111111",
    name: "22222222",
    link: "22222222",
  },
  {
    id: "1111111111",
    name: "22222222",
    link: "22222222",
  },
  {
    id: "1111111111",
    name: "22222222",
    link: "22222222",
  },
];

const UserNavigationsMain: FC = () => (
  <UserList>
    {USER_MENU.map((i) => (
      <UserListItem link={i.link} key={i.id}>
        {i.name}
      </UserListItem>
    ))}
  </UserList>
);

export default UserNavigationsMain;
