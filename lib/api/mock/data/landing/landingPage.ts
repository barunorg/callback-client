export const problemCards = [
  {
    icon: "ghost",
    title: "Ghost jobs everywhere",
    description:
      "A huge share of postings are stale, fake, or never meant to hire. You can’t tell — until you’ve wasted an evening.",
  },
  {
    icon: "clock",
    title: "No time between classes",
    description:
      "10 quality applications a day is a part-time job. Students are already at capacity.",
  },
  {
    icon: "shield",
    title: "Scams target students",
    description:
      "Visa-bait and fee scams prey on international candidates who need offers fast.",
  },
  {
    icon: "mail",
    title: "Easy Apply is a black hole",
    description:
      "One posting, 3,000 clicks. Untailored blasts get a ~2% reply rate.",
  },
] as const;

export const applicationSteps = [
  {
    number: "1",
    title: "Scan every source",
    description:
      "Job boards, careers pages, university portals — matched against your profile, visa needs, and target roles.",
  },
  {
    number: "2",
    title: "Screen the company",
    description:
      "Domain age, careers page, employee activity, reposting history. Ghosts and scams never reach you.",
  },
  {
    number: "3",
    title: "Tailor & find the human",
    description:
      "Resume reordered per JD, message written in your voice, recruiter’s real email found and verified.",
  },
  {
    number: "4",
    title: "You approve, it sends",
    description:
      "One-by-one, daily batch, or full autopilot within your rules. Follow-ups go out if they stay quiet.",
  },
] as const;

export const comparisonCards = [
  {
    label: "MASS-APPLY BOTS",
    metric: "Applications sent",
    description:
      "A thousand identical form-fills. Recruiters can smell it — and LinkedIn restricts accounts for it.",
    highlighted: false,
  },
  {
    label: "TRACKERS & RESUME SCANNERS",
    metric: "Your paperwork",
    description:
      "Tidy boards and keyword scores. You still do every application yourself, every night.",
    highlighted: false,
  },
  {
    label: "CALLBACK",
    metric: "Replies from humans",
    description:
      "Fewer, better sends — verified companies, named recruiters, your voice, warm alumni paths.",
    highlighted: true,
  },
] as const;

export const comparisonRows = [
  {
    label: "Optimizes for",
    others: "Applications sent — a vanity number",
    callback: "Replies from real humans",
  },
  {
    label: "Before applying",
    others: "Applies to whatever matches keywords",
    callback:
      "Ghost Shield vets every company — domain, careers page, posting history",
  },
  {
    label: "Reaching people",
    others: "Form-fills + templated blasts",
    callback: "Named recruiter emails, or referrals through your alumni",
  },
  {
    label: "Your resume",
    others: "Keyword-stuffed to game ATS scores",
    callback: "Re-tailored per JD with GitHub proof — honest gaps stay visible",
  },
  {
    label: "Your accounts",
    others: "Bots run inside LinkedIn; accounts get restricted",
    callback: "Sends from your own Gmail — nothing to flag or ban",
  },
  {
    label: "After you apply",
    others: "A log line: “submitted”",
    callback: "Journey tracking — delivered, opened, forwarded, ATS stage",
  },
  {
    label: "When they reply",
    others: "You’re on your own",
    callback: "Auto interview prep + an AI mock call before the real one",
  },
] as const;

export const callbackPrinciples = [
  "bot inside LinkedIn",
  "keyword-stuff your resume",
  "send without your approval",
  "celebrate vanity volume",
] as const;

export const ghostShieldChecks = [
  "Company domain age and legitimacy check",
  "Careers page and live posting cross-reference",
  "Employee activity on LinkedIn — real people, recent posts",
  "Reposting pattern detection (evergreen “always hiring” ads)",
  "Scam-language screening: fees, crypto pay, instant offers",
] as const;

export const trustReportRows = [
  {
    check: "Company domain",
    result: "Registered 3 weeks ago",
    severity: "high",
  },
  { check: "Careers page", result: "None found", severity: "high" },
  {
    check: "Employees on LinkedIn",
    result: "0 active profiles",
    severity: "high",
  },
  {
    check: "Posting history",
    result: "Reposted 7× in 90 days",
    severity: "medium",
  },
  {
    check: "Job description",
    result: "Copied from another listing",
    severity: "medium",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Three interviews in my first two weeks. I’d spent four months getting nothing.",
    detail:
      "Priya was juggling a TA job and thesis work. Callback sent 212 tailored applications while she taught — she spent under 10 minutes a day approving.",
    initials: "PK",
    color: "#1E4A7A",
    name: "Priya K.",
    role: "MSc CS, UT Dallas → Data Engineer @ fintech startup",
  },
  {
    quote: "The ghost shield saved me from a scam that almost got my roommate.",
    detail:
      "A “recruiter” asked his roommate for an equipment fee. The same company showed up in Wei’s feed — flagged and hidden, with the trust report explaining why.",
    initials: "WZ",
    color: "#4A2A7A",
    name: "Wei Z.",
    role: "MS Data Science, NEU → Analyst @ healthcare co.",
  },
  {
    quote:
      "Direct emails changed everything. Easy Apply was a black hole for me.",
    detail:
      "After 300+ Easy Apply clicks with two replies, Daniel switched channels. Callback found named recruiters for 60% of his matches — reply rate jumped to 11%.",
    initials: "DO",
    color: "#7A3A1E",
    name: "Daniel O.",
    role: "BSc SWE (international) → New Grad SWE offer",
  },
] as const;

export const careerFeatures = [
  {
    title: "The visa clock keeps ticking",
    description:
      "OPT windows, the 90-day unemployment cap, three H-1B lotteries, STEM OPT filings — tracked for years, reminders at 90/30/7 days.",
  },
  {
    title: "The 60-day safety net",
    description:
      "Laid off on H-1B, you get 60 days. One click re-activates the full search — profile, contacts and resumes kept current, not two years stale.",
  },
  {
    title: "You become the warm path",
    description:
      "Juniors from your school find you the way you found alumni. Intro drafts ready — and referral bonuses at your company go to you.",
  },
  {
    title: "Promotion packet on autopilot",
    description:
      "Log wins in 30 seconds as they happen. By review season the brag doc — and your market-value benchmark — is already written.",
  },
] as const;

export const pricingPlans = [
  {
    name: "Free",
    audience: "Test the waters, calibrate your matches.",
    price: "$0",
    billing: "forever",
    features: [
      "5 applications / day",
      "Ghost shield on every listing",
      "Match scoring & job feed",
      "Manual approve, basic tracker",
    ],
    action: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    audience: "The serious search. Most students choose this.",
    price: "$9",
    billing: "/mo · student rate",
    features: [
      "25 applications / day",
      "Deep AI tailoring + AI Enhance messages",
      "Recruiter email finder & verification",
      "Callback-chance prediction on every match",
      "Agent mode — auto-applies within your rules",
      "Warm alumni paths + interview prep sheets",
      "Auto follow-ups + full analytics",
      "Career mode after you sign — drops to $3/mo",
    ],
    action: "Go Pro",
    highlighted: true,
  },
  {
    name: "Placement+",
    audience: "Deadline pressure — OPT clock ticking.",
    price: "$19",
    billing: "/mo",
    features: [
      "Unlimited applications",
      "AI mock interviews before every real call",
      "Human review of your top 5 resumes",
      "Priority new-posting alerts (< 1 hr)",
    ],
    action: "Get Placement+",
    highlighted: false,
  },
] as const;
