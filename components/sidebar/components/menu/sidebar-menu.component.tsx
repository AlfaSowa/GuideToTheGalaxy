import { FC } from "react";

const SidebarList: FC = ({ children }): JSX.Element => {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};

export default SidebarList;
