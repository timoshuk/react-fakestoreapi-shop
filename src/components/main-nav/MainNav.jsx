import React from "react";
import Logo from "../logo";

import NavItem from "../nav-item";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <div className={styles.mainNav}>
      <Logo content="FakeStore" />
      <nav className={styles.mainNavList}>
        <ul>
          <NavItem innerText="HomePage" />
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
