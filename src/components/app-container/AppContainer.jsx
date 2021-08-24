import React from "react";

import styles from "./AppContainer.module.css";

const AppContainer = ({ children }) => {
  return <div className={styles.appContainer}>{children}</div>;
};

export default AppContainer;
