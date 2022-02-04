import { FC } from "react";

const SidebarList: FC = ({ children }) => {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};

export default SidebarList;
