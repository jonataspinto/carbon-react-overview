import React from "react";
// import styled from "styled-components";
import { Tile } from "carbon-components-react";

const Box2 = () => (
  <Tile>
    <h2
    style={{
      fontWeight: "800",
      margin: "30px 0",
      fontSize: "20px"
    }}
    >
      Header responsive behavior
    </h2>
    <p style={{ lineHeight: "20px" }}>
      As a header scales down to fit smaller screen sizes, headers with
      persistent side nav menus should have the side nav collapse into
      “hamburger” menu. See the example to better understand responsive
      behavior of the header.
    </p>
    <h2
      style={{
        fontWeight: "800",
        margin: "30px 0",
        fontSize: "20px"
      }}
    >
      Secondary navigation
    </h2>
    <p style={{ lineHeight: "20px" }}>
      The side-nav contains secondary navigation and fits below the
      header. It can be configured to be either fixed-width or flexible,
      with only one level of nested items allowed. Both links and category
      lists can be used in the side-nav and may be mixed together. There
      are several configurations of the side-nav, but only one
      configuration should be used per product section. If tabs are needed
      on a page when using a side-nav, then the tabs are secondary in
      hierarchy to the side-nav.
    </p>
  </Tile>
);

export default Box2;
