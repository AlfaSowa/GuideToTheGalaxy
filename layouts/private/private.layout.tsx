import { FC } from "react";
import Header from "../../components/header/header.component";
import SidebarNavigationsProfile from "../../components/sidebar/navigations/profile/sidebar-navigations-profile.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MainBlock from "../../components/ui/main/main.component";
import { ILayout } from "../../interfaces/layouts";

type IPrivateLayout = ILayout;

const PrivateLayout: FC<IPrivateLayout> = ({ children, title, padding }) => (
  <>
    <Header />

    <Sidebar>
      <SidebarNavigationsProfile />
    </Sidebar>

    <MainBlock title={title} padding={padding}>
      {children}
    </MainBlock>
  </>
);

export default PrivateLayout;
