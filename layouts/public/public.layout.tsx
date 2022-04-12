import { FC } from "react";
import Header from "../../components/header/header";
import SidebarNavigationsMain from "../../components/sidebar/navigations/main/sidebar-navigations-main";
import Sidebar from "../../components/sidebar/sidebar";
import MainBlock from "../../components/ui/main/main";
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
