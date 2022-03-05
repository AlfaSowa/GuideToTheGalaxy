import { FC } from "react";
import Header from "../../components/header/header.component";
import SidebarNavigationsMain from "../../components/sidebar/navigations/main/sidebar-navigations-main.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MainBlock from "../../components/ui/main/main.component";
import { ILayout } from "../../interfaces/layouts";

type IPublicLayout = ILayout;

const PublicLayout: FC<IPublicLayout> = ({ children, title, padding }) => (
  <>
    <Header />

    <Sidebar>
      <SidebarNavigationsMain />
    </Sidebar>

    <MainBlock title={title} padding={padding}>
      {children}
    </MainBlock>
  </>
);

export default PublicLayout;
