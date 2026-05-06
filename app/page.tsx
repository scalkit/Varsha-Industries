import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductPreview from "@/components/ProductPreview";
import Certifications from "@/components/Certifications";
import EventsPreview from "@/components/EventsPreview";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProductPreview />
      <Certifications />
      {/* Testimonials would go here */}
      <EventsPreview />
      <ContactCTA />
    </div>
  );
}
