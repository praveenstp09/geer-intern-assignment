"use client";
import { useEffect, useState } from "react";

export default function ProductDetail({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/products/${id}`, { cache: "no-store" })
      .then(res => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then(setProduct)
      .catch(console.error);
  }, [id]);

  if (!product) return <div>Loading product...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="rounded object-cover w-full h-auto"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-blue-600 font-semibold">₹{product.price}</p>
          <p className="text-gray-700 mt-4 mb-6">{product.description}</p>
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full"
            onClick={() => {
              const cart = JSON.parse(localStorage.getItem("cart")) || [];
              cart.push(product);
              localStorage.setItem("cart", JSON.stringify(cart));
              alert("Product added to cart!");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
