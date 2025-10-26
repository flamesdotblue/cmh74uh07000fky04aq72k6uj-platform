import React from 'react';
import { Wallet, Bell, Receipt, CreditCard, Users, CheckCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, points }) => (
  <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-white/20 transition">
    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center ring-1 ring-white/15">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{description}</p>
    {points && (
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 -top-20 -z-0 h-40 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything you need to collect rent</h2>
          <p className="mt-3 text-white/70">Automate payments, keep tenants informed, and reconcile your books without spreadsheets.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Wallet}
            title="Automated rent collection"
            description="Set due dates, partials, deposits, and late fees. Funds settle to your bank fast."
            points={["Auto-charge on due dates","Prorated first month","Instant receipts for tenants"]}
          />
          <FeatureCard
            icon={Bell}
            title="Smart reminders"
            description="Keep tenants on track with email and SMS reminders that adapt to payment status."
            points={["Due date and past-due nudges","Configurable cadence","Owner branded messages"]}
          />
          <FeatureCard
            icon={Receipt}
            title="Accounting-ready"
            description="Categorize transactions, export to CSV, and integrate with your accounting workflow."
            points={["Income & expense tracking","Unit-level ledgers","Payout reconciliation"]}
          />
          <FeatureCard
            icon={CreditCard}
            title="Flexible payment methods"
            description="Tenants can pay via ACH or card. You control fees, deposits, and refunds."
            points={["ACH and cards","Auto late fees","Security deposit handling"]}
          />
          <FeatureCard
            icon={Users}
            title="Tenant portal"
            description="A simple portal for tenants to view balance, pay rent, and download receipts."
            points={["Saved payment methods","Recurring autopay","Export receipts"]}
          />
          <FeatureCard
            icon={CreditCard}
            title="Owner dashboard"
            description="Monitor units, cash flow, and risk at a glance with real-time analytics."
            points={["Vacancy tracking","Delinquency insights","Forecasted cashflow"]}
          />
        </div>
      </div>
    </section>
  );
}
