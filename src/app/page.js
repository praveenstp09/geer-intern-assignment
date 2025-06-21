import { Suspense } from "react";
import HeroSection from "../../components/HeroSection";
import CategoryGrid from "../../components/CategoryGrid";
import FeaturedProducts from "../../components/FeaturedProducts";
import ProductsDisplay from "../../components/ProductDisplay";
import Footer from "../../components/Footer";

export default function Home() {
  function hello(){
    console.log("hello")
  }
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductsDisplay />
      </Suspense>
      <FeaturedProducts />
      <Footer />
    </>
  );
}
