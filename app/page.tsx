import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import portfolioData from "@/data/data.json";
import type { PortfolioData } from "@/lib/types";

const data = portfolioData as PortfolioData;

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)]">
      <Navbar categories={data.categories} brandName={data.hero.brandName} />
      <Hero hero={data.hero} />
      {data.categories.map((category, index) => (
        <CategorySection key={category.id} category={category} index={index} />
      ))}
      <Footer hero={data.hero} social={data.social} />
    </main>
  );
}
