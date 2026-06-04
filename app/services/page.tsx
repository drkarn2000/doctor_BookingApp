import Link from 'next/link';
import { siteFixedOverlay, siteSectionOverlay } from '../siteBackground';

const services = [
  {
    number: '01',
    title: 'Routine Checkups',
    text: 'Preventive care for healthier living and early guidance.',
    image:
      'https://images.unsplash.com/photo-1758691462743-f9fc9e430d39?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    number: '02',
    title: 'Pediatrics',
    text: 'Family-first guidance for children and parents.',
    image:
      'https://images.unsplash.com/photo-1576091160501-bbe57469278b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    number: '03',
    title: 'Elderly Care',
    text: 'Reliable support for senior health and daily wellbeing.',
    image:
      'https://images.unsplash.com/photo-1639991987087-f28545e9b1f2?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    number: '04',
    title: 'Chronic Disease Management',
    text: 'Ongoing care for long-term conditions and better control.',
    image:
      'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const stats = [
  ['2,500+', 'Happy Patients'],
  ['12+', 'Years Experience'],
  ['20+', 'Care Areas'],
  ['98%', 'Satisfaction Rate'],
];

const priorityItems = [
  ['Confidential & Secure', 'Your privacy is carefully protected.'],
  ['Easy Appointments', 'Book online in just a few clicks.'],
  ['Expert GP Care', 'Clinical guidance you can trust.'],
  ['Quick & Convenient', 'Care built around your schedule.'],
];

const whyChoose = [
  ['Secure & Private', 'Your health data is protected with careful, privacy-first communication.'],
  ['Personalized Care', 'Treatment plans tailored to your unique health needs and goals.'],
  ['24/7 Support', 'We are here for you whenever you need expert guidance.'],
  ['Modern Technology', 'Advanced tools for accurate diagnosis and virtual care.'],
];

const steps = [
  [
    '01',
    'We understand your health goals',
    'Share your symptoms, history, lifestyle, and concerns so your consultation starts with real context.',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
  ],
  [
    '02',
    'We suggest the right care plan',
    'No confusing process. Just practical medical guidance, clear treatment steps, and support that fits your needs.',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
  ],
  [
    '03',
    'You consult with your GP online',
    'Connect through secure video, audio, or chat and receive personalized advice from a dedicated primary care doctor.',
    'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1032&auto=format&fit=crop',
  ],
  [
    '04',
    'We support your follow-up',
    'Your care does not stop after one call. Get ongoing follow-up, medication guidance, and progress check-ins.',
    'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop',
  ],
];

function ShieldIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.4 7-11.2V5.6L12 3 5 5.6v4.2C5 16.6 12 21 12 21Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-5" />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.4 7-11.2V5.6L12 3 5 5.6v4.2C5 16.6 12 21 12 21Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M12 9v6" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="relative isolate overflow-hidden text-white">
      <div className={`fixed inset-0 -z-20 ${siteFixedOverlay}`} />

      <section className="relative mx-auto w-full max-w-[95rem] px-4 pb-12 pt-8 lg:px-6 lg:pb-16">
        <div className={`absolute inset-0 -z-10 ${siteSectionOverlay}`} />
        <div className="pointer-events-none absolute left-0 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-400/12 blur-3xl animate-blob-slow" />
        <div className="pointer-events-none absolute right-0 top-16 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/12 blur-3xl animate-blob-medium" />

        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/85 px-6 py-8 shadow-[0_50px_160px_rgba(2,6,23,0.52)] backdrop-blur-2xl lg:px-8 lg:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_24%,rgba(34,211,238,0.16),transparent_26%),radial-gradient(circle_at_7%_85%,rgba(59,130,246,0.14),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.07)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative grid gap-8 xl:grid-cols-[0.95fr,0.92fr,0.78fr] xl:items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex w-fit items-center gap-3 rounded-2xl border border-cyan-300/20 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/25">
                  <ShieldIcon className="h-5 w-5" />
                </span>
                Premium GP Healthcare
              </div>

              <div>
                <h1 className="max-w-4xl text-6xl font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-7xl">
                  Better Care <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Stronger</span> Health
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                  Personalized primary care, advanced technology, and better health outcomes for every stage of life.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_22px_70px_rgba(56,189,248,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(56,189,248,0.38)]"
                >
                  Book Appointment
                  <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-cyan-400/10"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">?</span>
                  Ask a Question
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex min-h-[430px] w-full max-w-[520px] items-center justify-center animate-float">
              <div className="absolute h-[430px] w-[430px] rounded-full border border-cyan-300/20" />
              <div className="absolute h-[500px] w-[500px] rounded-full border border-cyan-300/10" />
              <div className="absolute h-[560px] w-[560px] rounded-full border border-blue-400/10" />
              <div className="absolute left-12 top-16 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.9)]" />
              <div className="absolute right-16 bottom-20 h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_24px_rgba(147,197,253,0.8)]" />
              <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full border-[12px] border-slate-950 bg-slate-900 shadow-[0_35px_120px_rgba(2,6,23,0.65)] ring-1 ring-cyan-300/25 sm:h-[390px] sm:w-[390px]">
                <img
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1032&auto=format&fit=crop"
                  alt="GP Consulting Solutions virtual care"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.36)] backdrop-blur-xl animate-fade-up">
              <h2 className="text-2xl font-semibold text-white">Your Health, Our Priority</h2>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-cyan-300 via-cyan-300/30 to-transparent" />
              <div className="mt-6 space-y-5">
                {priorityItems.map(([title, text]) => (
                  <div key={title} className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/20">
                      <ShieldIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="relative mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(2,6,23,0.28)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/45 hover:bg-white/[0.09] hover:shadow-[0_32px_90px_rgba(56,189,248,0.14)] animate-fade-up"
              >
                <div className="absolute left-0 top-0 h-1 w-20 bg-gradient-to-r from-cyan-300 to-blue-500" />
                <div className="flex gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/25 transition duration-500 group-hover:scale-110">
                    <ServiceIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{service.text}</p>
                    <span className="mt-5 inline-flex text-2xl text-cyan-300 transition duration-300 group-hover:translate-x-2">-&gt;</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative mt-6 grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] shadow-[0_26px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label], index) => (
              <div key={label} className="flex items-center gap-5 border-white/10 p-6 sm:border-r last:border-r-0">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/20">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={index === 1 ? 'M12 3l2.1 4.4 4.9.7-3.5 3.4.8 4.8L12 14l-4.3 2.3.8-4.8L5 8.1l4.9-.7L12 3Z' : 'M17 20h5v-2a4 4 0 0 0-4-4h-1M7 20H2v-2a4 4 0 0 1 4-4h1m10-4a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z'}
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm text-slate-300">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[95rem] px-4 py-6 lg:px-6">
        <div className="grid gap-8 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-[0_35px_120px_rgba(15,23,42,0.35)] lg:grid-cols-[0.85fr,1.15fr] lg:p-10">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200">Why choose GP Consulting Solutions</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight">Care that goes beyond treatment</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                We combine advanced technology with a human touch to deliver healthcare you can trust.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex w-fit items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.28)] transition hover:-translate-y-0.5"
            >
              Book an Appointment
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {whyChoose.map(([title, text]) => (
              <div key={title} className="rounded-[1.5rem] border border-cyan-300/20 bg-white/8 p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-cyan-300/45 hover:bg-white/12">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                  <ShieldIcon />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[95rem] px-4 py-8 lg:px-6">
        <div className={`absolute inset-0 -z-10 ${siteSectionOverlay}`} />
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.24)] backdrop-blur-xl lg:p-10">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="relative">
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-cyan-200">Simple. Fast. Convenient.</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">How our consultation works</h2>
            <p className="mt-3 text-base text-slate-300">Healthcare made simple in just a few steps.</p>

            <div className="relative mt-12 space-y-12 lg:space-y-20">
              <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/10 via-cyan-300/45 to-cyan-300/10 lg:block" />
              {steps.map(([number, title, text, image], index) => {
                const imageFirst = index % 2 === 0;
                return (
                  <div
                    key={number}
                    className="relative grid gap-8 lg:grid-cols-2 lg:items-center"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div
                      className={`${imageFirst ? 'lg:order-1' : 'lg:order-2'} group relative overflow-hidden rounded-[1.25rem] border border-cyan-300/25 bg-slate-950/50 shadow-[0_26px_80px_rgba(2,6,23,0.38)] transition duration-500 hover:-translate-y-2 hover:border-cyan-300/55 hover:shadow-[0_34px_100px_rgba(56,189,248,0.18)] animate-float`}
                    >
                      <img
                        src={image}
                        alt={title}
                        className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                    </div>

                    <div className={`${imageFirst ? 'lg:order-2' : 'lg:order-1'} relative animate-fade-up`}>
                      <div className="absolute -left-4 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950 shadow-[0_16px_45px_rgba(255,255,255,0.16)] ring-1 ring-cyan-300/25 lg:flex lg:-translate-x-1/2">
                        {number}
                      </div>
                      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-6 backdrop-blur-xl transition duration-500 hover:border-cyan-300/35 hover:bg-slate-950/60">
                        <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                          Step {number}
                        </p>
                        <h3 className="max-w-xl bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-100 bg-clip-text text-3xl font-semibold leading-tight tracking-tight text-transparent sm:text-4xl">
                          {title}
                        </h3>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">{text}</p>
                        <Link
                          href="/book"
                          className="mt-7 inline-flex items-center justify-center rounded-full border border-cyan-300/35 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-400/10 hover:text-cyan-100"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid w-full max-w-[95rem] gap-6 px-4 py-8 lg:grid-cols-[0.95fr,1.05fr] lg:px-6">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-cyan-200">Patient feedback</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">What our patients say</h2>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-7">
            <p className="text-5xl font-semibold leading-none text-cyan-300">&ldquo;</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              GP Consulting Solutions made healthcare easy and convenient. The doctor was professional and caring, and I got clear guidance without leaving home.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-sm font-bold text-slate-950">PS</div>
              <div>
                <p className="font-bold text-white">Priya S.</p>
                <p className="text-sm text-slate-400">Patient</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-cyan-200">Trusted care</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">Care results patients can feel</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-[1.25rem] bg-cyan-400/10 p-6 text-center ring-1 ring-cyan-300/20">
                <p className="text-3xl font-bold text-cyan-300">{value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[95rem] px-4 pb-16 pt-4 lg:px-6">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white shadow-[0_35px_110px_rgba(15,23,42,0.32)] lg:grid-cols-[0.9fr,1.1fr] animate-glow">
          <div className="relative min-h-[260px]">
            <img
              src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1032&auto=format&fit=crop"
              alt="Doctor on virtual consultation"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/55" />
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 lg:p-10">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Your health, our priority. Expert care is just a click away.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              Book your consultation now and take the first step towards a healthier you.
            </p>
            <Link
              href="/book"
              className="inline-flex w-fit items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 text-sm font-bold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.28)] transition hover:-translate-y-0.5"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
