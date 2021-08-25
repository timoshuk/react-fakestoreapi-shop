import React, { useState, useEffect } from "react";
import { getCategories } from "../../utils/get-data";

import styles from "./ProductsFilter.module.css";

const ProductsFilter = ({ filterFunk }) => {
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
      <br />
      <select
        onChange={(e) => filterFunk(e.target.value)}
        className={styles.productFilter}
      >
        <option value="All">All</option>
        {dropDown}
      </select>
    </div>
  );
};

export default ProductsFilter;
