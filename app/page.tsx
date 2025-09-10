import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import CTASection from "@/components/cta-section";
import { getWaitlistCount } from "@/app/actions/waitlist";

export default async function Home() {
  const waitlistCount = await getWaitlistCount();
  const socialProofText = waitlistCount > 20 
    ? `Over ${waitlistCount} founders have already reserved their spot. Seats are limited, don't miss out.`
    : "";
  
  const heroContent = {
    headline: "Hire an AI Product Consultant, and forge a clear path to Product-Market Fit.",
    description: "Cruxer.ai is the AI product consultant built for founders. It gets to the crux of the problem, transforming your scattered ideas, notes, and even conversations into a validated, developer-ready action blueprint."
  };

  const ctaContent = {
    emailPlaceholder: "Enter your email",
    buttonText: "Apply to be a Founding Member & Get Early Access",
    socialProofText
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection {...heroContent} />
        <CTASection {...ctaContent} />
      </main>
    </div>
  );
}