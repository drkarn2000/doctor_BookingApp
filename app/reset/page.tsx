import Link from 'next/link';
import { siteSectionOverlay } from '../siteBackground';

export default function ResetPasswordPage() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className={`absolute inset-0 ${siteSectionOverlay}`} />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <div className="rounded-[2.25rem] bg-white/5 p-10 shadow-card backdrop-blur-xl">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Reset Password</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white">Create a new secure password.</h1>
            <p className="max-w-2xl text-slate-300">
              Enter your new password below to restore access to your GP Primary Care account.
            </p>
          </div>
          <form className="mt-10 space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-slate-200">New Password</span>
              <input type="password" placeholder="Create a new password" className="mt-3 w-full px-4 py-3 text-slate-950" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-200">Confirm Password</span>
              <input type="password" placeholder="Confirm your password" className="mt-3 w-full px-4 py-3 text-slate-950" />
            </label>
            <button className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              Reset Password
            </button>
          </form>
          <p className="mt-6 text-sm text-slate-300">
            Back to{' '}
            <Link href="/auth" className="font-semibold text-cyan-300 hover:text-cyan-200">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
