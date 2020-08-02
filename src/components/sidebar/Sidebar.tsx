import React from "react";
import { Navigation } from "./Navigation";
import { Logo } from "./Logo";

export const Sidebar = (props: SidebarProps) => {
    return (
        <div className="sidebar">
            <div className="sidebar__inner">
                <Logo />
                <Navigation />
            </div>
        </div>
    );
};

type SidebarProps = {};
