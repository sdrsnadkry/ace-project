"use client";

import Image from "next/image";
// https://dummyjson.com/products

import { useEffect, useState } from "react";
import Product from "./_components/product";

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

  return (
    <div>
      <h1 className="text-center text-2xl">Products List</h1>

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
      <div className="grid grid-cols-3 gap-5">
        {filteredProduct?.map((product) => (
          <Product
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
