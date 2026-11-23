export default function QueueEmptyState({ sentToday }: { sentToday: number }) {
  return (
    <section className="rounded-xl border border-dashed border-[#CFC9BA] bg-[#FBFAF7] p-12 text-center">
      <h2 className="mb-1.5 font-heading text-[19px] font-semibold">
        Queue cleared
      </h2>
      <p className="text-[13px] text-[#6B7A6E]">
        All {sentToday} applications sent. Next sweep brings fresh matches in 42
        minutes.
      </p>
    </section>
  );
}
