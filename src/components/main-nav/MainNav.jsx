import { BrowserRouter as Router } from "react-router-dom";

import NavItem from "../nav-item";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <Router>
      <nav className={styles.mainNav}>
        <ul>
          <NavItem href="aaaa" innerText="HomePage" />
        </ul>
      </nav>
    </Router>
  );
};

export default MainNav;
