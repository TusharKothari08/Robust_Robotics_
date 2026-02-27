import React from "react";
import { Link } from "react-router-dom";

export default function EmployeeFocusedPrograms() {
  const programs = [
    {
      title: "Wellbeing & Mental Health",
      bullets: ["EAP services", "Workshops", "Manager training"]
    },
    {
      title: "Inclusion & Diversity",
      bullets: ["Employee resource groups", "Mentoring programs", "Inclusive hiring training"]
    },
    {
      title: "Career Development",
      bullets: ["Learning stipends", "Internal mobility frameworks", "Leadership pathways"]
    }
  ];

  return (
    <article className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0A1A2F]">Employee-Focused Programs</h1>
        <p className="text-slate-700 mt-2">Programs we run to support our people — holistic career and wellbeing support.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-6">
        {programs.map((p) => (
          <div key={p.title} className="rounded-lg border p-4 bg-[#FBFDFF]">
            <h3 className="font-semibold text-[#0A1A2F]">{p.title}</h3>
            <ul className="mt-2 text-sm text-slate-700 list-disc pl-5">
              {p.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F]">Policy highlights</h2>
        <p className="text-slate-700 mt-2">Flexible working, leave policies that support caregiving, and transparent promotion frameworks.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F]">Metrics</h2>
        <ul className="mt-2 text-slate-700">
          <li>• Participation in L&D: 62% of employees (annual)</li>
          <li>• Employee Net Promoter Score: +26</li>
          <li>• Gender pay gap analysis: reviewed annually with action plans</li>
        </ul>
      </section>

      <div className="mt-6">
        <Link to="/ssi/employee-volunteerism" className="px-4 py-2 rounded-md bg-[#0A1A2F] text-white inline-block">Volunteer programs</Link>
      </div>

      <footer className="pt-6 border-t">
        <small className="text-slate-500">For internal HR policies, visit the intranet or contact People Ops.</small>
      </footer>
    </article>
  );
}