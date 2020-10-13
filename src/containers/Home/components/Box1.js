import React from 'react';
import styled from "styled-components";
import { Tile, Button } from "carbon-components-react";
import { Search20 } from "@carbon/icons-react";

const S = { 
  LocalTitle: styled.h2`
    font-weight: 800;
    margin: 30px 0;
    font-size: 20px;
  `,
  Card: styled(Tile)`
    margin-bottom: 50px;
  `,
};

const Box1 = () => {
  return (
    <S.Card>
    <S.LocalTitle>
      Purpose and function <br />
      <Button renderIcon={Search20} size="small" >Button Carbon</Button><br />
      <Button kind="secondary" size="small" style={{justifyContent: "center"}}>Button Carbon</Button><br />
      <Button kind="tertiary" size="small" style={{justifyContent: "center"}}>Button Carbon</Button>
    </S.LocalTitle>
    <p style={{ lineHeight: "20px" }}>
      The shell is perhaps the most crucial piece of any UI built with
      Carbon. It contains the shared navigation framework for the entire
      design system and ties the products in IBM’s portfolio together in a
      cohesive and elegant way. The shell is the home of the topmost
      navigation, where users can quickly and dependably gain their
      bearings and move between pages.
      <br />
      <br />
      The shell was designed with maximum flexibility built in, to serve
      the needs of a broad range of products and users. Adopting the shell
      ensures compliance with IBM design standards, simplifies development
      efforts, and provides great user experiences. All IBM products built
      with Carbon are required to use the shell’s header.
      <br />
      <br />
      To better understand the purpose and function of the UI shell,
      consider the “shell” of MacOS, which contains the Apple menu,
      top-level navigation, and universal, OS-level controls at the top of
      the screen, as well as a universal dock along the bottom or side of
      the screen. The Carbon UI shell is roughly analogous in function to
      these parts of the Mac UI. For example, the app switcher portion of
      the shell can be compared to the dock in MacOS.
    </p>
    </S.Card>
  )
}

export default Box1;
