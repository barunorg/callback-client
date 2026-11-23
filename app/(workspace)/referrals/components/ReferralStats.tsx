import { cn } from "@/lib/utils";
import type { ReferralsData } from "@/types/workspace/referrals";

export default function ReferralStats({
  stats,
}: {
  stats: ReferralsData["stats"];
}) {
  const items = [
    { value: String(stats.alumniFound), label: `${stats.school} alumni found` },
    { value: String(stats.targetCompanies), label: "of your target companies" },
    {
      value: stats.replyRate,
      label: "referral reply rate",
      isHighlighted: true,
    },
  ];

  return (
    <section
      aria-label="Referral network"
      className="mb-4 rounded-xl border border-[#DED9CC] bg-[#FBFAF7] px-5 py-4"
    >
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <strong
              className={cn(
                "font-heading text-[22px] font-extrabold",
                item.isHighlighted && "text-[#1E7A4F]",
              )}
            >
              {item.value}
            </strong>
            <span className="ml-1.75 text-xs text-[#6B7A6E]">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
