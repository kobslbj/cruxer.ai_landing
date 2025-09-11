import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import TeamSection from "@/components/team-section";
import { TeamMember } from "@/lib/types";

export default async function Home() {
  const heroContent = {
    headline: "Build with confidence, with Cruxer.",
    description: "Hire the AI Product Team that keeps your vision on track. From chaotic idea to validated blueprint, we're with you at every step."
  };

  const teamMembers: TeamMember[] = [
    {
      id: "cpo",
      name: "RAZOR",
      role: "Your AI Chief Product Officer",
      description: "",
      personality: "I don't tell you what you want to hear—I ask what you need to face.",
      color: "#0ea5e9",
      imageSrc: "/razor.png"
    }
  ];

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center gap-6">
        <HeroSection {...heroContent} />
        <TeamSection members={teamMembers} />
      </main>
    </div>
  );
}