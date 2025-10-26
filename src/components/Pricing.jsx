import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    blurb: 'For up to 3 units',
    features: [
      'ACH payments',
      'Automated reminders',
      'Receipts and invoices',
      'Email support',
    ],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29/mo',
    blurb: 'Up to 50 units',
    features: [
      'All Starter features',
      'Late fees automation',
      'Priority support',
      'CSV export & reports',
    ],
    cta: 'Upgrade to Pro',
    highlight: true,
  },
  {
    name: 'Business',
    price: 'Custom',
    blurb: '50+ units or portfolios',
    features: [
      'Dedicated success manager',
      'SLA & onboarding',
      'Custom payout schedules',
      'Advanced permissions',
    ],
    cta: 'Contact sales',
    highlight: false,
  },
];

const Plan = ({ name, price, blurb, features, cta, highlight }) => (
  <div className={`relative rounded-2xl p-6 ring-1 ${highlight ? 'bg-white text-slate-900 ring-transparent' : 'bg-white/5 text-white ring-white/10'} transition`}> 
    {highlight && (
      <div className="absolute -top-3 left-6 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-medium text-white">Most popular</div>
    )}
    <div className="flex items-baseline justify-between">
      <h3 className="text-lg font-semibold">{name}</h3>
      <span className="text-sm opacity-70">{blurb}</span>
    </div>
    <div className="mt-3 text-3xl font-bold">{price}</div>
    <ul className="mt-4 space-y-2 text-sm">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <CheckCircle className={`mt-0.5 h-4 w-4 ${highlight ? 'text-emerald-600' : 'text-emerald-400'}`} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button className={`mt-6 w-full h-11 rounded-lg font-semibold ${highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white/10 text-white hover:bg-white/20'} transition`}>
      {cta}
    </button>
    <div className={`mt-3 flex items-center gap-2 text-xs ${highlight ? 'text-slate-700' : 'text-white/60'}`}>
      <Shield className="h-3.5 w-3.5" /> No long-term contracts
    </div>
  </div>
);

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free and scale as your portfolio grows. Payment processing fees may apply.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <Plan key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
