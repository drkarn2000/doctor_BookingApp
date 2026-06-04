import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';
import HeroBadge from '@/components/HeroBadge';
import { siteFixedOverlay, siteSectionOverlay } from './siteBackground';

const doctorCredentials = [
  'Board-certified family medicine physician',
  '12+ years of primary care experience',
  'Preventive care, chronic care, and urgent guidance',
  'Video, chat, and follow-up consultation support',
];

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className={`fixed inset-0 -z-20 ${siteFixedOverlay}`} />

      <section className="relative isolate overflow-hidden pt-6 pb-12 text-white lg:pb-16">
        <div className={`absolute inset-0 -z-20 ${siteSectionOverlay}`} />
        <div className="absolute left-0 top-16 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl animate-blob-slow" />
        <div className="absolute right-10 top-32 -z-10 h-[360px] w-[360px] rounded-full bg-primary/20 blur-3xl animate-blob-medium" />
        <div className="absolute bottom-10 left-10 -z-10 h-[280px] w-[280px] rounded-full bg-blue-400/10 blur-3xl animate-blob-slow" />

        <div className="mx-auto grid w-full max-w-[95rem] items-start gap-8 px-4 pb-8 lg:grid-cols-[1.05fr,0.95fr] lg:px-6 lg:pb-12 xl:gap-10">
          <div className="space-y-8 animate-fade-up">
            <HeroBadge />
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.26em] text-cyan-200 shadow-[0_0_0_rgba(255,255,255,0.02)]">
              Integrative Primary Care
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-6xl">
                Optimise your health with personalised, whole-person care.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                We look beyond symptoms to understand the root causes of illness, combining conventional medical care with evidence-based lifestyle, nutrition, mind-body, and preventive health support.
              </p>
            </div>

            <div className="grid max-w-2xl gap-3 text-sm font-medium text-slate-200 sm:grid-cols-2">
              {[
                'Fatigue, stress, and sleep concerns',
                'Gut health and digestive issues',
                'Chronic pain and inflammation',
                'Hormonal and metabolic health',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_25px_90px_rgba(56,189,248,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_100px_rgba(56,189,248,0.32)]"
              >
                Book Free Appointment
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 px-8 py-3.5 text-sm font-semibold text-cyan-100 shadow-[0_20px_70px_rgba(56,189,248,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-400/15 hover:text-white"
              >
                I Treat, He Cures
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

          <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-900/70 shadow-[0_45px_140px_rgba(15,23,42,0.55)] backdrop-blur animate-float animate-glow animate-card-parallax overflow-visible">
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <img
                src="https://images.unsplash.com/photo-1758691462848-31a39258dbd8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Male doctor consulting with a patient"
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
              <div className="absolute right-6 top-24 z-20 w-[min(72%,15rem)] rounded-2xl border border-white/20 bg-slate-950/50 px-4 py-3 text-center shadow-[0_18px_55px_rgba(15,23,42,0.34)] backdrop-blur-md animate-float">
                <p className="text-lg font-semibold leading-tight text-white drop-shadow-lg sm:text-xl">
                  I Treat, He Cures
                </p>
              </div>
            </div>
            <div className="absolute left-6 top-6 z-30 badge-drift-left">
              <div className="glow-badge rounded-3xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-xl float-pause-on-hover">
                <p className="text-sm font-semibold text-white">Next slot</p>
                <p className="mt-1 text-sm text-cyan-100">Today, 2:00 PM</p>
              </div>
            </div>
            <div className="absolute right-8 top-[58%] z-30 badge-drift-right text-right">
              <div className="glow-badge rounded-3xl border border-white/15 bg-slate-950/80 px-4 py-2 backdrop-blur-xl shadow-xl float-pause-on-hover">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Live Chat</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-6 right-6 translate-y-1/2 rounded-[2rem] bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/60 p-5 shadow-2xl backdrop-blur-xl border border-white/8 animate-glow">
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2">
                  {['Instant Booking', 'Family Medicine', 'Virtual Care', '24/7 Access'].map((item) => (
                    <div key={item} className="rounded-full px-4 py-2 bg-slate-900/50 border border-white/6 text-sm text-white shadow-inner hover:scale-105 transition-transform">
                      <p className="font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                      href="/about"
                      className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-8 py-4 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/20"
                    >
                      Learn More
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
        <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[95rem] px-4 py-14 lg:px-6 lg:py-20">
          <div className="mb-16 text-center space-y-4 animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Patient Stories</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              What our patients <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">say about us</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-slate-300">
              Real experiences from patients who trust us with their everyday healthcare needs.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Working Professional',
                text: 'The convenience of virtual consultations is incredible. I can get medical advice without leaving my office, and the care still feels personal.',
                avatar: 'SJ',
              },
              {
                name: 'Michael Chen',
                role: 'Parent of 2',
                text: 'Having one dedicated doctor who understands my family makes all the difference. The guidance is clear and consistent.',
                avatar: 'MC',
              },
              {
                name: 'Emma Rodriguez',
                role: 'Senior Patient',
                text: 'The video visits are simple, warm, and reassuring. I feel comfortable speaking to my doctor from home.',
                avatar: 'ER',
              },
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-300/60 hover:bg-white/15 hover:shadow-[0_35px_100px_rgba(3,166,136,0.18)]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>*</span>
                    ))}
                  </div>
                  <p className="text-slate-300 leading-7">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden text-white">
        <div className={`absolute inset-0 -z-10 ${siteSectionOverlay}`} />
        <div className="absolute left-0 top-24 -z-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-0 bottom-8 -z-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="mx-auto grid w-full max-w-[95rem] items-center gap-8 px-4 py-16 lg:grid-cols-[1.1fr,0.9fr] lg:px-6 lg:py-20 xl:gap-10">
          <div className="space-y-6 animate-fade-up">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Family Medicine</p>
              <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">Personal care with clinical consistency.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Dr. Mohit Chhabra provides practical, patient-first primary care for everyday health concerns, preventive checkups, medication guidance, follow-ups, and digital consultations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {doctorCredentials.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/15 hover:shadow-[0_30px_90px_rgba(3,166,136,0.18)]"
                >
                  <p className="text-sm font-bold text-cyan-200">0{index + 1}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_25px_90px_rgba(56,189,248,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_100px_rgba(56,189,248,0.32)]"
              >
                Book Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300 hover:bg-white/15 hover:text-cyan-100"
              >
                Ask a Question
              </Link>
            </div>
          </div>

          <div className="group relative rounded-[2.5rem] border border-white/10 bg-slate-900/70 shadow-[0_45px_140px_rgba(15,23,42,0.55)] backdrop-blur transition-all duration-500 hover:shadow-[0_50px_160px_rgba(15,23,42,0.65)] overflow-visible">
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <img
                src="https://images.unsplash.com/photo-1758691463607-c1220b77aaaa?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dr. Mohit Chhabra - Professional Male Doctor"
                className="h-[560px] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
              <div className="absolute right-6 top-6 rounded-3xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl shadow-xl">
                <p className="text-sm font-semibold text-white">Available Now</p>
                <p className="mt-1 text-sm text-cyan-100">Next: Today 2:00 PM</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-6 right-6 translate-y-1/2 rounded-[2rem] bg-slate-950/90 p-6 shadow-2xl backdrop-blur-xl border border-white/10">
              <div className="grid gap-3 sm:grid-cols-4">
                {['Primary Care', 'Live Chat', 'Virtual Care', '24/7 Support'].map((item) => (
                  <div key={item} className="rounded-3xl bg-slate-900/70 p-4 text-center border border-white/10">
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
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
