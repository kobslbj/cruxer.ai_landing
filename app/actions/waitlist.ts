"use server";

import { supabase } from "@/lib/supabase";
import { ActionResult } from "@/lib/types";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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
    const { data, error } = await supabase
      .from("waiting_list")
      .insert({ email: email.toLowerCase().trim() })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again."
      };
    }

    return {
      success: true,
      message: "🎉 Welcome to the Founding Members! We'll notify you as soon as early access is available.",
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