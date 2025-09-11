"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { CTASectionProps } from "@/lib/types";
import { addToWaitlist } from "@/app/actions/waitlist";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Loader2 } from "lucide-react";

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  
  return (
    <ShinyButton
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          Processing...
        </span>
      ) : (
        children
      )}
    </ShinyButton>
  );
}

export default function CTASection({ 
  emailPlaceholder, 
  buttonText, 
  socialProofText
}: CTASectionProps) {
  const [state, formAction] = useActionState(addToWaitlist, null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
    } else if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <section className="relative flex flex-col items-center justify-start px-6 pb-12">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <form action={formAction} className="w-full max-w-lg mx-auto">
          <div className="flex flex-col items-stretch gap-4">
            <Input
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              required
              className="h-14 text-base bg-white/95 border-zinc-300 text-zinc-900 placeholder:text-zinc-500 focus-visible:ring-zinc-400/30 focus-visible:border-zinc-400 backdrop-blur-md shadow-lg"
            />
            
            <SubmitButton>
              {buttonText}
            </SubmitButton>
          </div>
        </form>
        
        {socialProofText && (
          <p className="text-sm text-muted-foreground mt-3">
            <span className="font-medium text-foreground">{socialProofText}</span>
          </p>
        )}
      </div>
      
    </section>
  );
}