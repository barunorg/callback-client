import type { InterviewPrep, TrackerColumn } from "@/types/workspace/tracker";

export const trackerFixture: TrackerColumn[] = [
  {
    id: "applied",
    title: "APPLIED",
    count: "48",
    isHighlighted: false,
    cards: [
      {
        id: "fieldstone",
        role: "Backend Engineer",
        company: "Fieldstone",
        age: "2d ago",
        note: "Follow-up scheduled for Jul 7 if no reply",
        noteTone: "amber",
        stage: "ATS · Application Review",
        hasPrep: false,
        journey: [
          {
            state: "done",
            label: "Tailored & approved by you",
            detail: "Resume v3 — Airflow bullets surfaced for their stack",
            time: "Jul 1, 8:40 AM",
          },
          {
            state: "done",
            label: "Sent from your Gmail",
            detail: "to recruiting@fieldstone.dev · resume + note attached",
            time: "Jul 1, 4:02 PM",
          },
          {
            state: "done",
            label: "Delivered · opened once",
            detail: "Jul 2, 9:15 AM on desktop — no reply yet",
            time: "Jul 2",
          },
          {
            state: "current",
            label: "In ATS: “Application Review”",
            detail: "stage read from their Greenhouse portal",
            time: "now",
          },
          {
            state: "pending",
            label: "Auto follow-up",
            detail: "polite nudge, resume re-attached — sends Jul 7 if quiet",
            time: "scheduled",
          },
        ],
      },
      {
        id: "merrow",
        role: "Data Analyst",
        company: "Merrow Health",
        age: "4d ago",
        stage: "Delivered",
        hasPrep: false,
        journey: [
          {
            state: "done",
            label: "Tailored & sent",
            detail: "via careers portal",
            time: "Jun 29",
          },
          {
            state: "done",
            label: "Delivered",
            detail: "confirmation email received",
            time: "Jun 29",
          },
          {
            state: "current",
            label: "Waiting",
            detail: "day 4 of 5 before auto follow-up",
            time: "now",
          },
        ],
      },
      {
        id: "quill",
        role: "SWE New Grad",
        company: "Quill & Co",
        age: "5d ago",
        stage: "Delivered",
        hasPrep: false,
        journey: [
          {
            state: "done",
            label: "Tailored & sent",
            detail: "direct email to the hiring manager",
            time: "Jun 28",
          },
          {
            state: "done",
            label: "Delivered",
            detail: "no open detected yet",
            time: "Jun 28",
          },
          {
            state: "current",
            label: "Waiting",
            detail: "follow-up drafts tomorrow",
            time: "now",
          },
        ],
      },
    ],
  },
  {
    id: "viewed",
    title: "VIEWED",
    count: "12",
    isHighlighted: false,
    cards: [
      {
        id: "harborlight",
        role: "SWE New Grad",
        company: "Harborlight",
        age: "viewed 3× today",
        note: "Hot — follow-up drafted for 9am tomorrow",
        noteTone: "green",
        stage: "Opened 3× · forwarded internally",
        hasPrep: false,
        journey: [
          {
            state: "done",
            label: "Tailored & approved",
            detail: "Go microservices project led the message",
            time: "Jun 28, 9:14 AM",
          },
          {
            state: "done",
            label: "Sent — portal + recruiter email",
            detail: "both channels, one application",
            time: "Jun 28, 9:15 AM",
          },
          {
            state: "done",
            label: "Opened 3× today",
            detail: "9:02, 11:47, 2:31 — different devices",
            time: "today",
          },
          {
            state: "current",
            label: "Forwarded internally",
            detail: "second reader detected — usually the hiring manager",
            time: "2:31 PM",
          },
          {
            state: "pending",
            label: "Follow-up",
            detail: "queued for 9:00 AM tomorrow unless they reply first",
            time: "scheduled",
          },
        ],
      },
      {
        id: "ostro",
        role: "Platform Intern",
        company: "Ostro",
        age: "viewed 1d ago",
        stage: "Opened once",
        hasPrep: false,
        journey: [
          {
            state: "done",
            label: "Sent",
            detail: "direct email",
            time: "Jun 30",
          },
          {
            state: "done",
            label: "Opened once",
            detail: "Jul 2, on mobile",
            time: "Jul 2",
          },
          {
            state: "current",
            label: "Waiting",
            detail: "no second open yet",
            time: "now",
          },
        ],
      },
    ],
  },
  {
    id: "replied",
    title: "REPLIED / INTERVIEW",
    count: "3",
    isHighlighted: true,
    cards: [
      {
        id: "cortexa",
        role: "ML Intern",
        company: "Cortexa Labs",
        age: "replied 2h ago",
        note: "“Free Thursday for a call?” — reply drafted",
        noteTone: "green",
        stage: "Reply received — call Thursday",
        hasPrep: true,
        journey: [
          {
            state: "done",
            label: "Tailored & sent",
            detail: "thesis-first message to j.alvarez",
            time: "Jul 1",
          },
          {
            state: "done",
            label: "Opened twice",
            detail: "Jul 1 + Jul 3 morning",
            time: "Jul 3",
          },
          {
            state: "done",
            label: "Reply received",
            detail: "“Free Thursday for a quick call?”",
            time: "2:14 PM",
          },
          {
            state: "current",
            label: "Prep sheet generated",
            detail: "from your resume + their JD · mock call available",
            time: "2:20 PM",
          },
          {
            state: "pending",
            label: "Thursday call",
            detail: "20 min with Jordan Alvarez · hold 3:30 PM",
            time: "Thu",
          },
        ],
      },
      {
        id: "brightpath",
        role: "Data Engineer",
        company: "Brightpath",
        age: "phone screen Jul 8",
        note: "Prep sheet ready: 6 likely questions",
        noteTone: "blue",
        stage: "Phone screen Jul 8",
        hasPrep: true,
        journey: [
          {
            state: "done",
            label: "Sent + replied",
            detail: "recruiter scheduled a phone screen",
            time: "Jun 27",
          },
          {
            state: "current",
            label: "Phone screen Jul 8",
            detail: "prep sheet ready · calendar held",
            time: "Jul 8",
          },
          {
            state: "pending",
            label: "Onsite loop",
            detail: "if the screen goes well",
            time: "—",
          },
        ],
      },
    ],
  },
  {
    id: "closed",
    title: "CLOSED / GHOSTED",
    count: "31",
    isHighlighted: false,
    cards: [
      {
        id: "vantiq",
        role: "Frontend Eng",
        company: "Vantiq Labs",
        age: "no reply, 21d",
        note: "Marked ghosted — company deprioritized in matching",
        noteTone: "red",
        stage: "Ghosted after 2 follow-ups",
        hasPrep: false,
        journey: [
          {
            state: "done",
            label: "Sent + 2 follow-ups",
            detail: "Jun 12 · Jun 17 · Jun 24",
            time: "Jun",
          },
          {
            state: "done",
            label: "Never opened",
            detail: "all three unopened",
            time: "—",
          },
          {
            state: "current",
            label: "Marked ghosted",
            detail: "Vantiq deprioritized across all Callback users",
            time: "Jul 3",
          },
        ],
      },
      {
        id: "solent",
        role: "QA Engineer",
        company: "Solent",
        age: "rejected 3d ago",
        stage: "Rejected — kind reply",
        hasPrep: false,
        journey: [
          {
            state: "done",
            label: "Sent",
            detail: "via portal",
            time: "Jun 20",
          },
          {
            state: "done",
            label: "Rejected",
            detail: "template reply · logged for analytics",
            time: "Jun 30",
          },
          {
            state: "current",
            label: "Closed",
            detail: "kept for your reply-rate benchmarks",
            time: "—",
          },
        ],
      },
    ],
  },
];

export const interviewPrepFixture: InterviewPrep = {
  company: "Cortexa Labs",
  meta: "Thursday · 20-min call · Jordan Alvarez (Recruiting) · ML Engineering Intern",
  questions: [
    "Walk me through a data pipeline you’ve built end to end.",
    "How would you cut GPU cost on a fine-tuning run?",
    "Tell me about debugging a training job that wouldn’t converge.",
    "Why Cortexa — and why now, mid-degree?",
  ],
  stories: [
    {
      title: "Capstone: 2M events/day, 94 days zero failures",
      source: "from GitHub · pipeline-airflow",
    },
    {
      title: "Thesis: LoRA fine-tuning, −38% GPU hours",
      source: "from resume · thesis",
    },
    {
      title: "Internship: ETL runtime cut 40%",
      source: "from resume · Kinship Labs",
    },
  ],
  gap: "the JD mentions Triton kernels — not on your resume. A 2-hour primer is queued in your plan for Wednesday evening.",
  about:
    "8 months old, funded, active GitHub (147★). Jordan replied to 2 candidates this month — fast mover; expect a scheduling link same-day.",
  holdSlotLabel: "Hold Thursday 3:30 PM",
};
