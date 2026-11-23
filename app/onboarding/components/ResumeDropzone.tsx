"use client";

import { Upload } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

/** Click-to-browse or drag-and-drop resume picker (native file input). */
export default function ResumeDropzone({
  onFileSelected,
}: {
  onFileSelected: (file: File) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <label
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(event) => {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0];
        if (file) onFileSelected(file);
      }}
      className={cn(
        "block cursor-pointer rounded-2xl border-[1.5px] border-dashed px-6 py-13 text-center transition-colors has-focus-visible:ring-2 has-focus-visible:ring-[#1E7A4F]/40",
        isDragging
          ? "border-[#1E7A4F] bg-[#EFF5EF]"
          : "border-[#B8B19E] bg-[#F6F4EC] hover:bg-[#FBFAF7]",
      )}
    >
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="sr-only"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onFileSelected(file);
        }}
      />
      <span className="mx-auto mb-3.5 grid size-11.5 place-items-center rounded-[13px] bg-[#0F1F16] text-[#8FE388]">
        <Upload aria-hidden="true" strokeWidth={1.8} className="size-5" />
      </span>
      <span className="block text-[15px] font-bold">
        Drop your resume here, or click to browse
      </span>
      <span className="mt-1.25 block text-[12.5px] text-[#6B7A6E]">
        PDF or DOCX · parsed in seconds · never shared without approval
      </span>
    </label>
  );
}
