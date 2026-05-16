import Link from 'next/link';
import { siteFixedOverlay, siteSectionOverlay } from '../siteBackground';

const inputClass =
  'w-full rounded-2xl border border-white/15 bg-white/92 px-4 py-3 text-sm text-slate-950 shadow-[0_18px_45px_rgba(15,23,42,0.16)] outline-none transition placeholder-slate-400 focus:border-cyan-300/70 focus:bg-white focus:ring-4 focus:ring-cyan-300/15';

const visitTypes = [
  { title: 'Instant video call', desc: 'Join the next available secure consultation.', active: true },
  { title: 'Schedule a visit', desc: 'Choose a preferred date and time window.', active: false },
  { title: 'Follow-up review', desc: 'Discuss results, prescriptions, or ongoing care.', active: false },
];

const careHighlights = [
  { value: '2 min', label: 'guided booking' },
  { value: '1 GP', label: 'continuity of care' },
  { value: 'Private', label: 'secure intake' },
];

const benefits = [
  {
    title: 'Smart intake',
    desc: 'Capture the right patient details before the appointment so the doctor can prepare quickly.',
  },
  {
    title: 'Flexible care modes',
    desc: 'Start with an instant call or request a later slot without changing the booking flow.',
  },
  {
    title: 'Clear confirmation',
    desc: 'Appointment details are organized and ready for follow-up after the request is reviewed.',
  },
];

export default function BookPage() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className={`fixed inset-0 -z-20 ${siteFixedOverlay}`} />

      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className={`absolute inset-0 -z-10 ${siteSectionOverlay}`} />
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[95rem] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Secure GP booking
            </span>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl stagger-1">
              Request care with a calmer, faster booking flow.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 stagger-2">
              Share the essentials, choose how you want to be seen, and send a clear appointment request to your dedicated primary care team.
            </p>

            <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
              {careHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.4rem] border border-white/10 bg-white/8 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10"
                >
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#appointment-request"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_25px_90px_rgba(56,189,248,0.28)] transition duration-300 hover:-translate-y-0.5"
              >
                Start Request
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300/60 hover:bg-white/15"
              >
                Need Help?
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-900 shadow-[0_55px_160px_rgba(15,23,42,0.55)]">
              <img
                src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Doctor preparing for consultation"
                className="absolute inset-0 h-full w-full object-cover hero-bg-img"
              />
              <div className="absolute inset-0 bg-slate-950/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="relative flex min-h-[560px] flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-full border border-white/15 bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-xl">
                    Next available
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-950">Today</div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {visitTypes.slice(0, 2).map((type) => (
                    <div
                      key={type.title}
                      className={`rounded-[1.5rem] border p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${
                        type.active
                          ? 'border-cyan-300/45 bg-cyan-400/18'
                          : 'border-white/15 bg-slate-950/55'
                      }`}
                    >
                      <p className="text-base font-semibold text-white">{type.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="appointment-request" className="relative overflow-hidden py-16 lg:py-24">
        <div className={`absolute inset-0 -z-10 ${siteSectionOverlay}`} />
        <div className="relative mx-auto grid w-full max-w-[95rem] gap-8 px-4 sm:px-6 lg:grid-cols-[0.36fr_0.64fr] lg:px-8">
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Visit type</p>
              <div className="mt-6 space-y-3">
                {visitTypes.map((type) => (
                  <div
                    key={type.title}
                    className={`rounded-[1.3rem] border p-4 transition duration-300 hover:-translate-y-0.5 ${
                      type.active
                        ? 'border-cyan-300/40 bg-cyan-400/12'
                        : 'border-white/10 bg-white/5 hover:border-cyan-300/25'
                    }`}
                  >
                    <div className="flex gap-3">
                      <span className={`mt-1 h-3 w-3 rounded-full ${type.active ? 'bg-cyan-300' : 'bg-slate-500'}`} />
                      <div>
                        <p className="font-semibold text-white">{type.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{type.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-[0_30px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Healthcare support team"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Support</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Need help choosing?</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Our team can help match your concern to the right appointment type before you submit.
                </p>
              </div>
            </div>
          </aside>

          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/5 shadow-[0_45px_150px_rgba(2,6,23,0.48)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-slate-950/72" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-slate-950/20 to-primary/20" />
            <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative border-b border-white/10 px-6 py-6 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-cyan-200">Appointment request</p>
                  <h2 className="mt-1 text-3xl font-semibold tracking-tight text-white">Tell us who the visit is for</h2>
                </div>
                <p className="w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-cyan-100 backdrop-blur-xl">Takes about 2 minutes</p>
              </div>
            </div>

            <form className="relative space-y-8 p-6 sm:p-8">
              <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 shadow-[0_24px_70px_rgba(2,6,23,0.2)] backdrop-blur-xl sm:p-6">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-950">1</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">Patient information</h3>
                    <p className="mt-1 text-sm text-slate-300">Basic details for secure appointment matching.</p>
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-200">Full name</span>
                    <input type="text" placeholder="Enter patient name" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-200">Email address</span>
                    <input type="email" placeholder="name@example.com" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-200">Phone number</span>
                    <input type="tel" placeholder="+1 (555) 123-4567" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-200">Date of birth</span>
                    <input type="date" className={inputClass} />
                  </label>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 shadow-[0_24px_70px_rgba(2,6,23,0.2)] backdrop-blur-xl sm:p-6">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-sm font-bold text-slate-950">2</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">Appointment details</h3>
                    <p className="mt-1 text-sm text-slate-300">Choose how and when you would like care.</p>
                  </div>
                </div>

                <input id="instant-call" type="radio" name="bookingTiming" defaultChecked className="sr-only" />
                <input id="book-later" type="radio" name="bookingTiming" className="peer/later sr-only" />

                <div className="grid gap-5 md:grid-cols-2">
                  <label
                    htmlFor="instant-call"
                    className="block cursor-pointer rounded-[1.4rem] border border-cyan-300/35 bg-cyan-400/12 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-400/18"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-300 shadow ring-1 ring-cyan-300" />
                      <span>
                        <span className="block font-bold text-white">Instant call</span>
                        <span className="mt-1 block text-sm leading-6 text-slate-300">
                          Start the consultation as soon as the doctor is available.
                        </span>
                      </span>
                    </div>
                  </label>

                  <label
                    htmlFor="book-later"
                    className="block cursor-pointer rounded-[1.4rem] border border-white/15 bg-white/10 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/15"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-4 w-4 rounded-full border border-white/40 bg-white/20" />
                      <span>
                        <span className="block font-bold text-white">Book for later</span>
                        <span className="mt-1 block text-sm leading-6 text-slate-300">
                          Choose a calendar date and preferred time slot.
                        </span>
                      </span>
                    </div>
                  </label>
                </div>

                <div className="mt-5 hidden rounded-[1.4rem] border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur-xl peer-checked/later:grid md:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-200">Preferred date</span>
                    <input type="date" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-200">Preferred time</span>
                    <select className={inputClass} defaultValue="">
                      <option value="" disabled>Select time slot</option>
                      <option>Today, 2:00 PM</option>
                      <option>Tomorrow, 10:00 AM</option>
                      <option>Tomorrow, 3:00 PM</option>
                      <option>Next day, 11:00 AM</option>
                    </select>
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-slate-200">Reason for visit</span>
                    <textarea rows={4} placeholder="Briefly describe symptoms or care needs" className={inputClass} />
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <label className="flex gap-3 text-sm leading-6 text-slate-300">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 accent-primary" />
                  <span>I agree to be contacted about this appointment request and accept the privacy policy.</span>
                </label>
              </div>

              <button className="flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-6 py-4 text-base font-bold text-slate-950 shadow-[0_24px_70px_rgba(56,189,248,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-300">
                Request appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className={`absolute inset-0 -z-10 ${siteSectionOverlay}`} />
        <div className="relative mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Why book with us</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white">Built for people who want care to feel organized.</h2>
            </div>
            <Link
              href="/contact"
              className="w-fit rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/15"
            >
              Talk to our team
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-slate-900"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">0{index + 1}</p>
                  <span className="h-px flex-1 bg-white/10 transition group-hover:bg-cyan-300/35" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
