import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="#inicio" className="inline-flex items-center gap-2 font-display leading-none" aria-label="Ed Fitness — início">
      <span className="-skew-x-6 text-3xl font-black tracking-[-0.08em] text-primary">ED</span>
      <span className="max-w-12 text-sm font-extrabold leading-[.78]">FITNESS</span>
    </Link>
  );
}
