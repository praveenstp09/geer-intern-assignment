"use client";
import { Suspense } from "react";
import ProductsDisplay from "../../../components/ProductDisplay";

export default function ProductsPage() {
  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Our Products
      </h1>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductsDisplay />
      </Suspense>
    </main>
  );
}
