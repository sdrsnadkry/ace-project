"use client";

import { useEffect, useState } from "react";
import Product from "./_components/product";
import Loader from "./_components/loader";

function Products() {
  const [productList, setProductList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const resJson = await response.json();
      setProductList(resJson?.products || []);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const filteredProduct = productList.filter((prod) =>
    prod.title?.toLowerCase()?.includes(inputValue.toLowerCase())
  );

  console.log(filteredProduct);

  return (
    <div>
      <h1 className="text-2xl text-center">Products List</h1>

      <p></p>

      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          className="my-4 border border-slate-500"
        />
      </div>
      {filteredProduct.length === 0 && <Loader />}

      <div className="grid grid-cols-3 gap-5">
        {filteredProduct?.map((product) => (
          <Product
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
