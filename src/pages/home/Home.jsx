import React, { useState, useEffect } from "react";
import ProductList from "../../components/product-list";
import { getProducts } from "../../utils/get-data";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <div>
      <h1>{!products && "Loading....."}</h1>
      {products && <ProductList products={products} />}
    </div>
  );
};

export default Home;
