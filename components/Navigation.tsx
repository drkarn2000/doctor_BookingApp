'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Doctor', href: '/doctors' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === '/' ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"></div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 font-semibold text-slate-900">
          <span className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition group-hover:-translate-y-0.5 group-hover:shadow-[0_18px_45px_rgba(3,166,136,0.16)]">
            <img src="/gp-logo.svg" alt="GP Consulting Solutions" className="h-12 w-auto max-w-[220px] object-contain" />
          </span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`relative rounded-full px-4 py-2 transition ${
                isActive(item.href)
                  ? 'bg-slate-950 text-white shadow-[0_12px_28px_rgba(15,23,42,0.18)]'
                  : 'hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="relative hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 hover:text-primary md:inline-flex"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0a3 3 0 0 1-6 0m6 0H9"
              />
            </svg>
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary ring-2 ring-white" />
          </button>
          <Link
            href="/auth"
            aria-current={isActive('/auth') ? 'page' : undefined}
            className={`hidden rounded-full border px-5 py-2.5 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 md:inline-flex ${
              isActive('/auth')
                ? 'border-slate-950 bg-slate-950 text-white'
                : 'border-slate-200/80 bg-white/80 text-slate-800 hover:border-primary/30 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            Login
          </Link>
          <Link
            href="/book"
            aria-current={isActive('/book') ? 'page' : undefined}
            className={`hidden rounded-full px-5 py-2.5 text-sm font-bold shadow-[0_14px_34px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 md:inline-flex ${
              isActive('/book')
                ? 'bg-primary text-white shadow-[0_18px_42px_rgba(3,166,136,0.3)]'
                : 'bg-slate-950 text-white hover:bg-primary hover:shadow-[0_18px_42px_rgba(3,166,136,0.28)]'
            }`}
          >
            Book Appointment
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
