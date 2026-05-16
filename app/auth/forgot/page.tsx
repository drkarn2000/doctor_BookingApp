import Link from 'next/link';
import { siteSectionOverlay } from '../../siteBackground';

export default function ForgotPasswordPage() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className={`absolute inset-0 ${siteSectionOverlay}`} />
      <div className="relative mx-auto max-w-3xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[2.25rem] bg-white shadow-card">
          <div className="bg-cyan-500 px-8 py-10 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">Reset Password</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight">Forgot your password?</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-cyan-100/90">
              Enter your email and we’ll send a secure link to reset your account password instantly.
            </p>
          </div>
          <div className="space-y-8 p-10">
            <form className="space-y-6">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input type="email" placeholder="Enter your email" className="mt-3 w-full px-4 py-3" />
              </label>
              <button className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Send Reset Link
              </button>
            </form>
            <p className="text-sm text-slate-500">
              Remembered your password?{' '}
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
