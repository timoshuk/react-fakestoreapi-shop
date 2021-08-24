import React from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

const Logo = ({ content }) => {
  return (
    <Link to="/" className={styles.logo}>
      {content}
    </Link>
  );
};

export default Logo;
