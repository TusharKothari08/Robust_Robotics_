import React from "react";
import { Link } from "react-router-dom";

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9F3FF] text-[#08304F] text-sm font-medium">
    {children}
  </span>
);

export default function EmployeeVolunteerism() {
  const volunteerTypes = [
    { title: "Community Days", desc: "Company-sponsored site-days with logistics & training." },
    { title: "Skills-Based Volunteering", desc: "Our engineers, designers and managers provide time-limited pro-bono support." },
    { title: "Blood Drives & Support", desc: "Local health partnerships and emergency donations." }
  ];

  return (
    <article className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
      <header className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#0A1A2F]">Employee Volunteerism</h1>
          <p className="text-slate-700 mt-2">Engaging colleagues with meaningful volunteer opportunities — paid volunteering hours provided.</p>
        </div>
        <div className="hidden md:block">
          <Badge>Paid volunteer hours</Badge>
        </div>
      </header>

      <section className="mb-6 grid md:grid-cols-3 gap-4">
        {volunteerTypes.map((v) => (
          <div key={v.title} className="rounded-lg border p-4 bg-[#FBFDFF]">
            <h3 className="font-semibold text-[#0A1A2F]">{v.title}</h3>
            <p className="text-sm text-slate-700 mt-2">{v.desc}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F]">How it works</h2>
        <ol className="list-decimal pl-6 mt-2 text-slate-700 space-y-2">
          <li>Find an activity through the volunteer portal.</li>
          <li>Register; team leads coordinate logistics and safety briefings.</li>
          <li>We reimburse approved travel costs and record paid hours on payroll.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-[#0A1A2F]">Volunteer Portal</h2>
        <p className="text-slate-700 mt-2">Visit the volunteer portal to see upcoming site-days and skills requests.</p>
        <div className="mt-4">
          <a href="/internal/volunteer-portal" className="px-4 py-2 rounded-md bg-[#0A1A2F] text-white inline-block">Open portal</a>
          <Link to="/ssi/employee-focused-programs" className="ml-3 px-4 py-2 rounded-md border border-[#0A1A2F] text-[#0A1A2F] inline-block">See employee programs</Link>
        </div>
      </section>

      <footer className="pt-6 border-t">
        <small className="text-slate-500">Questions? Reach out to People &amp; Culture or your local CSR rep.</small>
      </footer>
    </article>
  );
}