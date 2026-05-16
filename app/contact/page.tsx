import Link from 'next/link';
import { siteFixedOverlay, siteSectionOverlay } from '../siteBackground';

const contactOverlay = siteSectionOverlay;

const contactDoctorImage =
  'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const contactTeamImage =
  'https://images.unsplash.com/photo-1623658045230-605cb00c80d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const contactHeroCards = [
  { title: 'More experience', desc: 'Helpful support for appointments, care questions, and next steps.' },
  { title: 'Seamless care', desc: 'Simple coordination between booking, consultation, and follow-up.' },
  { title: 'The right answers?', desc: 'Clear routing so your question reaches the right care desk.' },
  { title: 'Patient-first support', desc: 'Friendly guidance shaped around your time and comfort.' },
];

const contactMethods = [
  { label: 'Phone', value: '+1 234 567 8900', desc: 'Speak with patient support' },
  { label: 'Email', value: 'support@gpprimarycare.com', desc: 'For booking and care questions' },
  { label: 'Clinic', value: '182 Healthcare St, New York, NY 10001', desc: 'Main coordination office' },
];

const supportCards = [
  { title: 'Booking support', desc: 'Get help choosing the right appointment type with your dedicated GP.' },
  { title: 'Patient guidance', desc: 'Questions about video visits, follow-ups, or prescriptions.' },
  { title: 'Care coordination', desc: 'Our team helps route your request to the right department.' },
];

export default function ContactPage() {
  const inputClass =
    'mt-2 w-full rounded-xl border border-white/70 bg-white/70 px-4 py-3 text-sm text-slate-900 shadow-none outline-none transition placeholder-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10';

  return (
    <div className="relative isolate overflow-hidden">
      <div className={`fixed inset-0 -z-20 ${siteFixedOverlay}`}></div>

      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 text-white lg:pt-32 lg:pb-20">
        <div className={`absolute inset-0 ${siteSectionOverlay}`} />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950/40 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950/40 to-transparent" />

        <div className="relative mx-auto grid max-w-[95rem] gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative min-h-[520px]">
            <div className="absolute left-0 top-12 w-[58%] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_35px_100px_rgba(15,23,42,0.35)]">
              <img
                src={contactDoctorImage}
                alt="Doctor helping a patient"
                className="h-[400px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 right-4 w-[50%] overflow-hidden rounded-[1.5rem] bg-white shadow-[0_35px_100px_rgba(15,23,42,0.35)]">
              <img
                src={contactTeamImage}
                alt="Care team ready to help"
                className="h-[280px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute left-[47%] top-0 hidden h-48 w-48 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950/45 shadow-[0_20px_70px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:flex">
              <div className="absolute inset-4 rounded-full border border-white/25" />
              <div className="text-center">
                <p className="text-7xl font-bold leading-none text-white">8+</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">Years</p>
              </div>
              <p className="absolute inset-0 animate-spin rounded-full border border-dashed border-white/25 [animation-duration:18s]" />
            </div>

            <div className="absolute bottom-24 left-0 rounded-2xl bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,0.28)]">
              <div className="flex h-24 w-28 items-end gap-2">
                {[70, 38, 82, 56, 64].map((height, index) => (
                  <span
                    key={index}
                    className="w-4 rounded bg-cyan-500"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="absolute -right-5 -top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-white shadow-lg">
                <span className="text-lg font-bold">+</span>
              </div>
            </div>
          </div>

          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              <span className="text-cyan-300">✚</span>
              Contact our care team
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-6xl">
              Connect With A Care Team That Listens
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Reach our support desk for appointment help, consultation access, and care coordination with a calm, responsive team.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {contactHeroCards.map((card, index) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10"
                >
                  <p className="absolute right-5 top-3 text-6xl font-bold text-white/8">0{index + 1}</p>
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200">
                      <span className="text-xl">✚</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-slate-300">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className={`absolute inset-0 ${contactOverlay}`}></div>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/55 shadow-[0_24px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div className="border-b border-white/60 px-6 py-6 sm:px-8">
              <p className="text-sm font-semibold text-primary-dark">Send a message</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">How can we help today?</h2>
            </div>

            <form className="space-y-6 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Your name</span>
                  <input type="text" placeholder="Enter your name" className={inputClass} />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Email address</span>
                  <input type="email" placeholder="name@example.com" className={inputClass} />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Phone number</span>
                  <input type="tel" placeholder="+1 (555) 123-4567" className={inputClass} />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Topic</span>
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>Select a topic</option>
                    <option>Book an appointment</option>
                    <option>Doctor matching</option>
                    <option>Video consultation support</option>
                    <option>Billing question</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Message</span>
                <textarea rows={5} placeholder="Tell us what you need help with" className={inputClass}></textarea>
              </label>

              <div className="flex flex-col gap-4 rounded-xl border border-white/70 bg-white/45 p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-slate-700">We usually respond within one business day. For urgent symptoms, contact emergency services.</p>
                <button type="submit" className="shrink-0 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary">
                  Send message
                </button>
              </div>
            </form>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-white/70 bg-white/55 p-6 text-slate-950 shadow-xl backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">Care desk</p>
              <h2 className="mt-3 text-3xl font-bold">24/7 patient support</h2>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                Our support team helps with appointments, consultation access, and care coordination.
              </p>
              <Link href="/book" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark">
                Book Consultation
              </Link>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/55 p-6 shadow-sm backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">Contact details</p>
              <div className="mt-6 space-y-5">
                {contactMethods.map((item) => (
                  <div key={item.label} className="border-b border-white/70 pb-5 last:border-0 last:pb-0">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                    <p className="mt-2 font-bold text-slate-950">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/55 p-6 shadow-sm backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">Working hours</p>
              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-between gap-4">
                  <span>Monday - Friday</span>
                  <span className="font-bold text-slate-950">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Saturday - Sunday</span>
                  <span className="font-bold text-slate-950">10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className={`absolute inset-0 ${contactOverlay}`}></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Support paths</p>
            <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">The right help reaches the right team</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {supportCards.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-white/70 bg-white/55 p-7 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/30 hover:bg-white/70 hover:shadow-xl">
                <p className="text-sm font-bold text-primary-dark">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
