"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { CTASectionProps } from "@/lib/types";
import { addToWaitlist } from "@/app/actions/waitlist";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  
  return (
    <Button
      className="md:h-14 md:px-6 whitespace-nowrap bg-black border-black cursor-pointer"
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2 text-white">
          <Loader2 className="h-5 w-5 animate-spin" />
          Processing...
        </span>
      ) : (
        <span className="block w-full  text-white">{children}</span>
      )}
    </Button>
  );
}

export default function CTASection({ 
  emailPlaceholder, 
  buttonText, 
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
      <div className="mx-auto w-full max-w-3xl text-center">
        <form action={formAction} className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <Input
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              required
              aria-label="Email address"
              className="h-14 md:h-14 flex-1 min-w-0 text-base bg-white/95 border-zinc-300 text-zinc-900 placeholder:text-zinc-500 focus-visible:ring-zinc-400/30 focus-visible:border-zinc-400 backdrop-blur-md shadow-lg"
            />
            
            <SubmitButton>
              {buttonText}
            </SubmitButton>
          </div>
        </form>
      </div>
      
    </section>
  );
}