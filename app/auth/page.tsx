import Link from 'next/link';
import { siteSectionOverlay } from '../siteBackground';

export default function AuthPage() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className={`absolute inset-0 ${siteSectionOverlay}`} />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <div className="space-y-6 rounded-[2.5rem] bg-white/5 p-10 shadow-card backdrop-blur-xl">
            <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Welcome back
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Login to your GP Primary Care account</h1>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              Access consultations, prescriptions, and health records through a modern healthcare experience.
            </p>
            <form className="mt-8 space-y-5 rounded-[2rem] bg-slate-950/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Email</span>
                <input type="email" placeholder="Enter your email" className="mt-3 w-full px-4 py-3 text-slate-950" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Password</span>
                <input type="password" placeholder="Enter your password" className="mt-3 w-full px-4 py-3 text-slate-950" />
              </label>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-white text-cyan-500" />
                  Remember me
                </label>
                <Link href="/auth/forgot" className="text-cyan-300 hover:text-white">
                  Forgot Password?
                </Link>
              </div>
              <button className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Login
              </button>
            </form>
            <div className="space-y-3 text-center text-sm text-slate-300">
              <p>Or continue with</p>
              <div className="flex items-center justify-center gap-3">
                {['G', 'f', ''].map((icon) => (
                  <button key={icon} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-lg text-white transition hover:bg-white/20">
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-white p-10 shadow-card text-slate-950">
            <h2 className="text-3xl font-semibold">Create Account</h2>
            <p className="mt-4 text-slate-600">Register to access consultations, prescriptions, and health records in one place.</p>
            <form id="signup" className="mt-8 space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Full Name</span>
                <input type="text" placeholder="Enter your full name" className="mt-3 w-full px-4 py-3" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input type="email" placeholder="Enter your email" className="mt-3 w-full px-4 py-3" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Password</span>
                <input type="password" placeholder="Create a password" className="mt-3 w-full px-4 py-3" />
              </label>
              <button className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Register
              </button>
            </form>
            <p className="mt-6 text-sm text-slate-500">
              Already have an account?{' '}
              <Link href="/auth" className="font-semibold text-cyan-500 hover:text-cyan-400">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
