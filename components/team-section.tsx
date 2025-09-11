import { TeamSectionProps, TeamMember } from "@/lib/types";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import Image from "next/image";

export default function TeamSection({ members }: TeamSectionProps) {
  const isSingle = members.length === 1;
  return (
    <section className="py-16 px-6 min-h-screen flex items-center bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="mx-auto w-fit mb-6">
            <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>🧠 Meet Razor</span>
              </AnimatedShinyText>
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
            RAZOR
          </h2>
          <p className="text-base text-primary font-medium mb-3">Your AI Chief Product Officer</p>
        </div>

        <div className={`grid grid-cols-1 ${isSingle ? "justify-items-center" : "md:grid-cols-3"} gap-8`}>
          {members.map((member, index) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {member.imageSrc ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-background">
                    <Image src={member.imageSrc} alt={member.name} width={96} height={96} className="object-cover w-full h-full" />
                  </div>
                ) : (
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>
                </div>
                
                {member.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                )}
                
                <div className="pt-2 border-t border-border/50 w-full">
                  <p className="text-xs text-muted-foreground/80 italic">
                    "{member.personality}"
                  </p>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundColor: member.color }}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">Ready to work with Razor? join waiting list 👆</p>
        </div>
      </div>
    </section>
  );
}