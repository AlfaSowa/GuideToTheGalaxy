import { FC } from "react";
import SidebarListElem from "../sidebar-list/sidebar-elem.component";
import SidebarList from "../sidebar-list/sidebar-list.component";

interface IMenuItem {
  text: string;
  path: string;
}

const MENU: IMenuItem[] = [
  {
    text: "Классы",
    path: "/profile/classes",
  },
  {
    text: "Оглавления",
    path: "/profile/content",
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
