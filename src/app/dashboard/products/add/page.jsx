"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState({ name: "", price: "", image: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    router.push("/dashboard/products");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Product Name"
        className="w-full border p-2"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        className="w-full border p-2"
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        className="w-full border p-2"
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
        required
      />
      <button className="bg-orange-600 text-white px-4 py-2 rounded">
        Add Product
      </button>
    </form>
  );
}
