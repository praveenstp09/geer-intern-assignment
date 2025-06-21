"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EditProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === id);
        if (found) setProduct(found);
      });
  }, [id]);

  const handleDelete = async () => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    router.push("/dashboard/products");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Edit Product</h1>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
      <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">
        Delete Product
      </button>
    </div>
  );
}
