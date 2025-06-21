"use client";
import ProductDetail from "../../../../components/ProductDetails";
export default function ProductPage({ params }) {
  return <ProductDetail id={params.id} />;
}
