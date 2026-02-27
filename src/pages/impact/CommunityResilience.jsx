import React from "react";
import { Link } from "react-router-dom";

export default function CommunityResilience() {
  const pillars = [
    { title: "Local Partnerships", desc: "Funding locally-led initiatives and co-designing projects." },
    { title: "Disaster Preparedness", desc: "Training, early-warning systems, and emergency grants." },
    { title: "Livelihoods", desc: "Skills programs and microgrants to build economic resilience." }
  ];

  return (
    <article className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0A1A2F]">Community Resilience</h1>
        <p className="text-slate-700 mt-2">Programs that increase capacity and recoverability for the communities we operate in.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-6">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-lg border p-4 bg-[#FBFDFF]">
            <h3 className="font-semibold text-[#0A1A2F]">{p.title}</h3>
            <p className="text-sm text-slate-700 mt-2">{p.desc}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F]">Case study — Coastal village flood response</h2>
        <p className="text-slate-700 mt-2">
          We co-funded a community-operated early-warning network that reduced
          evacuation times by 40% in worst-case scenarios. Investments included
          training, low-cost flood sensors and contingency cash grants.
        </p>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Local leadership: community-elected steering group</li>
          <li>Capacity building: 250 people trained</li>
          <li>Outcomes: 0 permanent displacements in follow-up flood season</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F]">Get involved</h2>
        <p className="text-slate-700">
          We favour partnerships with community organisations that can lead projects.
          If you represent an organisation, apply for partnership funding through the link below.
        </p>
        <div className="mt-4">
          <Link to="/ssi/sustainability" className="px-4 py-2 rounded-md bg-[#0A1A2F] text-white inline-block">
            Partnership guidelines
          </Link>
        </div>
      </section>

      <footer className="pt-6 border-t">
        <small className="text-slate-500">Learn more in the Sustainability plan and our annual impact report.</small>
      </footer>
    </article>
  );
}