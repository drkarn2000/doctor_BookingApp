import Link from 'next/link';
import { siteSectionOverlay } from '@/app/siteBackground';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'My Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const BG_IMAGE =
  'https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className={`absolute inset-0 ${siteSectionOverlay}`} />
      <div className="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]" />
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main footer card with background image */}
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 shadow-[0_45px_140px_rgba(2,6,23,0.42)]">
          {/* Background image */}
          <img
            src={BG_IMAGE}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-slate-950/40" />

          {/* Content grid — sits above the image */}
          <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            {/* Left column */}
            <div>
              <div className="inline-flex rounded-2xl border border-white/20 bg-white/95 p-2 shadow-xl">
                <img src="/gp-logo.svg" alt="GP Consulting Solutions" className="h-16 w-auto object-contain" />
              </div>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
                GP Consulting Solutions delivers a refined primary care consultation experience with one dedicated GP, secure digital access, and clear patient support.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {['Dedicated GP', 'Secure visits', 'Patient support'].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm font-semibold text-slate-100 shadow-[0_18px_50px_rgba(2,6,23,0.16)] backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Navigation</p>
                <div className="mt-5 grid gap-3">
                  {footerLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-200">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
                <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                  <p>support@gpprimarycare.com</p>
                  <p>+1 234 567 8900</p>
                  <p>182 Healthcare St, New York, NY 10001</p>
                </div>
                <Link
                  href="/book"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_18px_55px_rgba(56,189,248,0.22)] transition hover:bg-cyan-300"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 px-6 py-5 text-sm text-slate-300 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright 2026{' '}
            <a
              href="https://reinsoft.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-200 transition hover:text-white"
            >
              ReinSoft It Solutions
            </a>
            . All rights reserved.
          </p>
          <p>Empowering Primary Care Excellence</p>
        </div>
      </div>
    </footer>
  );
}
