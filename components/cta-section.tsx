"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { CTASectionProps } from "@/lib/types";
import { addToWaitlist } from "@/app/actions/waitlist";
import { toast } from "sonner";

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="relative z-10">
        {pending ? (
          <div className="flex items-center justify-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Processing...
          </div>
        ) : (
          children
        )}
      </span>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
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
      toast.success("🎉 Welcome to the Founding Members!", {
        description: "We'll notify you as soon as early access is available.",
      });
    } else if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <section className="relative flex flex-col items-center justify-end px-6 pb-16">
      <div className="mx-auto max-w-xl space-y-4 text-center">
        <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
          Early Access Opportunity
        </div>
        
        <form action={formAction} className="space-y-3">
          <input
            type="email"
            name="email"
            placeholder={emailPlaceholder}
            required
            className="w-full rounded-full border border-border bg-background px-6 py-3 text-base placeholder:text-muted-foreground focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          
          <SubmitButton>{buttonText}</SubmitButton>
        </form>
        
        {socialProofText && (
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{socialProofText}</span>
          </p>
        )}
      </div>
      
    </section>
  );
}