import React from 'react';
// import { SideNavFContainer } from './SideNavFStyled'
import {
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink
} from 'carbon-components-react';
import { Fade16 } from "@carbon/icons-react"


const SideNavF = ({isSideNavExpanded}) => (
  <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
    <SideNavItems>
      <SideNavMenu renderIcon={Fade16} title="Category title">
        <SideNavMenuItem href="#">
          Link
        </SideNavMenuItem>
        <SideNavMenuItem
          aria-current="page"
          href="#"
        >
          Link
        </SideNavMenuItem>
        <SideNavMenuItem href="#">
          Link
        </SideNavMenuItem>
      </SideNavMenu>
      <SideNavMenu renderIcon={Fade16} title="Category title">
        <SideNavMenuItem href="#">
          Link
        </SideNavMenuItem>
        <SideNavMenuItem
          aria-current="page"
          href="#"
        >
          Link
        </SideNavMenuItem>
        <SideNavMenuItem href="#">
          Link
        </SideNavMenuItem>
      </SideNavMenu>
      <SideNavMenu renderIcon={Fade16} title="Category title">
        <SideNavMenuItem href="#">
          Link
        </SideNavMenuItem>
        <SideNavMenuItem
          aria-current="page"
          href="#"
        >
          Link
        </SideNavMenuItem>
        <SideNavMenuItem href="#">
          Link
        </SideNavMenuItem>
      </SideNavMenu>
      <SideNavLink renderIcon={Fade16} href="#">
        Link
      </SideNavLink>
      <SideNavLink renderIcon={Fade16} href="#">
        Link
      </SideNavLink>
    </SideNavItems>
  </SideNav>
);

export default SideNavF;