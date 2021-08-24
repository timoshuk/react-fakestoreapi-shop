import React from "react";

import { Link } from "react-router-dom";

import styles from "./NavItem.module.css";

const NavItem = ({ innerText, href }) => {
  href = href ? `/${href}` : "/";

  return (
    <li className={styles.navItem}>
      <Link to={href}>{innerText}</Link>
    </li>
  );
};

export default NavItem;
