import { FC } from "react";
import SidebarMenuItem from "../../components/menu/sidebar-menu-item.component";
import SidebarMenu from "../../components/menu/sidebar-menu.component";

interface IMenuItem {
  text: string;
  path: string;
  id: number;
}

const MENU: IMenuItem[] = [
  {
    id: 1,
    text: "Профиль",
    path: "/profile",
  },
  {
    id: 2,
    text: "Классы",
    path: "/profile/classes",
  },
];

const SidebarNavigationsProfile: FC = () => {
  return (
    <SidebarMenu>
      {MENU.map((item) => (
        <SidebarMenuItem link={item.path} key={item.id}>
          {item.text}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default SidebarNavigationsProfile;