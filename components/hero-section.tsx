import { HeroSectionProps } from "@/lib/types";

export default function HeroSection({ headline, description }: HeroSectionProps) {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center px-6 text-center">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
            {headline}
          </span>
        </h1>
        
        <div className="mx-auto max-w-2xl">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </div>
      
    </section>
  );
}