"use client";
import { useEffect, useState } from "react";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Products</h1>

      <ul className="divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product.id} className="flex items-center py-4 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
            <a
              href={`/dashboard/products/${product.id}`}
              className="inline-block bg-orange-600 text-white text-sm px-4 py-2 rounded hover:bg-orange-700 transition"
            >
              Edit
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
