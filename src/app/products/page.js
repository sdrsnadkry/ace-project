"use client";

import Image from "next/image";
// https://dummyjson.com/products

import { useState } from "react";
import Product from "./_components/product";

const PROD = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 10,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror 2",
    price: 20,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 3,
    title: "Eyeshadow Palette with Mirror 3",
    price: 30,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 4,
    title: "Eyeshadow Palette with Mirror 4",
    price: 40,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 5,
    title: "Eyeshadow Palette with Mirror 5",
    price: 50,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
];

function Products() {
  const [productList, setProductList] = useState(PROD);

  return (
    <div className="grid grid-cols-3 gap-5">
      {productList.map((product) => (
        <Product key={product.id} image={product.thumbnail} title={product.title} price={product.price} />
      ))}
    </div>
  );
}

export default Products;
