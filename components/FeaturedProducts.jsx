"use client";
import { FaArrowRight } from "react-icons/fa";

const featuredProducts = [
  {
    id: 1,
    image: "/img1.webp",
    name: "Unparalleled Sound",
    description: "Experience crystal-clear audio with premium headphones.",
  },
  {
    id: 2,
    image: "/img2.webp",
    name: "Stay Connected",
    description: "Compact and stylish earphones for every occasion.",
  },
  {
    id: 3,
    image: "/img3.webp",
    name: "Power in Every Pixel",
    description: "Shop the latest laptops for work, gaming, and more.",
  },
];

export default function FeaturedProducts() {

  return (
    <section className="mt-14 mb-20 px-7">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2 "></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {featuredProducts.map(({ id, image, name, description }) => (
          <div
            key={id}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
          >
            <img
              src={image}
              alt={name}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />

            <div className="absolute bottom-8 left-8 text-white space-y-2 group-hover:-translate-y-4 transition duration-300">
              <p className="font-medium text-xl lg:text-2xl">{name}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <button
                className="flex items-center gap-2 bg-orange-600 px-4 py-2 rounded text-sm hover:bg-orange-700 transition"
              >
                Buy now <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
