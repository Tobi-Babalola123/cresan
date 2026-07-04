interface EyebrowProps {
  children: React.ReactNode;
}

export default function Eyebrow({ children }: EyebrowProps) {
  return (
    <span className="inline-flex items-center gap-2 text-[#C9971C] text-[11px] font-bold tracking-[0.22em] uppercase mb-5">
      <span className="w-8 h-px bg-[#C9971C]" />
      {children}
    </span>
  );
}
