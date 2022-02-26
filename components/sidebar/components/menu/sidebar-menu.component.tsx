import { FC } from "react";

const SidebarMenu: FC = ({ children }) => (
  <nav>
    <ul>{children}</ul>
  </nav>
);

export default SidebarMenu;
