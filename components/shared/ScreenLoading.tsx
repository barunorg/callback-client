/** Skeleton shown by each route's loading.tsx while its data streams in. */
export default function ScreenLoading({ label }: { label: string }) {
  return (
    <div role="status" aria-live="polite" className="max-w-260 animate-pulse">
      <span className="sr-only">{label}</span>
      <div className="mb-2 h-3 w-40 rounded bg-[#DED9CC]" />
      <div className="mb-3 h-8 w-72 max-w-full rounded-lg bg-[#DED9CC]" />
      <div className="mb-6 h-3.5 w-96 max-w-full rounded bg-[#E6E1D5]" />
      <div className="mb-4 grid grid-cols-2 gap-3.5 xl:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="h-27 rounded-[14px] border border-[#DED9CC] bg-[#FBFAF7]"
          />
        ))}
      </div>
      <div className="h-72 rounded-[14px] border border-[#DED9CC] bg-[#FBFAF7]" />
    </div>
  );
}
