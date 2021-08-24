import React from "react";

import NavItem from "../nav-item";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <NavItem innerText="HomePage" />
      </ul>
    </nav>
  );
};

export default MainNav;
