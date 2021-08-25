import React, { useState, useEffect } from "react";
import ProductList from "../../components/product-list";
import ProductsFilter from "../../components/products-filter";
import { getProducts } from "../../utils/get-data";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const onFilterChange = (value) => {
    setFilter(value);
  };

  const filtredList = () => {
    if (!products) return null;

    if (products && filter === "All") return products;

    return products.filter((product) => product.category === filter);
  };

  return (
    <div>
      <h1>{!products && "Loading....."}</h1>
      <ProductsFilter filterFunk={onFilterChange} />
      {products && <ProductList products={filtredList()} />}
    </div>
  );
};

export default Home;
