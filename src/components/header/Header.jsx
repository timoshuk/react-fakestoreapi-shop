import React from "react";
import BlockContainer from "../block-container/BlockContainer";
import MainNav from "../main-nav";

const Header = () => {
  return (
    <header>
      <BlockContainer>
        <MainNav />
      </BlockContainer>
    </header>
  );
};

export default Header;
