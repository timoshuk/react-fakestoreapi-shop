import BlockContainer from "../block-container/BlockContainer";
import MainNav from "../main-nav";

import styles from "./Header.module.css";

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
