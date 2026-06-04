import Link from 'next/link';
import HeroBadge from '@/components/HeroBadge';
import { siteFixedOverlay, siteSectionOverlay } from '../siteBackground';

const aboutOverlay = siteSectionOverlay;

const storyImage =
  'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=85';

const storyPoints = [
  { title: 'Dedicated GP care', desc: 'One trusted primary care doctor with years of consultation experience.' },
  { title: 'Secure and private', desc: 'Confidential communications supported by careful data handling.' },
  { title: 'Available when needed', desc: 'Reliable appointment access for everyday health questions.' },
  { title: 'Transparent care', desc: 'Clear guidance, practical next steps, and no confusing process.' },
];

const experienceCards = [
  { title: 'Instant access', desc: 'Connect with your dedicated doctor quickly and get expert advice when you need it most.' },
  { title: 'Trusted physician', desc: 'Your consultation is supported by a qualified primary care doctor focused on continuity.' },
  { title: 'Tech-enabled', desc: 'Modern video visits, secure messaging, and organized digital care workflows.' },
  { title: 'Privacy first', desc: 'Medical details are handled with strict privacy and secure communication standards.' },
  { title: 'Holistic care', desc: 'Follow-ups, lab results, and ongoing support for complete primary care.' },
  { title: 'Always available', desc: 'Healthcare that works around your schedule with flexible access.' },
];




export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className={`fixed inset-0 -z-20 ${siteFixedOverlay}`} />

      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className={`absolute inset-0 -z-10 ${aboutOverlay}`} />
        <div className="absolute left-4 top-14 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-4 top-48 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-8">
              <HeroBadge />
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200 shadow-[0_0_0_rgba(56,189,248,0.08)]">
                About GP Primary Care
              </span>
              <div className="space-y-6">
                <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-6xl">
                  Premium primary care built for modern lives.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  A refined healthcare experience with dedicated doctors, intelligent digital workflows, and fast follow-up support—all in one polished platform.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: 'Same-day triage',
                    desc: 'Quick clinical direction before care feels complicated.',
                  },
                  {
                    title: 'Doctor-led plans',
                    desc: 'Clear follow-up steps shaped by your GP.',
                  },
                  {
                    title: 'Private records',
                    desc: 'Secure care notes organized for every visit.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-[1.35rem] border border-white/10 bg-slate-900/55 p-5 shadow-[0_28px_80px_rgba(15,23,42,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-cyan-400/10"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.5)]" />
                      <span className="h-px flex-1 bg-white/10 transition duration-300 group-hover:bg-cyan-300/40" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400 transition duration-300 group-hover:text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_25px_90px_rgba(56,189,248,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_100px_rgba(56,189,248,0.32)]"
                >
                  Start Your Visit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300 hover:bg-white/15 hover:text-cyan-100"
                >
                  Talk to Us
                </Link>
              </div>
            </div>

            <div className="relative min-h-[560px]">
              <div className="group absolute right-0 top-20 hidden h-[390px] w-[55%] overflow-hidden rounded-[2rem] border-4 border-white/80 bg-slate-900 shadow-[0_35px_100px_rgba(15,23,42,0.45)] transition duration-500 hover:-translate-y-1 lg:block">
                <img
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Doctor speaking with a patient on a video call"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
              </div>

              <div className="group relative mr-0 w-full overflow-hidden rounded-[2rem] border-4 border-white/80 bg-slate-900 shadow-[0_50px_150px_rgba(15,23,42,0.55)] transition duration-500 hover:-translate-y-1 lg:w-[58%]">
                <img
                  src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Doctor consulting via video call"
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.28)]">
                  Care in motion
                </div>
                <div className="absolute bottom-20 right-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-[0_24px_70px_rgba(56,189,248,0.35)] transition duration-300 group-hover:scale-105">
                  <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-slate-950" />
                </div>
              </div>

              <div className="absolute bottom-0 left-10 right-0 rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 sm:left-20 lg:left-28">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Primary care workflow</p>
                <p className="mt-3 max-w-xl text-base font-semibold leading-7 text-white">
                  Personal care planning, video guidance, and follow-up notes arranged around one trusted doctor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-20 text-white backdrop-blur-sm lg:py-24">
        <div className={`absolute inset-0 -z-10 ${aboutOverlay}`} />
        <div className="absolute left-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-cyan-400/16 blur-3xl" />
        <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-primary/18 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[95rem] px-4 lg:px-6">
          <div className="mb-16 space-y-4 animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Why Choose Us</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Healthcare that <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">works for you</span>
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Experience healthcare designed around your lifestyle with modern technology and personalized care.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '01',
                title: 'Instant Access',
                text: 'Book appointments in seconds with clear next steps and no confusing process.',
                color: 'from-cyan-500 to-blue-500',
              },
              {
                icon: '02',
                title: 'Secure & Private',
                text: 'Confidential communication and careful handling of your medical information.',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: '03',
                title: 'Transparent Pricing',
                text: 'Simple care options with clear guidance before your consultation begins.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: '04',
                title: 'Personalized Care',
                text: 'One dedicated doctor who understands your health history and goals.',
                color: 'from-orange-500 to-red-500',
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-300/60 hover:bg-white/15 hover:shadow-[0_35px_100px_rgba(3,166,136,0.18)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 space-y-6">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${benefit.color} text-sm font-bold text-white transition-transform duration-500 group-hover:scale-110`}>
                    {benefit.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                    <p className="text-sm leading-7 text-slate-300">{benefit.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                Modern healthcare, <span className="text-cyan-400">traditional trust</span>
              </h3>
              <p className="text-lg leading-8 text-slate-300">
                We combine thoughtful technology with the personal touch of traditional healthcare, giving you reliable primary care that feels clear, calm, and connected.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Video Calls', 'Chat Support', 'Digital Records', 'Follow-up Care'].map((feature) => (
                  <div key={feature} className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  ['98%', 'Patient Satisfaction'],
                  ['24/7', 'Support Available'],
                  ['5 min', 'Average Wait Time'],
                  ['Secure', 'Private Care'],
                ].map(([value, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-4xl font-bold text-cyan-400">{value}</div>
                    <div className="mt-2 text-sm text-slate-300">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-24 lg:py-28">
        <div className={`absolute inset-0 -z-10 ${aboutOverlay}`} />
        <div className="relative mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1758691463620-188ca7c1a04f?auto=format&fit=crop&w=1400&q=85"
                alt="Doctor offering video call support"
                className="h-full w-full min-h-[560px] object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

              <div className="absolute left-6 top-6 rounded-[2rem] border border-white/20 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Video call support</p>
                <p className="mt-3 max-w-[16rem] text-base font-semibold text-white">Connect instantly with your dedicated GP from wherever you are.</p>
              </div>

              <div className="absolute left-6 bottom-6 right-6 rounded-[2rem] bg-slate-950/80 p-5 shadow-2xl backdrop-blur-xl border border-white/10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Trusted care</p>
                    <p className="mt-2 text-lg font-semibold text-white">Faster access, clearer guidance, and warm support.</p>
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/15 px-4 py-3 text-sm text-white ring-1 ring-cyan-400/30">
                    <span className="text-xl">📹</span>
                    Live telehealth visits
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <span className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">What we deliver</span>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Designed for clarity, speed, and human connection.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Every experience is crafted to remove friction from care. From doorstep appointment booking to follow-up summaries and digital prescriptions, we make healthcare feel premium and effortless.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-white">Seamless patient journeys</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">From first contact to ongoing care, every step is clear and predictable.</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-white">Smart digital tools</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Secure messaging, remote monitoring, and appointment reminders all in one place.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - redesigned */}
      <section className="relative overflow-hidden border-t border-white/10 py-24 lg:py-32 animate-fade-up">
        <div className={`absolute inset-0 -z-10 ${aboutOverlay}`} />
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute left-10 bottom-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute right-10 bottom-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
          {/* Centered header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Our Values
            </span>
            <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              What makes us{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                different
              </span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              A premium care brand that blends empathy, consistency, and technical excellence for every patient.
            </p>
          </div>

          {/* Three-column layout: left image | center cards | right image */}
          <div className="grid items-center gap-6 lg:grid-cols-[280px_1fr_280px] xl:grid-cols-[320px_1fr_320px]">
            {/* Left image stack */}
            <div className="hidden flex-col gap-5 lg:flex">
              <div className="group overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(15,23,42,0.4)] transition duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1666886573301-b5d526cfd518?q=80&w=387&auto=format&fit=crop"
                  alt="Healthcare team"
                  className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(15,23,42,0.4)] transition duration-500 hover:-translate-y-1">
                <img
                  src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Doctor with patient"
                  className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Center 2x2 card grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: 'Patient-centric',
                  desc: 'Every product decision and care process begins with the patient experience.',
                  color: 'text-cyan-300',
                  iconBg: 'bg-cyan-500/15 border-cyan-400/20',
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Clinical excellence',
                  desc: 'We maintain high standards across medical practice, support, and technology.',
                  color: 'text-rose-300',
                  iconBg: 'bg-rose-500/15 border-rose-400/20',
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  ),
                  title: 'Access for all',
                  desc: 'Quality healthcare should be simple to reach, easy to understand, and fairly priced.',
                  color: 'text-lime-300',
                  iconBg: 'bg-lime-500/15 border-lime-400/20',
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Innovation',
                  desc: 'We keep improving the care journey with practical, human-centred technology.',
                  color: 'text-violet-300',
                  iconBg: 'bg-violet-500/15 border-violet-400/20',
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: 'Integrity',
                  desc: 'We communicate clearly, protect trust, and operate with ethical discipline.',
                  color: 'text-amber-300',
                  iconBg: 'bg-amber-500/15 border-amber-400/20',
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Community',
                  desc: 'We build long-term relationships that support healthier families and neighbourhoods.',
                  color: 'text-sky-300',
                  iconBg: 'bg-sky-500/15 border-sky-400/20',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-slate-900/90 animate-float"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${item.iconBg} ${item.color}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-lg font-bold ${item.color}`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400 transition duration-300 group-hover:text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right image stack */}
            <div className="hidden flex-col gap-5 lg:flex">
              <div className="group overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(15,23,42,0.4)] transition duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Doctor consultation"
                  className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(15,23,42,0.4)] transition duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Medical care"
                  className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compassionate Care Section */}
      <section className="relative overflow-hidden border-t border-white/10 py-24 lg:py-32 animate-fade-up">
        <div className={`absolute inset-0 -z-10 ${aboutOverlay}`} />
        <div className="relative mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left side: Overlapping Images */}
            <div className="relative">
              <div className="relative z-10 w-4/5 overflow-hidden rounded-3xl group shadow-[0_30px_90px_rgba(15,23,42,0.4)]">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80"
                  alt="Medical professionals in consultation"
                  className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
              </div>

              <div className="absolute -bottom-10 right-0 z-20 w-[65%] overflow-hidden rounded-3xl border-[12px] border-slate-950 group animate-float shadow-[0_40px_100px_rgba(15,23,42,0.6)]">
                <img
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Doctor reviewing patient records"
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/10" />
              </div>

              {/* Decorative shapes */}
              <div className="absolute -left-10 -top-10 -z-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-10 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            </div>

            {/* Right side: Content */}
            <div className="space-y-8 lg:pl-8 mt-16 lg:mt-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Compassionate Care, Professional Insights
              </span>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                We&apos;re Trusted Professional Medical Consultancy
              </h2>

              <p className="text-lg leading-8 text-slate-300">
                Our medical consultancy stands as a trusted partner in healthcare, providing expert guidance and innovative solutions to hospitals, clinics, and healthcare organizations. With a team of experienced professionals, we deliver strategic insights that help medical institutions achieve excellence in patient care and operational efficiency.
              </p>

              <ul className="space-y-5 pt-2">
                {[
                  'Remain flexible and adaptive to swiftly respond to changing market dynamics and client needs.',
                  'Empower clients through knowledge transfer, skill-building, and fostering a culture of self-sufficiency.'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-slate-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row sm:items-center gap-8 pt-6">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-[0_25px_90px_rgba(56,189,248,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_100px_rgba(56,189,248,0.32)]"
                >
                  Make An Appointment
                </Link>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-cyan-400 transition duration-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30 group-hover:scale-105">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Call Us Now</p>
                    <a href="tel:+525-3756-1523" className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                      +525-3756-1523
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-28">
        <div className={`absolute inset-0 -z-10 ${aboutOverlay}`} />
        <div className="absolute inset-x-0 top-0 h-48 bg-cyan-500/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-[95rem] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.2)]">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85"
              alt="Healthcare background"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 sm:bg-slate-950/50" />
            <div className="relative p-10 lg:p-14">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                <div className="max-w-4xl">
                  <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200 shadow-[0_0_0_rgba(56,189,248,0.08)]">
                    Trusted primary care
                  </span>
                  <h2 className="mt-8 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
                    Healthcare at your doorstep starts here.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                    Book your consultation with GP Primary Care and enjoy a premium care experience backed by expert doctors, secure virtual visits, and fast follow-up support.
                  </p>
                </div>

                <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_25px_90px_rgba(56,189,248,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_100px_rgba(56,189,248,0.32)]"
                  >
                    Book Appointment Now
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/15 hover:border-cyan-300/60"
                  >
                    Talk to our team
                  </Link>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    label: 'Rating',
                    value: '4.8',
                    desc: 'Rating from 683+ Google reviews',
                  },
                  {
                    label: 'Trusted care',
                    value: '2500+',
                    desc: 'Patients served with fast, friendly primary care',
                  },
                  {
                    label: 'Response',
                    value: '24/7',
                    desc: 'Support access for urgent health questions',
                  },
                  {
                    label: 'Continuity',
                    value: '1 GP',
                    desc: 'Dedicated doctor guidance across every visit',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/90"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">{stat.label}</p>
                    <p className="mt-3 text-3xl font-bold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
