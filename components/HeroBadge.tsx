type HeroBadgeProps = {
  className?: string;
};

export default function HeroBadge({ className = '' }: HeroBadgeProps) {
  return (
    <div
      className={`hero-faith-badge inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 shadow-[0_18px_60px_rgba(56,189,248,0.18)] backdrop-blur-xl ${className}`}
    >
      <span className="hero-faith-badge-dot h-2 w-2 rounded-full bg-cyan-300" />
      <span>I Treat, He Cures</span>
    </div>
  );
}
