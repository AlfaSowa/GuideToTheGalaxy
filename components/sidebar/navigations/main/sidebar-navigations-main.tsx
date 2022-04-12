import { FC } from "react";
import AccordionItem from "../../../ui/accordion/accordion-item";
import Accordion from "../../../ui/accordion/accordion";
import SidebarMenuItem from "../../components/menu/sidebar-menu-item";
import SidebarMenu from "../../components/menu/sidebar-menu";

const SidebarNavigationsMain: FC = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <Accordion>
        <AccordionItem>1</AccordionItem>
        <AccordionItem>2</AccordionItem>
      </Accordion>
    </SidebarMenuItem>
  </SidebarMenu>
);

export default SidebarNavigationsMain;
