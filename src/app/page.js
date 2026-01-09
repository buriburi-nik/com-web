import HeroSection from "../../components/home/HeroSection";
import AboutSection from "../../components/home/AboutSection";
import ProductSection from "../../components/home/ProductSection";
import MarqueeSection from "../../components/home/MarqueeSection";
import ServicesSection from "../../components/home/ServicesSection";
import FounderMessageSection from "../../components/home/FounderMessageSection";
import SocialProofSection from "../../components/home/SocialProofSection";
import TrustedBySection from "../../components/home/TrustedBySection";
import ContactSection from "../../components/home/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden font-(family-name:--font-geist-sans)">
      <HeroSection />
      <AboutSection />

      <MarqueeSection />
      <ProductSection />

      <ServicesSection />
      <TrustedBySection />
      <FounderMessageSection />
      <SocialProofSection />
      <ContactSection />
    </main>
  );
}
