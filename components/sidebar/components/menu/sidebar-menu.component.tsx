import { FC } from "react";

const SidebarMenu: FC = ({ children }) => {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};

export default SidebarMenu;
