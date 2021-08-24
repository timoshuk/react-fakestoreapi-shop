import React from "react";
import styles from "./BlockContainer.module.css";

const BlockContainer = ({ children }) => {
  return <div className={styles.blockContainer}>{children}</div>;
};

export default BlockContainer;
