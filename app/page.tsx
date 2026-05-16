import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';
import { siteFixedOverlay, siteSectionOverlay } from './siteBackground';

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className={`fixed inset-0 -z-20 ${siteFixedOverlay}`} />

      <section className="relative isolate overflow-hidden text-white">
        <div className={`absolute inset-0 -z-20 ${siteSectionOverlay}`} />
        <div className="absolute left-0 top-16 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-10 top-32 -z-10 h-[360px] w-[360px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 -z-10 h-[280px] w-[280px] rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto grid w-full max-w-[95rem] items-center gap-8 px-4 py-12 lg:grid-cols-[1.05fr,0.95fr] lg:px-6 lg:py-16 xl:gap-10">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.26em] text-cyan-200 shadow-[0_0_0_rgba(255,255,255,0.02)]">
              Trusted by 2500+ patients worldwide
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-6xl">
                Premium Chat & Video Patient Consultations.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Connect with your dedicated primary care doctor, book appointments in seconds, and manage your healthcare through a refined online experience.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_25px_90px_rgba(56,189,248,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_100px_rgba(56,189,248,0.32)]"
              >
                Book Consultation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300 hover:bg-white/15 hover:text-cyan-100"
              >
                Learn More
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <AnimatedCounter target={2500} label="Patients Served" suffix="+" />
              <AnimatedCounter target={98} label="Satisfaction Rate" suffix="%" />
              <AnimatedCounter target={24} label="Support Hours" suffix="/7" />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/70 shadow-[0_45px_140px_rgba(15,23,42,0.55)] backdrop-blur animate-float">
            <img
              src="https://images.unsplash.com/photo-1758691462848-31a39258dbd8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Male doctor consulting with a patient"
              className="h-[560px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            <div className="absolute right-6 top-6 rounded-3xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl shadow-xl">
              <p className="text-sm font-semibold text-white">Next slot</p>
              <p className="mt-1 text-sm text-cyan-100">Today, 2:00 PM</p>
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-slate-950/90 p-6 shadow-2xl backdrop-blur-xl border border-white/10">
              <div className="grid gap-4 sm:grid-cols-[1.5fr,2fr]">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                    <span className="text-2xl">🩺</span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Primary Care Doctor</p>
                    <p className="text-xl font-semibold text-white">Dr. Mohit Chhabra</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {['Family Medicine', 'Virtual Care', '24/7 Access'].map((item) => (
                    <div key={item} className="rounded-3xl bg-slate-900/70 p-4 text-center border border-white/10">
                      <p className="text-sm font-semibold text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden py-10 text-white backdrop-blur-sm lg:py-12">
        <div className={`absolute inset-0 ${siteSectionOverlay}`} />
        <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-cyan-400/16 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/18 blur-3xl" />

        <div className="mx-auto w-full max-w-[95rem] px-4 lg:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Our Services</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Healthcare Services Designed for You
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-slate-300">
              From instant consultations to scheduled appointments, we provide flexible healthcare options that fit your lifestyle.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-16">
            {[
              {
                icon: '📹',
                title: 'Video Consultations',
                text: 'Face-to-face secure video calls with your dedicated primary care doctor from anywhere.',
                image:
                  'https://images.unsplash.com/photo-1758691462743-f9fc9e430d39?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
              {
                icon: '💬',
                title: 'Chat Support',
                text: 'Instant messaging with your doctor for quick consultations, follow-up questions, and health guidance.',
                image:
                  'https://images.unsplash.com/photo-1576091160501-bbe57469278b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
              {
                icon: '💊',
                title: 'Digital Prescriptions',
                text: 'Receive prescriptions directly to your pharmacy. Secure and convenient medication management online.',
                image:
                  'https://images.unsplash.com/photo-1639991987087-f28545e9b1f2?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
              {
                icon: '📊',
                title: 'Health Monitoring',
                text: 'Track your health metrics, follow custom care plans, and receive reminders for appointments and medications.',
                image:
                  'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 shadow-[0_35px_120px_rgba(15,23,42,0.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-300/60 hover:bg-white/15 hover:shadow-[0_40px_130px_rgba(3,166,136,0.22)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950/40 text-2xl text-white shadow-lg backdrop-blur transition duration-500 group-hover:bg-cyan-500/30">
                    {service.icon}
                  </div>
                </div>
                <div className="relative z-10 space-y-5 p-8">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{service.text}</p>
                  <div className="flex items-center justify-between gap-4 pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
                      Learn more →
                    </span>
                    <div className="h-10 w-10 rounded-3xl bg-cyan-500/10 ring-1 ring-cyan-300/20 backdrop-blur transition duration-300 group-hover:bg-cyan-500/20" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/90 to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden text-white backdrop-blur-sm">
        <div className={`absolute inset-0 ${siteSectionOverlay}`} />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[95rem] px-4 py-14 lg:px-6 lg:py-20">
          {/* Header */}
          <div className="mb-16 space-y-4 animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Meet Your Doctor</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              One trusted doctor, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">every consultation.</span>
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Consistent, personalized care from a dedicated physician who knows your health history and understands your unique needs.
            </p>
          </div>

          {/* Main Card */}
          <div className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-[0_50px_150px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-700 hover:border-cyan-400/30 hover:shadow-[0_60px_180px_rgba(3,166,136,0.25)] animate-fade-up">
            <div className="grid gap-0 lg:grid-cols-[1fr,1.1fr]">
              {/* Layered Image Section */}
              <div className="relative min-h-[560px] overflow-hidden bg-slate-950/40 p-5 sm:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-400/10" />

                <div className="relative h-[510px]">
                  <div className="absolute left-0 top-0 h-full w-[72%] overflow-hidden rounded-[2.25rem] rounded-tr-[5rem] border border-white/15 shadow-[0_35px_110px_rgba(2,6,23,0.45)]">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
                      alt="Care team planning a patient consultation"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                  </div>

                  <div className="absolute left-6 top-6 z-20 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white shadow-[0_18px_45px_rgba(251,146,60,0.35)]">
                    Since 2018
                  </div>

                  <div className="absolute bottom-4 right-0 z-10 w-[78%] overflow-hidden rounded-[2rem] border-[14px] border-white/90 bg-white/90 shadow-[0_38px_120px_rgba(2,6,23,0.5)] sm:bottom-6">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661376778929-dc539f9ebb0d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Male primary care doctor"
                      className="h-[350px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[390px]"
                    />
                    <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-amber-300/25 bg-slate-950/90 p-5 shadow-2xl backdrop-blur-xl">
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Doctor profile</p>
                      <p className="mt-3 text-lg font-semibold leading-7 text-white">Dedicated primary care with a trusted GP for every consultation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center p-10 lg:p-14">
                <div className="space-y-8">
                  {/* Specialty Badge */}
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    Family Medicine Specialist
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                      Personalized Primary Care Excellence
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-8 text-slate-300">
                    With 12+ years of clinical experience, Dr. Chhabra specializes in building lasting patient relationships. Expertise in preventive care, chronic disease management, and holistic wellness guidance.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { label: 'Experience', value: '12+ Years' },
                      { label: 'Patient Rating', value: '4.9/5' },
                      { label: 'Consultation Modes', value: 'Video & Chat' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="group/stat rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-500 hover:border-cyan-400/50 hover:bg-cyan-500/10"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors duration-500 group-hover/stat:text-cyan-300">
                          {stat.label}
                        </p>
                        <p className="mt-2 text-xl font-bold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Areas of Focus</p>
                    <div className="flex flex-wrap gap-2">
                      {['Preventive Care', 'Chronic Diseases', 'Wellness', 'Virtual Care'].map((skill) => (
                        <div
                          key={skill}
                          className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/20"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                    <Link
                      href="/book"
                      className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-[0_25px_90px_rgba(56,189,248,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_120px_rgba(56,189,248,0.4)]"
                    >
                      <span>Book Now</span>
                      <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </Link>
                    <Link
                      href="/doctors"
                      className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-8 py-4 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/20"
                    >
                      Full Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: '🏥',
                title: 'Comprehensive Care',
                text: 'Full spectrum of primary health services and specialist referrals',
              },
              {
                icon: '📱',
                title: '24/7 Accessibility',
                text: 'Always available for emergencies and urgent consultations',
              },
              {
                icon: '📋',
                title: 'Digital Records',
                text: 'Secure access to your complete medical history anytime',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group/card rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.15)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-[0_30px_80px_rgba(3,166,136,0.15)]"
              >
                <div className="mb-4 text-4xl transition-transform duration-500 group-hover/card:scale-110">{item.icon}</div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden text-white backdrop-blur-sm">
        <div className={`absolute inset-0 ${siteSectionOverlay}`} />
        <div className="relative mx-auto w-full max-w-[95rem] px-4 py-10 lg:px-6 lg:py-12">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_100px_rgba(15,23,42,0.18)] lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Consultation CTA</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Start your premium consultation in one click.
              </h2>
              <p className="max-w-xl text-base leading-7 text-slate-300">
                Book your appointment, join a secure video call, or message your dedicated doctor. Everything is designed for speed, clarity, and trust.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_25px_80px_rgba(56,189,248,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(56,189,248,0.45)]"
                >
                  Book Now
                </Link>
                <Link
                  href="/auth"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/15 hover:border-cyan-300/70 hover:text-cyan-100"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Secure video visits', 'Dedicated GP care', 'Digital prescriptions', '24/7 support access'].map((feature) => (
                <div key={feature} className="rounded-[1.75rem] bg-slate-950/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-slate-900/80">
                  <p className="text-base font-semibold text-white">{feature}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Seamless experience with modern healthcare tools.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
