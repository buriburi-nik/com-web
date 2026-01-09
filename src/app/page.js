import dynamic from 'next/dynamic';
import HeroSection from "../../components/home/HeroSection";

const CategorySection = dynamic(() => import("../../components/home/CategorySection"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50" />
});
const StatsSection = dynamic(() => import("../../components/home/StatsSection"));
const ServicesSection = dynamic(() => import("../../components/home/ServicesSection"));
const FeaturedProperties = dynamic(() => import("../../components/home/FeaturedProperties"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden font-(family-name:--font-geist-sans)">
      <HeroSection />
      <CategorySection />
      <StatsSection />
      <ServicesSection />
      <FeaturedProperties />
    </main>
  );
}
