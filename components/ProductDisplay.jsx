"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";

export default function ProductsDisplay() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category"); // e.g., "laptops"

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        if (category) {
          const matched = data.filter((p) => p.category === category);
          setFiltered(matched);
        } else {
          setFiltered(data);
        }
      });
  }, [category]);

  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-medium mb-8 capitalize">
        {category ? `${category}` : "Our Products"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
