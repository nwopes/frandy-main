import { getProducts } from "@/lib/shopify";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import WhyChooseFrandy from "@/components/WhyChooseFrandy";
import NutritionInfo from "@/components/NutritionInfo";

import BoostHealth from "@/components/BoostHealth";

export default async function Home() {
  let products = [];
  try {
    products = await getProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <Features />
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400">No products found. Please check your Shopify connection.</p>
        </div>
      )}

      <WhyChooseFrandy />
      <BoostHealth />
      <NutritionInfo />

      <Footer />
    </main>
  );
}
