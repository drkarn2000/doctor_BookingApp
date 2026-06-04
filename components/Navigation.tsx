'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'My Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === '/' ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div className="mx-auto max-w-[95rem] overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-950/82 text-white shadow-[0_24px_90px_rgba(2,6,23,0.32)] backdrop-blur-2xl">
        <div className="hidden items-center justify-between border-b border-white/10 bg-white/[0.03] px-6 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-300 lg:flex">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
            Private GP care, made effortless
          </span>
          <span className="text-cyan-200">Video visits | Primary care | Follow-up support</span>
        </div>

        <div className="relative flex items-center justify-between px-4 py-3 sm:px-5 lg:px-6">
          <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

          <Link href="/" className="group flex items-center gap-3 font-semibold">
            <span className="relative overflow-hidden rounded-2xl border border-white/15 bg-white p-1.5 shadow-[0_18px_55px_rgba(56,189,248,0.12)] transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_22px_70px_rgba(56,189,248,0.22)]">
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-cyan-50 to-white" />
              <img src="/gp-logo.svg" alt="GP Consulting Solutions" className="relative h-11 w-auto max-w-[210px] object-contain sm:h-12" />
            </span>
            <span className="hidden leading-tight xl:block">
              <span className="block text-xs uppercase tracking-[0.32em] text-cyan-200">Primary Care</span>
              <span className="block text-sm font-semibold text-white">GP Consulting Solutions</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1.5 text-sm font-semibold text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`relative rounded-full px-4 py-2.5 transition duration-300 ${
                  isActive(item.href)
                    ? 'bg-white text-slate-950 shadow-[0_16px_35px_rgba(255,255,255,0.12)]'
                    : 'hover:bg-white/10 hover:text-white'
                }`}
              >
                {isActive(item.href) && (
                  <span className="absolute inset-x-4 -bottom-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                )}
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/auth"
              aria-current={isActive('/auth') ? 'page' : undefined}
              className={`hidden rounded-full border px-5 py-2.5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 lg:inline-flex ${
                isActive('/auth')
                  ? 'border-cyan-300/60 bg-cyan-300/15 text-cyan-100'
                  : 'border-white/10 bg-white/[0.06] text-slate-200 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white'
              }`}
            >
              Login
            </Link>
            <Link
              href="/book"
              aria-current={isActive('/book') ? 'page' : undefined}
              className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 md:inline-flex ${
                isActive('/book')
                  ? 'bg-cyan-300 text-slate-950 shadow-[0_18px_50px_rgba(103,232,249,0.3)]'
                  : 'bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 text-slate-950 shadow-[0_18px_55px_rgba(56,189,248,0.26)] hover:shadow-[0_24px_70px_rgba(56,189,248,0.34)]'
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-slate-950/70" />
              Book Appointment
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
