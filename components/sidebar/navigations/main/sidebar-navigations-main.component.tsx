import { useStore } from "effector-react";
import { FC } from "react";
import { $account } from "../../../../models/account";
import AccordionItem from "../../../ui/accordion/accordion-item.component";
import Accordion from "../../../ui/accordion/accordion.component";
import SidebarMenuItem from "../../components/menu/sidebar-menu-item.component";
import SidebarMenu from "../../components/menu/sidebar-menu.component";

const SidebarNavigationsMain: FC = () => {
  const account = useStore($account);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Accordion>
          <AccordionItem>1</AccordionItem>
          <AccordionItem>2</AccordionItem>
        </Accordion>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SidebarNavigationsMain;
