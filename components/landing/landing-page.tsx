import { EventsShowcaseSection } from "@/components/landing/events-showcase-section";
import { ForYouSection } from "@/components/landing/for-you-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { PhotoGallerySection } from "@/components/landing/photo-gallery-section";
import { PremiumBenefitsSection } from "@/components/landing/premium-benefits-section";
import { PricingPreviewSection } from "@/components/landing/pricing-preview-section";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { FloatingOfferButton } from "@/components/shared/floating-offer-button";

export function LandingPage() {
  return (
    <main className="flex-1">
      <FloatingOfferButton />
      <HeroSection />
      <EventsShowcaseSection />
      <PremiumBenefitsSection />
      <HowItWorksSection />
      <ForYouSection />
      <PhotoGallerySection />
      <PricingPreviewSection />
      <ReviewsSection />
    </main>
  );
}
