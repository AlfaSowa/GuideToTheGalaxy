import React, { ReactElement } from 'react';
import { Navigation } from './Navigation';
import { Logo } from './Logo';

export const Sidebar = (): ReactElement => {
    return (
        <div className="sidebar">
            <div className="sidebar__inner">
                <Logo />
                <Navigation />
            </div>
        </div>
    );
};

export default Sidebar;
