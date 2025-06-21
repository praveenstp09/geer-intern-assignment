import Link from "next/link";

const categories = [
  {
    name: "laptops",
    image: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg",
    href: "/products?category=laptops",
  },
  {
    name: "smartphones",
    image: "https://images.pexels.com/photos/4549408/pexels-photo-4549408.jpeg",
    href: "/products?category=smartphones",
  },
  {
    name: "headphones",
    image: "https://images.pexels.com/photos/8000624/pexels-photo-8000624.jpeg",
    href: "/products?category=headphones",
  },
  {
    name: "accessories",
    image:
      "https://images.pexels.com/photos/32583519/pexels-photo-32583519.jpeg",
    href: "/products?category=accessories",
  },
];

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-medium mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="group relative overflow-hidden rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-semibold text-lg">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
