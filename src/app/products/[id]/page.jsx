"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import RatingReviews from "../_components/ratings";
import RatingCard from "../_components/ratings";

function ProductDetails(props) {
  const params = useParams();
  const [productDetails, setProductDetails] = useState();

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/" + params.id
      );
      const resJson = await response.json();
      setProductDetails(resJson);

      console.log(resJson);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(productDetails);
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Product Image and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="p-6">
            {productDetails?.thumbnail && (
              <Image
                src={productDetails?.thumbnail}
                width={500}
                height={500}
                alt="Product"
                className="w-full h-auto rounded-md"
              />
            )}
          </div>
          {/* Product Details */}
          <div className="flex flex-col justify-between p-6">
            <div>
              <h1 className="mb-4 text-2xl font-bold text-gray-800">
                {productDetails?.title}
              </h1>
              <p className="mb-6 text-gray-600">
                {productDetails?.description}
              </p>
              <div className="mb-6 text-gray-800">
                <span className="text-2xl font-bold">${productDetails?.price}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${productDetails?.price}
                </span>
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  className="w-20 p-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue={1}
                />
              </div>
            </div>
            <button className="px-6 py-3 mt-6 text-white transition duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="p-6 border-t">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Product Reviews
          </h2>
          {/* <RatingReviews reviews={productDetails?.reviews} /> */}
          {productDetails?.reviews?.map((review) => (
            <RatingCard key={review.date} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
