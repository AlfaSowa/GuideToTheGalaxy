import { FC } from "react";
import Header from "../../components/header/header.component";
import SidebarProfileNavigation from "../../components/sidebar/navigations/profile/navigation.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MainBlock from "../../components/ui/main/main.component";

const PrivateLayout: FC = ({ children }): JSX.Element => {
  return (
    <>
      <Header />

      <Sidebar>
        <SidebarProfileNavigation />
      </Sidebar>

      <MainBlock noPadding>{children}</MainBlock>
    </>
  );
};

export default PrivateLayout;
