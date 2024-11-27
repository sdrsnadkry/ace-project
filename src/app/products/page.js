"use client";

// https://dummyjson.com/products

import { useState } from "react";

const PROD = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 3,
    title: "Eyeshadow Palette with Mirror",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 4,
    title: "Eyeshadow Palette with Mirror",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 5,
    title: "Eyeshadow Palette with Mirror",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
];

function Products() {
  const [productList, setProductList] = useState(PROD);

  console.log(productList)

  return (
    <div className="grid grid-cols-3">
      <div>Product 1</div>
      <div>Product 2</div>
      <div>Product 3</div>
      <div>Product 4</div>
    </div>
  );
}

export default Products;
