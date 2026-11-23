import type { StatusTone } from "@/types/workspace/common";

/** Text colour of short status notes (tracker cards, referral rows). */
export const noteTextClasses: Record<StatusTone, string> = {
  amber: "text-[#6B5A22]",
  green: "text-[#1E7A4F]",
  blue: "text-[#1E4A7A]",
  red: "text-[#B4483A]",
  neutral: "text-[#6B7A6E]",
};

/** Background of highlighted status notes. */
export const noteBackgroundClasses: Record<StatusTone, string> = {
  amber: "bg-[#FFF7E6]",
  green: "bg-[#EFF5EF]",
  blue: "bg-[#E9F0F8]",
  red: "bg-[#FBEAE7]",
  neutral: "bg-[#EDEAE0]",
};
