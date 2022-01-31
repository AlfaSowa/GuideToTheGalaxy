import { useStore } from "effector-react";
import { $account } from "../../../models/account";
import SidebarList from "../sidebar-list/sidebar-list.component";
import SidebarListElem from "../sidebar-list/sidebar-elem.component";

const SidebarMainNavigation = (): JSX.Element => {
  const account = useStore($account);

  return (
    <SidebarList>
      <SidebarListElem link="/">Главная</SidebarListElem>
      {account && <SidebarListElem link="/profile">Профиль</SidebarListElem>}
    </SidebarList>
  );
};

export default SidebarMainNavigation;
