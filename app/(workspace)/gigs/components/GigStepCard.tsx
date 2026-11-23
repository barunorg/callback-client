export default function GigStepCard({
  title,
  detail,
}: {
  title: string;
  detail: string;
}) {
  return (
    <li className="rounded-[13px] border border-[#DED9CC] bg-[#FBFAF7] px-4.5 py-4">
      <h2 className="mb-1.25 text-[12.5px] font-bold">{title}</h2>
      <p className="text-[11.5px] leading-normal text-[#6B7A6E]">{detail}</p>
    </li>
  );
}
