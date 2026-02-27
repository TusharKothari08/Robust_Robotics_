import React from "react";
import { Link } from "react-router-dom";

export default function Sustainability() {
  const targets = [
    { metric: "Scope 1 & 2 emissions", baseline: "2020", target: "Net-zero by 2040" },
    { metric: "Renewable electricity", baseline: "35%", target: "100% by 2030" },
    { metric: "Waste to landfill", baseline: "450 t/year", target: "50% reduction by 2028" }
  ];

  return (
    <article className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0A1A2F]">Sustainability Strategy</h1>
        <p className="text-slate-700 mt-2">Our climate and circularity strategy — measurable targets and delivery roadmap.</p>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F]">Targets & progress</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {targets.map((t) => (
            <div key={t.metric} className="rounded-lg border p-4 bg-[#FBFDFF]">
              <h3 className="font-semibold">{t.metric}</h3>
              <p className="text-sm text-slate-700 mt-1">Baseline: {t.baseline}</p>
              <p className="text-sm text-slate-700">Target: {t.target}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F]">Delivery pillars</h2>
        <ul className="list-disc pl-6 mt-2 text-slate-700 space-y-2">
          <li>Energy efficiency & electrification across operations.</li>
          <li>100% renewable electricity through offtakes and certificates.</li>
          <li>Design for circularity: product takeback and materials reuse.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F]">Reports & transparency</h2>
        <p className="text-slate-700 mt-2">
          Annual sustainability reports and audited emissions disclosures are available in the investor hub.
        </p>
        <div className="mt-4">
          <a href="/reports/sustainability-2025.pdf" className="px-4 py-2 rounded-md bg-[#0A1A2F] text-white inline-block">Download latest report</a>
          <Link to="/ssi/environmental-restoration" className="ml-3 px-4 py-2 rounded-md border border-[#0A1A2F] text-[#0A1A2F] inline-block">See restoration work</Link>
        </div>
      </section>

      <footer className="pt-6 border-t">
        <small className="text-slate-500">Targets reviewed and approved by the Sustainability Board.</small>
      </footer>
    </article>
  );
}