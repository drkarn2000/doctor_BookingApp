'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'My Services', href: '/services' },
  { label: 'Book', href: '/book' },
  { label: 'Contact', href: '/contact' },
  { label: 'Login', href: '/auth' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === '/' ? pathname === href : pathname.startsWith(href));

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 md:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M7 12h13M10 17h10" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-3 right-3 top-full mt-3 overflow-hidden rounded-[1.5rem] border border-white/15 bg-slate-950/95 text-white shadow-[0_28px_90px_rgba(2,6,23,0.48)] backdrop-blur-2xl md:hidden">
          <div className="border-b border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">GP Consulting</p>
            <p className="mt-2 text-sm text-slate-300">Premium primary care, wherever you are.</p>
          </div>

          <div className="flex flex-col space-y-2 px-4 py-4">
            <div className="mb-1 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-slate-200">
              <span className="inline-flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
                Available for virtual visits
              </span>
              <span className="text-xs uppercase tracking-[0.22em] text-cyan-200">Today</span>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition duration-300 ${
                  isActive(item.href)
                    ? 'border-cyan-300/40 bg-cyan-300/15 text-cyan-100 shadow-[0_16px_40px_rgba(56,189,248,0.12)]'
                    : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_18px_55px_rgba(56,189,248,0.28)] transition hover:-translate-y-0.5"
            >
              <span className="h-2 w-2 rounded-full bg-slate-950/70" />
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
