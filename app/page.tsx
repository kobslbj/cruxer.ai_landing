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
    headline: "Build with confidence, with Cruxer.",
    description: "Hire the AI Product Team that keeps your vision on track. From chaotic idea to validated blueprint, we're with you at every step."
  };

  const ctaContent = {
    emailPlaceholder: "Enter your email",
    buttonText: "Join the Waitlist, Hire Your AI Product Team",
    socialProofText
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center gap-8">
        <HeroSection {...heroContent} />
        <CTASection {...ctaContent} />
      </main>
    </div>
  );
}