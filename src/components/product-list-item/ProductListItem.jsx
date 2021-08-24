import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductListItem.module.css";

const ProductListItem = ({ id, title, description, image }) => {
  return (
    <Link to={`/product/${id}`} className={styles.productListItem}>
      <img width={200} src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
};

export default ProductListItem;
