export default function NegotiationFigure({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-[11px] border border-[#E6E1D5] bg-white px-3.75 py-3.25">
      <dt className="mb-1 text-[10.5px] font-extrabold tracking-wider text-[#9A9384]">
        {label}
      </dt>
      <dd className="font-heading text-[22px] font-extrabold">{value}</dd>
      <dd className="mt-0.5 text-[11px] text-[#6B7A6E]">{detail}</dd>
    </div>
  );
}
