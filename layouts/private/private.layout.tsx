import { FC } from "react";
import Header from "../../components/header/header.component";
import SidebarProfileNavigation from "../../components/sidebar/navigations/profile/navigation.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MainBlock from "../../components/ui/main/main.component";

interface PrivateLayoutProps {
  title?: string;
}

const PrivateLayout: FC<PrivateLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Header />

      <Sidebar>
        <SidebarProfileNavigation />
      </Sidebar>

      <MainBlock title={title} noPadding>
        {children}
      </MainBlock>
    </>
  );
};

export default PrivateLayout;
