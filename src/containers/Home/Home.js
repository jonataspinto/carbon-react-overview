import React from 'react'
import {
    HeaderContainer,
    Header,
    Content,
    SkipToContent,
    HeaderMenuButton,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
} from 'carbon-components-react';
import { Search20, Notification20, AppSwitcher20 } from "@carbon/icons-react"
import "../../index.scss";
// import * as S from "./HomeStyled";
import { SideNavF } from '../../components/features';
import { Box1, Box2 } from './components';

const StoryContent = () => {
    const content = (
      <div className="bx--grid" >
        {/* <div className="bx--row"> */}
          <section className="bx--offset-lg-3 bx--col-lg-13">
            <Box1 />
            <Box2 />
          </section>
        {/* </div> */}
      </div>
    );
    return <Content id="main-content">{content}</Content>;
};

const Home = () =>{
    return (
        <div className="container">
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="IBM">
              [Platform]
            </HeaderName>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                <Search20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                <Notification20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
                <AppSwitcher20 />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNavF isSideNavExpanded={isSideNavExpanded} />
          </Header>
          <StoryContent />
        </>
      )}
    />
        </div>
    )
}

export default Home
