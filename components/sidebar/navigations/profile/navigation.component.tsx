import { FC } from "react";
import SidebarListElem from "../../components/menu/sidebar-menu-item.component";
import SidebarList from "../../components/menu/sidebar-menu.component";

interface IMenuItem {
  text: string;
  path: string;
}

const MENU: IMenuItem[] = [
  {
    text: "Профиль",
    path: "/profile",
  },
  {
    text: "Классы",
    path: "/profile/classes",
  },
];

const SidebarProfileNavigation: FC = () => {
  return (
    <SidebarList>
      {MENU.map((item) => (
        <SidebarListElem link={item.path}>{item.text}</SidebarListElem>
      ))}
    </SidebarList>
  );
};

export default SidebarProfileNavigation;
