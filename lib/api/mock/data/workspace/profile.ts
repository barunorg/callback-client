import type { ProfileData } from "@/types/workspace/profile";

export const profileFixture: ProfileData = {
  setupSteps: [
    {
      id: "resume",
      title: "Resume uploaded",
      detail:
        "prakash_resume_2026.pdf · parsed 14 skills, 3 projects, 1 internship",
      isDone: true,
    },
    {
      id: "targets",
      title: "Target roles & locations",
      detail: "Data Engineer, Backend SWE, ML Intern · Austin, Remote US",
      isDone: true,
    },
    {
      id: "visa",
      title: "Visa & work authorization",
      detail:
        "F-1 · CPT now, OPT from May 2027 · needs future H-1B sponsorship",
      isDone: true,
    },
    {
      id: "style",
      title: "Writing style sample",
      detail: "add a cover letter you’ve written so messages sound like you",
      isDone: false,
    },
  ],
  vaultFields: [
    { id: "phone", label: "Phone", value: "+1 (512) 555-0148", status: "SET" },
    {
      id: "address",
      label: "Address",
      value: "Austin, TX 78712",
      status: "SET",
    },
    {
      id: "salary",
      label: "Desired salary",
      value: "$115k (market-aware)",
      status: "SET",
    },
    {
      id: "notice",
      label: "Notice period",
      value: "Available May 2027",
      status: "SET",
    },
    {
      id: "source",
      label: "“How did you hear about us?”",
      value: "Referral / company site",
      status: "SET",
    },
    {
      id: "why",
      label: "“Why do you want to work here?”",
      value: "Auto-drafted per company",
      status: "AUTO",
    },
    {
      id: "references",
      label: "References (3)",
      value: "2 saved · add 1 more",
      status: "PARTIAL",
    },
    {
      id: "eeo",
      label: "Demographic / EEO",
      value: "Off — add if you choose",
      status: "OPTIONAL",
    },
  ],
};
