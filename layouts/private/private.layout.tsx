import { FC } from "react";
import Header from "../../components/header/header";
import SidebarNavigationsProfile from "../../components/sidebar/navigations/profile/sidebar-navigations-profile";
import Sidebar from "../../components/sidebar/sidebar";
import MainBlock from "../../components/ui/main/main";
import { ILayout } from "../../interfaces/layouts";

type IPrivateLayout = ILayout;

const PrivateLayout: FC<IPrivateLayout> = ({ children, title, padding }) => (
  <>
    <Sidebar privateMode>
      <SidebarNavigationsProfile />
    </Sidebar>

    <MainBlock title={title} padding={padding} privateMode>
      {children}
    </MainBlock>
  </>
);

export default PrivateLayout;
