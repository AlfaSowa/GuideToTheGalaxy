import { useStore } from "effector-react";
import { FC } from "react";
import { $account } from "../../../../models/account";
import SidebarMenuItem from "../../components/menu/sidebar-menu-item.component";
import SidebarMenu from "../../components/menu/sidebar-menu.component";

const SidebarNavigationsMain: FC = () => {
  const account = useStore($account);

  return (
    <SidebarMenu>
      <SidebarMenuItem link="/">Главная</SidebarMenuItem>
      {account && <SidebarMenuItem link="/profile">Профиль</SidebarMenuItem>}
    </SidebarMenu>
  );
};

export default SidebarNavigationsMain;
