import BlockContainer from "../block-container/BlockContainer";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <BlockContainer>
        <div>LOGO</div>
        <nav>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </nav>
      </BlockContainer>
    </header>
  );
};

export default Header;
