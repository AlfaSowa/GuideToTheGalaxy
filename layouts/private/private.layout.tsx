import { FC } from "react";
import Header from "../../components/header/header.component";
import SidebarNavigationsProfile from "../../components/sidebar/navigations/profile/sidebar-navigations-profile.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MainBlock from "../../components/ui/main/main.component";

interface IPrivateLayout {
  title?: string;
}

const PrivateLayout: FC<IPrivateLayout> = ({ children, title }) => (
  <>
    <Header />

    <Sidebar>
      <SidebarNavigationsProfile />
    </Sidebar>

    <MainBlock title={title}>{children}</MainBlock>
  </>
);

PrivateLayout.defaultProps = {
  title: null,
};

export default PrivateLayout;
