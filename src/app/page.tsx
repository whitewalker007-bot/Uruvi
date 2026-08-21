import Hero from "@/components/home/Hero";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import NewArrivals from "@/components/home/NewArrivals";
import MensSection from "@/components/home/MensSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import EditorialSection from "@/components/home/EditorialSection";
import BestSellers from "@/components/home/BestSellers";
import PromoBanner from "@/components/home/PromoBanner";
import Testimonials from "@/components/home/Testimonials";
import TrustSection from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <MensSection />
      <NewArrivals />
      <CategoryGrid />
      <EditorialSection />
      <BestSellers />
      <PromoBanner />
      <Testimonials />
      <TrustSection />
    </>
  );
}
