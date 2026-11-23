export default function UserAvatar({ initials }: { initials: string }) {
  return (
    <span
      aria-hidden="true"
      className="grid size-8 shrink-0 place-items-center rounded-full bg-[#2C4A3A] text-[11.5px] font-bold text-white"
    >
      {initials}
    </span>
  );
}
