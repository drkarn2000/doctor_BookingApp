import Link from 'next/link';
import { siteFixedOverlay, siteSectionOverlay } from '../siteBackground';

const credentials = [
  'Board-certified family medicine physician',
  '12+ years of primary care experience',
  'Preventive care, chronic care, and urgent guidance',
  'Video, chat, and follow-up consultation support',
];

export default function DoctorsPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className={`fixed inset-0 -z-20 ${siteFixedOverlay}`}></div>

      <section className="relative isolate overflow-hidden text-white">
        <div className={`absolute inset-0 -z-20 ${siteSectionOverlay}`}></div>
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
        <div className="absolute right-0 top-28 -z-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto grid w-full max-w-[95rem] items-center gap-8 px-4 py-16 lg:grid-cols-[1.1fr,0.9fr] lg:px-6 lg:py-20 xl:gap-10">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.26em] text-cyan-200 shadow-[0_0_0_rgba(255,255,255,0.02)]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Your Dedicated Doctor
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-6xl">
                Meet Dr. Mohit Chhabra, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Your Primary Care Physician</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Experience consistent, personalized healthcare from a trusted family medicine specialist with 12+ years of clinical excellence.
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
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Experience</p>
                <p className="mt-2 text-2xl font-bold text-white">12+ Years</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Patient Rating</p>
                <p className="mt-2 text-2xl font-bold text-white">4.9/5</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Consultations</p>
                <p className="mt-2 text-2xl font-bold text-white">2500+</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/70 shadow-[0_45px_140px_rgba(15,23,42,0.55)] backdrop-blur animate-float">
            <img
              src="https://images.unsplash.com/photo-1758691463354-055e4d72e5fc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dr. Mohit Chhabra - Primary Care Doctor"
              className="h-[560px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
            <div className="absolute right-6 top-6 rounded-3xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl shadow-xl">
              <p className="text-sm font-semibold text-white">Available Now</p>
              <p className="mt-1 text-sm text-cyan-100">Next: Today 2:00 PM</p>
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-slate-950/90 p-6 shadow-2xl backdrop-blur-xl border border-white/10">
              <div className="grid gap-4 sm:grid-cols-[1.5fr,2fr]">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                    <span className="text-2xl">🩺</span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Family Medicine</p>
                    <p className="text-xl font-semibold text-white"></p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {['Board Certified', 'Virtual Care', '24/7 Support'].map((item) => (
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

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden text-white backdrop-blur-sm">
        <div className={`absolute inset-0 ${siteSectionOverlay}`} />
        <div className="absolute left-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-cyan-400/16 blur-3xl" />
        <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-primary/18 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[95rem] px-4 py-14 lg:px-6 lg:py-20">
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
                icon: '⚡',
                title: 'Instant Access',
                text: 'Book appointments in seconds, no waiting rooms, no delays.',
                color: 'from-cyan-500 to-blue-500',
              },
              {
                icon: '🔒',
                title: 'Secure & Private',
                text: 'HIPAA-compliant platform with end-to-end encryption.',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                text: 'No hidden fees, clear pricing for all consultations.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: '🌟',
                title: 'Personalized Care',
                text: 'One dedicated doctor who knows your medical history.',
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
                  <div className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${benefit.color} text-3xl transition-transform duration-500 group-hover:scale-110`}>
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
                We combine cutting-edge technology with the personal touch of traditional healthcare. Get the best of both worlds with our comprehensive digital health platform.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Video Calls', 'Chat Support', 'Digital Records', 'Mobile App'].map((feature) => (
                  <div key={feature} className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">98%</div>
                  <div className="mt-2 text-sm text-slate-300">Patient Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">24/7</div>
                  <div className="mt-2 text-sm text-slate-300">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">5 min</div>
                  <div className="mt-2 text-sm text-slate-300">Average Wait Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">HIPAA</div>
                  <div className="mt-2 text-sm text-slate-300">Certified Secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section className="relative overflow-hidden text-white backdrop-blur-sm">
        <div className={`absolute inset-0 ${siteSectionOverlay}`} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-cyan-500/8 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[95rem] px-4 py-14 lg:px-6 lg:py-20">
          <div className="mb-16 text-center space-y-4 animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Patient Stories</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              What our patients <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">say about us</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-slate-300">
              Real experiences from real patients who trust us with their healthcare needs.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Working Professional',
                rating: 5,
                text: 'The convenience of virtual consultations is incredible. I can get medical advice without leaving my office. Dr. Chhabra is thorough and caring.',
                avatar: 'SJ',
              },
              {
                name: 'Michael Chen',
                role: 'Parent of 2',
                rating: 5,
                text: 'Having one dedicated doctor who knows my family\'s medical history makes all the difference. The care is personalized and consistent.',
                avatar: 'MC',
              },
              {
                name: 'Emma Rodriguez',
                role: 'Senior Citizen',
                rating: 5,
                text: 'Technology made simple! The video calls are crystal clear, and I feel just as comfortable talking to my doctor from home.',
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
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-slate-300 leading-7">"{testimonial.text}"</p>
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

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-xl">
              <div className="text-left">
                <div className="text-2xl font-bold text-cyan-400">4.9/5</div>
                <div className="text-sm text-slate-300">Average Rating</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="text-left">
                <div className="text-2xl font-bold text-cyan-400">2500+</div>
                <div className="text-sm text-slate-300">Happy Patients</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="text-left">
                <div className="text-2xl font-bold text-cyan-400">98%</div>
                <div className="text-sm text-slate-300">Would Recommend</div>
              </div>
            </div>
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
              {credentials.map((item, index) => (
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

          <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/70 shadow-[0_45px_140px_rgba(15,23,42,0.55)] backdrop-blur transition-all duration-500 hover:shadow-[0_50px_160px_rgba(15,23,42,0.65)]">
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
            <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-slate-950/90 p-6 shadow-2xl backdrop-blur-xl border border-white/10">
              <div className="grid gap-4 sm:grid-cols-[1.5fr,2fr]">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                    <span className="text-2xl">🩺</span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300"></p>
                    <p className="text-xl font-semibold text-white">Dr. Mohit Chhabra</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {['Board Certified', 'Virtual Care', '24/7 Support'].map((item) => (
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
    </div>
  );
}
