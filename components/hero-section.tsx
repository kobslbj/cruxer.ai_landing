import { HeroSectionProps } from "@/lib/types";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

export default function HeroSection({ headline, description }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="mx-auto w-fit">
          <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <a href="#waitlist" className="inline-block">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Early Access Opportunity</span>
              </AnimatedShinyText>
            </a>
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {(() => {
            const match = headline.match(/^(.*?)(Cruxer)(.*)$/i);
            if (!match) return <span>{headline}</span>;
            const [, pre, , post] = match;
            return (
              <>
                <span>{pre}</span>
                <AuroraText
                  className="px-1"
                  colors={["#000000", "#3f3f46", "#9ca3af", "#f3f4f6"]}
                >
                  Cruxer
                </AuroraText>
                <span>{post}</span>
              </>
            );
          })()}
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