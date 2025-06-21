"use client";
import { useRouter } from "next/navigation";

export default function DashboardHome() {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome to Seller Dashboard</h1>

      <div className="flex gap-4">
        <button
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
          onClick={() => router.push("/dashboard/products")}
        >
          Show All Products
        </button>

        <button
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
          onClick={() => router.push("/dashboard/products/add")}
        >
          Add Product
        </button>
      </div>
    </div>
  );
}
