'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/heroSectionVideo.mp4" // 🔁 Replace with your actual video file
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Upgrade Your Tech
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Explore the latest gadgets, devices, and electronics built for your lifestyle.
        </p>
        <Link href="/products">
          <button className="bg-orange-600 hover:bg-orange-700 transition px-6 py-3 rounded-full text-white font-semibold">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}
