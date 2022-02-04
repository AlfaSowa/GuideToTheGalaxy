import { useStore } from "effector-react";
import { FC } from "react";
import { $account } from "../../../../models/account";
import SidebarListElem from "../../components/menu/sidebar-menu-item.component";
import SidebarList from "../../components/menu/sidebar-menu.component";

const SidebarMainNavigation: FC = () => {
  const account = useStore($account);

  return (
    <SidebarList>
      <SidebarListElem link="/">Главная</SidebarListElem>
      {account && <SidebarListElem link="/profile">Профиль</SidebarListElem>}
    </SidebarList>
  );
};

export default SidebarMainNavigation;
