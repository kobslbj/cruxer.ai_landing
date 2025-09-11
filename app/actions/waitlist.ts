"use server";

import { supabase } from "@/lib/supabase";
import { ActionResult } from "@/lib/types";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function parseBudget(raw: unknown): number | null {
  if (typeof raw !== "string") return null;
  const cleaned = raw.replace(/,/g, "");
  const match = cleaned.match(/-?\d+(?:\.\d+)?/);
  if (!match) return null;
  const value = parseFloat(match[0]);
  if (!isFinite(value) || value < 0) return null;
  return value;
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const { count, error } = await supabase
      .from("waiting_list")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Error fetching waitlist count:", error);
      return 0;
    }

    return count || 0;
  } catch (error) {
    console.error("Unexpected error:", error);
    return 0;
  }
}

export async function addToWaitlist(_prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  const email = formData.get("email") as string;
  const budgetRaw = formData.get("budget");
  const budget = parseBudget(budgetRaw);

  if (!email) {
    return {
      success: false,
      message: "Email is required"
    };
  }

  if (!isValidEmail(email)) {
    return {
      success: false,
      message: "Please enter a valid email address"
    };
  }

  try {
    // Always insert new email (allow duplicates)
    const insertPayload: Record<string, unknown> = {
      email: email.toLowerCase().trim(),
    };
    if (budget !== null) {
      insertPayload.budget = budget;
    }

    const { data, error } = await supabase
      .from("waiting_list")
      .insert(insertPayload)
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      // Unique constraint violation -> already on the list
      if ((error as { code?: string }).code === "23505") {
        return {
          success: true,
          message: "You're all set! We've already got your email saved.",
          title: "You're all set!",
          description: "We see you're excited. We've already got your email saved.",
        };
      }
      return {
        success: false,
        message: "Something went wrong. Please try again."
      };
    }

    return {
      success: true,
      message: "🎉 Welcome to the Founding Members!",
      title: "Welcome to the Founding Members!",
      description: "We'll notify you as soon as early access is available.",
      data
    };

  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again."
    };
  }
}