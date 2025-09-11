"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { TeamSectionProps } from "@/lib/types";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import Image from "next/image";
import { addToWaitlist } from "@/app/actions/waitlist";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button className="text-center">
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          Processing...
        </span>
      ) : (
        children
      )}
    </Button>
  );
}

export default function TeamSection({ members }: TeamSectionProps) {
  const [state, formAction] = useActionState(addToWaitlist, null);
  const [step, setStep] = useState<1 | 2>(1);
  const [budget, setBudget] = useState<string>("");
  const primaryMember = members?.[0];
  const introText = "My purpose isn't to make your product development 'smoother.' It's to ensure your product is worth developing in the first place.";
  const secondText = "If I could give you a data-backed reason to either kill or commit to your idea in the next 48 hours, what would that certainty be worth to you?";
  const [typedIntro, setTypedIntro] = useState<string>("");
  const [introDone, setIntroDone] = useState<boolean>(false);
  const [showSecond, setShowSecond] = useState<boolean>(false);
  const [typedSecond, setTypedSecond] = useState<string>("");
  const [secondDone, setSecondDone] = useState<boolean>(false);

  useEffect(() => {
    if (!state) return;
    if (state.success) {
      if (state.title || state.description) {
        toast.success(
          <div className="text-left">
            {state.title && (
              <div className="font-semibold text-foreground">{state.title}</div>
            )}
            {state.description && (
              <div className="text-black">{state.description}</div>
            )}
          </div>
        );
      } else {
        toast.success(state.message);
      }
    } else {
      toast.error(state.message);
    }
  }, [state]);

  useEffect(() => {
    let isCancelled = false;
    let index = 0;
    const interval = setInterval(() => {
      if (isCancelled) return;
      index += 1;
      setTypedIntro(introText.slice(0, index));
      if (index >= introText.length) {
        clearInterval(interval);
        setIntroDone(true);
        // Show the second message after a short delay
        setTimeout(() => setShowSecond(true), 200);
      }
    }, 35);
    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!showSecond) return;
    let isCancelled = false;
    let index = 0;
    const interval = setInterval(() => {
      if (isCancelled) return;
      index += 1;
      setTypedSecond(secondText.slice(0, index));
      if (index >= secondText.length) {
        clearInterval(interval);
        setSecondDone(true);
      }
    }, 35);
    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [showSecond]);

  return (
    <section id="waitlist" className="py-10 px-6 bg-gradient-to-b from-background to-muted/20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 max-w-md w-full"
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
                    &ldquo;{member.personality}&rdquo;
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
          <div className="w-full max-w-md">
            <div className="mx-auto bg-card border rounded-xl p-5 shadow-sm w-full">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  {primaryMember?.imageSrc ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-background shrink-0">
                      <Image src={primaryMember.imageSrc} alt={primaryMember.name} width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: primaryMember?.color || '#0ea5e9' }}>
                      R
                    </div>
                  )}
                  <div className="rounded-2xl px-3 py-2 bg-muted text-sm text-foreground max-w-[80%]">
                    <span>{typedIntro}</span>
                    {!introDone && <span className="ml-0.5 inline-block w-2 h-4 bg-foreground/70 align-middle animate-pulse" />}
                  </div>
                </div>
                {showSecond && (
                  <div className="flex items-start gap-3">
                    {primaryMember?.imageSrc ? (
                      <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-background shrink-0">
                        <Image src={primaryMember.imageSrc} alt={primaryMember.name} width={32} height={32} className="object-cover w-full h-full" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: primaryMember?.color || '#0ea5e9' }}>
                        R
                      </div>
                    )}
                    <div className="rounded-2xl px-3 py-2 bg-muted text-sm text-foreground max-w-[80%]">
                      <span>{typedSecond}</span>
                      {!secondDone && <span className="ml-0.5 inline-block w-2 h-4 bg-foreground/70 align-middle animate-pulse" />}
                    </div>
                  </div>
                )}

                {/* Third bubble removed as requested */}


                {step === 2 && (
                  <>
                    <div className="flex justify-end">
                      <div className="rounded-2xl px-3 py-2 bg-primary text-primary-foreground text-sm max-w-[80%]">
                        {budget}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      {primaryMember?.imageSrc ? (
                        <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-background shrink-0">
                          <Image src={primaryMember.imageSrc} alt={primaryMember.name} width={32} height={32} className="object-cover w-full h-full" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: primaryMember?.color || '#0ea5e9' }}>
                          R
                        </div>
                      )}
                      <div className="rounded-2xl px-3 py-2 bg-muted text-sm text-foreground max-w-[80%]">
                        Awesome. The #1 AI Product Team is being assembled. Drop your email to be the first in line to hire them.
                      </div>
                    </div>
                  </>
                )}
              </div>

              {secondDone && (step === 1 ? (
                <div className="mt-4 flex gap-2 justify-center items-center">
                  <Input
                    type="text"
                    inputMode="decimal"
                    placeholder="$100 / month"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        if (budget.trim()) setStep(2);
                      }
                    }}
                    className="h-12 w-64"
                    aria-label="Proposed budget"
                  />
                  <Button className="text-center" onClick={() => budget.trim() && setStep(2)}>Send</Button>
                </div>
              ) : (
                <form action={formAction} className="mt-4 flex gap-2 justify-center items-center">
                  <Input type="hidden" name="budget" value={budget} />
                  <Input type="email" name="email" required placeholder="your@gmail.com" className="h-12 w-64" aria-label="Your Gmail" />
                  <SubmitButton>Join</SubmitButton>
                  <button type="button" className="text-xs text-muted-foreground underline ml-2" onClick={() => setStep(1)}>
                    back
                  </button>
                </form>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}