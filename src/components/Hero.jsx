import React from 'react';
import Spline from '@splinetool/react-spline';
import { Home, Shield, Rocket } from 'lucide-react';

const Nav = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center ring-1 ring-white/15">
            <Home className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-white/90">SkyRent</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-10 px-4 items-center justify-center rounded-lg text-sm font-medium text-white/90 ring-1 ring-white/20 hover:bg-white/10 transition">Sign in</button>
          <button className="inline-flex h-10 px-4 items-center justify-center rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition">Create account</button>
        </div>
      </div>
    </header>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />
      </div>

      <Nav />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-24 md:pt-40 md:pb-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Shield className="h-3.5 w-3.5" />
              Bank-grade security and payouts
            </div>
            <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Collect rent on autopilot.
              <span className="block text-white/80">Built for modern property owners.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base md:text-lg text-white/80">
              SkyRent makes rent collection effortless with automated reminders, late fees, and instant payouts. One dashboard for units, tenants, and accounting.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-slate-900 font-semibold shadow-sm hover:bg-slate-100 transition">
                <Rocket className="h-4 w-4" /> Start collecting today
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-white/90 ring-1 ring-white/25 hover:bg-white/10 transition">
                Explore features
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-16 pb-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Monthly rent processed', value: '$12.4M' },
            { label: 'On-time payments', value: '97.2%' },
            { label: 'Average payout time', value: 'T+1 day' },
            { label: 'Properties onboarded', value: '5,200+' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-4">
              <div className="text-xs text-white/60">{s.label}</div>
              <div className="mt-1 text-xl font-semibold">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
