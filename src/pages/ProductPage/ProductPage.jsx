import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getSingleProduct } from "../../utils/get-data";

import styles from "./ProductPage.module.css";

const ProductPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getSingleProduct(id, setProduct);
  }, []);

  return (
    <div className={styles.productPage}>
      {!product && <h1>"Loading..."</h1>}

      {product && (
        <>
          <img src={product.image} />
          <div>
            <h3>{product.title}</h3>
            <div>{product.description}</div>
            <div>{product.price} &#8372;</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
