
import CTA from "@/components/common/cta-section";
import Features from "@/components/home/features-section";
import FindYourNextHire from "@/components/home/find-next-hire-section";
import HeroSection from "@/components/home/hero-section";
import Pricing from "@/components/home/pricing-section";
import RecognizedBy from "@/components/home/recognitions-section";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/testimonials";
import WhyDifferent from "@/components/home/why-venovox-seection";
export const metadata = {
  title: "Risk Management & Background Screening Experts | Venovox Asia-Pacific",
  description:
    "VENOVOX delivers specialized risk management services, including security advisory, intelligence analysis, and due diligence, throughout APAC. It is ISO 27001-certified, with global standards and local insight.",
};

export default function Home() {
  return (
   <>
   <HeroSection />
   <FindYourNextHire />
   <StatsSection />
   <RecognizedBy />
   < WhyDifferent />
   <Features featuresInView={true} />
   <Testimonials />
   <Pricing pricingInView={true} />
   <CTA />
   </>
  );
}