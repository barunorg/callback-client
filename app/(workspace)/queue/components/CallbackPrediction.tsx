export default function CallbackPrediction({
  isPro,
  chance,
  note,
  onUnlock,
}: {
  isPro: boolean;
  chance: string;
  note: string;
  onUnlock: () => void;
}) {
  if (isPro) {
    return (
      <p className="mt-2 rounded-lg bg-[#E9F0F8] px-3.25 py-2.75 text-xs leading-normal text-[#1E4A7A]">
        Predicted callback: <strong>{chance}</strong> — {note}
      </p>
    );
  }

  return (
    <button
      type="button"
      onClick={onUnlock}
      className="mt-2 w-full rounded-lg border border-dashed border-[#C9C2B0] bg-[#EDEAE0] px-3.25 py-2.75 text-left text-xs leading-normal text-[#6B7A6E] transition-colors hover:bg-[#E6E1D5]"
    >
      <strong>Callback prediction</strong> ranks every match by reply likelihood
      — Pro feature. Tap to unlock.
    </button>
  );
}
