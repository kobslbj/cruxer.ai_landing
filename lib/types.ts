export interface HeroSectionProps {
  headline: string;
  description: string;
}

export interface CTASectionProps {
  emailPlaceholder: string;
  buttonText: string;
  socialProofText: string;
}

export interface FormState {
  email: string;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error?: string;
}

export interface WaitingListEntry {
  id: number;
  email: string | null;
  created_at: string;
}

export type ActionResult = {
  success: boolean;
  message: string;
  data?: WaitingListEntry;
}