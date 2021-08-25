import React, { useState, useEffect } from "react";
import { getCategories } from "../../utils/get-data";

import styles from "./ProductsFilter.module.css";

const ProductsFilter = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  const dropDown =
    categories &&
    categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));

  return (
    <div>
      <label for="cars">
        <span>Choose a car:</span>
        <br />
        <select className={styles.productFilter}>{dropDown}</select>
      </label>
    </div>
  );
};

export default ProductsFilter;
