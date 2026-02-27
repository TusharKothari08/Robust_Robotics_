import React from "react";
import { Link } from "react-router-dom";

function Stat({ number, label }) {
  return (
    <div className="bg-[#F7FAFC] rounded-lg p-4 text-center">
      <div className="text-2xl font-bold text-[#0A1A2F]">{number}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}

export default function EnvironmentalRestoration() {
  return (
    <article className="prose prose-invert max-w-none p-6 md:p-10 bg-white rounded-2xl shadow-sm">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0A1A2F]">
          Environmental Restoration
        </h1>
        <p className="text-slate-700 mt-2">
          Restoring landscapes, conserving habitats and returning ecological
          function to degraded sites through science-led interventions.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Stat number="3,200 ha" label="Habitat restored (last 3 years)" />
        <Stat number="18" label="Restoration projects" />
        <Stat number="72%" label="Survival rate of planted native species" />
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F] mb-2">Our approach</h2>
        <ol className="list-decimal pl-6 text-slate-700 space-y-3">
          <li>
            <strong>Assessment:</strong> baseline surveys for soils, hydrology and biodiversity.
          </li>
          <li>
            <strong>Design:</strong> native species selection, erosion control, and adaptive management plans.
          </li>
          <li>
            <strong>Implementation & Monitoring:</strong> community-led plantings, remote-sensing monitoring and three-year survival studies.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F] mb-2">Highlighted programs</h2>
        <div className="space-y-4">
          <div className="rounded-lg border p-4 bg-[#FBFDFF]">
            <h3 className="font-semibold">Riverbank Rewilding</h3>
            <p className="text-sm text-slate-700">
              Stabilising banks, reintroducing native riparian species and
              creating fish refuge zones. Partners: local NGOs and universities.
            </p>
          </div>

          <div className="rounded-lg border p-4 bg-[#FBFDFF]">
            <h3 className="font-semibold">Urban Tree Canopy Initiative</h3>
            <p className="text-sm text-slate-700">
              Planting native shade trees in urban corridors to reduce heat
              islands and increase biodiversity.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F] mb-2">How to join</h2>
        <p className="text-slate-700">
          Employees and community volunteers can sign up for site-days, or help
          in monitoring via our citizen-science mobile form. We provide training,
          PPE, and travel stipends where necessary.
        </p>
        <div className="mt-4 flex gap-3">
          <Link to="/ssi/employee-volunteerism" className="inline-block px-4 py-2 rounded-md bg-[#0A1A2F] text-white shadow">
            Volunteer opportunities
          </Link>
          <a
            href="#contact"
            className="inline-block px-4 py-2 rounded-md border border-[#0A1A2F] text-[#0A1A2F]"
          >
            Contact the team
          </a>
        </div>
      </section>

      <footer className="pt-6 border-t">
        <small className="text-slate-500">
          Updated Feb 2026 — metrics updated quarterly.
        </small>
      </footer>
    </article>
  );
}