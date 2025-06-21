"use client";
import { FaHeart, FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const router = useRouter();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Added to cart!");
    window.dispatchEvent(new Event("cart-update"));
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    localStorage.setItem("cart", JSON.stringify([product]));
    router.push("/cart");
  };

  return (
    <div
      onClick={() => {
        router.push("/products/" + product.id);
        scrollTo(0, 0);
      }}
      className="flex flex-col items-start gap-0.5 w-full cursor-pointer
             border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative bg-gray-100 rounded-lg w-full h-52 flex items-center justify-center group overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="group-hover:scale-105 transition-transform object-cover w-4/5 h-4/5 md:w-full md:h-full"
        />
        <button
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-105 transition"
          onClick={handleAddToCart}
        >
          <FaHeart className="text-gray-500 text-sm" />
        </button>
      </div>

      <p className="md:text-base font-medium pt-2 w-full truncate">
        {product.name}
      </p>
      <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">
        {product.description}
      </p>

      <div className="flex items-center gap-2">
        <p className="text-xs">{4.5}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={`text-yellow-400 text-xs ${
                index < 4 ? "" : "opacity-30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex items-end justify-between w-full mt-1">
        <p className="text-base font-medium text-black">₹{product.price}</p>
        <button
          onClick={handleBuyNow}
          className="max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-300 rounded-full text-xs hover:bg-slate-50 transition"
        >
          Buy now
        </button>
      </div>
    </div>
  );
}
