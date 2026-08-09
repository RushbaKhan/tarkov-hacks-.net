import { HeroSection } from '../components/HeroSection';
import { SafetySection } from '../components/SafetySection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { HowItWorks } from '../components/HowItWorks';
import { Integrations } from '../components/Integrations';
import { SupportBanner } from '../components/SupportBanner';
import { PricingFaqSection } from '../components/PricingFaqSection';
import { SeoContentSection } from '../components/SeoContentSection';
import { PurchaseSupport } from '../components/PurchaseSupport';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SafetySection />
      <FeaturesGrid />
      <HowItWorks />
      <Integrations />
      <SupportBanner />
      <PricingFaqSection />
      <SeoContentSection />
      <PurchaseSupport />
    </>
  );
}
