import type { DocumentsData } from "@/types/workspace/documents";

export const documentsFixture: DocumentsData = {
  resumeVersions: [
    {
      id: "data-eng",
      name: "Data Engineering — base",
      tag: "BEST · 9.1% reply",
      stat: "used as base for 34 tailored copies",
      isBest: true,
    },
    {
      id: "backend",
      name: "Backend / SWE — base",
      stat: "used for 21 copies · 6.4% reply",
      isBest: false,
    },
    {
      id: "ml",
      name: "ML / Research — base",
      stat: "used for 12 copies · 7.2% reply",
      isBest: false,
    },
  ],
  workAuthorization: [
    {
      id: "i20",
      name: "Form I-20",
      note: "current · expires May 2027",
      status: "ON FILE",
      icon: "graduation",
      iconColor: "#1E4A7A",
    },
    {
      id: "ead",
      name: "EAD card (OPT)",
      note: "add after OPT approval",
      status: "PENDING",
      icon: "id-card",
      iconColor: "#4A2A7A",
    },
    {
      id: "transcript",
      name: "Unofficial transcript",
      note: "GPA 3.9 · some portals request it",
      status: "ON FILE",
      icon: "file",
      iconColor: "#2C4A3A",
    },
  ],
  coverLetters: [
    {
      id: "datavine",
      name: "Datavine — Data Engineer",
      stat: "generated Jul 1 · edited by you",
    },
    {
      id: "harborlight",
      name: "Harborlight — New Grad SWE",
      stat: "generated Jun 28",
    },
  ],
  portfolio: [
    {
      id: "github",
      kind: "LINK",
      name: "github.com/prakash-r",
      meta: "12 repos",
    },
    {
      id: "portfolio",
      kind: "LINK",
      name: "prakash.dev — portfolio",
      meta: "Next.js",
    },
    {
      id: "lang",
      kind: "REF",
      name: "Dr. Lang — thesis advisor",
      meta: "contacted 0×",
    },
    {
      id: "priya",
      kind: "REF",
      name: "Priya M. — internship lead",
      meta: "contacted 1×",
    },
  ],
};
