import { FC } from "react";
import Header from "../../components/header/header.component";
import SidebarNavigationsMain from "../../components/sidebar/navigations/main/sidebar-navigations-main.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MainBlock from "../../components/ui/main/main.component";

interface IPublicLayout {
  title?: string;
}

const PublicLayout: FC<IPublicLayout> = ({ children, title }) => (
  <>
    <Header />

    <Sidebar>
      <SidebarNavigationsMain />
    </Sidebar>

    <MainBlock title={title}>{children}</MainBlock>
  </>
);

PublicLayout.defaultProps = {
  title: null,
};

export default PublicLayout;
