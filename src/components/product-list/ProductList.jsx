import React from "react";
import ProductListItem from "../product-list-item";
import { cropText } from "../../utils/crop-text";
import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  const productsList = products.map((item) => (
    <ProductListItem
      key={item.id}
      id={item.id}
      title={item.title}
      description={cropText(item.description, 15)}
      image={item.image}
    />
  ));

  return <div className={styles.productList}>{productsList}</div>;
};

export default ProductList;
