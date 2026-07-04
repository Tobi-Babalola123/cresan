import { ReactNode } from "react";
import clsx from "clsx";

interface EyebrowProps {
  children: ReactNode;
  light?: boolean;
  className?: string;
}

export default function Eyebrow({
  children,
  light = false,
  className,
}: EyebrowProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]",
        light ? "bg-white/10 text-[#C9971C]" : "bg-[#0F5B3A]/10 text-[#0F5B3A]",
        className,
      )}
    >
      {children}
    </span>
  );
}
