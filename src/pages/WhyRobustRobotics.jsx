// src/pages/WhyRobustRobotics.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";
import { Link } from "react-router-dom";

export default function WhyRobustRobotics() {
  return (
    <div className="w-full bg-white text-gray-900">
      <Navbar />

      {/* Prevent overlap with navbar */}
      <main className="mt-[96px]">
        {/* HERO */}
        <section
          className="relative w-full min-h-[84vh] flex items-center"
          aria-label="Why work at Robust Robotics hero"
        >
          {/* background image */}
          <div className="absolute inset-0 -z-10">
            <img
              src="https://images.unsplash.com/photo-1581092919535-7146c4f12c9c?auto=format&fit=crop&w=2000&q=80"
              alt="Robotics engineering"
              className="w-full h-full object-cover brightness-[0.48]"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-20">
            <p className="text-sm tracking-widest font-semibold uppercase text-gray-900">
              Careers • Robust Robotics
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900 max-w-4xl">
              Why Work With{" "}
              <span className="font-semibold text-blue-400">Robust Robotics</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-900 max-w-3xl leading-relaxed">
              Build dependable, field-ready robotics systems that make real-world impact.
              Join a team that ships production systems — not just prototypes.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

  {/* PRIMARY CTA */}
  <div className="mt-12 flex flex-wrap gap-5">

  {/* COMMON BUTTON STYLE */}
  <a
    href="/careers"
    className="
      group
      px-10 py-3.5
      bg-gray-700
      border border-gray-700
      text-white
      backdrop-blur-md
      rounded-xl
      font-semibold
      tracking-wide
      transition-all duration-300
      hover:bg-gray-900
      hover:border-black
      hover:-translate-y-0.5
      hover:shadow-2xl
    "
  >
    Explore Careers
  </a>

  <a
    href="/about-us"
    className="
    group
      px-10 py-3.5
      bg-gray-700
      border border-gray-700
      text-white
      backdrop-blur-md
      rounded-xl
      font-semibold
      tracking-wide
      transition-all duration-300
      hover:bg-gray-900
      hover:border-black
      hover:-translate-y-0.5
      hover:shadow-2xl
    "
  >
    Meet Our Team
  </a>

</div>

</div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
              {[
                { title: "AI", sub: "Autonomous Systems" },
                { title: "CV", sub: "Computer Vision" },
                { title: "HW", sub: "Robotics Hardware" },
                { title: "Ops", sub: "Field Deployment" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white/6 border border-white/10 rounded-2xl p-4"
                >
                  <p className="text-2xl md:text-3xl font-semibold text-gray-900">
                    {s.title}
                  </p>
                  <p className="text-sm text-gray-900 mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-5">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm tracking-widest font-semibold text-gray-900 uppercase">
              [01] INTRODUCTION
            </p>

            <h2 className="mt-6 text-3xl md:text-4xl font-light text-gray-900 max-w-4xl">
              Engineering robotics that matters.
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                We develop robust robotic systems for real operational environments — from
                autonomous navigation in GPS-denied areas to high-fidelity sensing and
                mission-critical deployment mechanisms. Our engineering decisions revolve
                around reliability, maintainability and measurable field performance.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Teams at Robust Robotics own end-to-end systems: sensor selection, firmware,
                perception stacks, flight-control integration, and field validation. If you want
                to learn fast and build technology that ships, this is the place.
              </p>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="bg-white py-24 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
              [02] WHAT MAKES US DIFFERENT
            </p>

            <h3 className="mt-6 text-3xl md:text-4xl text-gray-900 font-light">
              Why our approach works
            </h3>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Builder-first organization",
                  desc: "We ship systems: hardware, embedded, and software teams collaborate to move features from lab to field.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none">
                      <path d="M3 7h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  title: "Full system ownership",
                  desc: "Engineers own features end-to-end: design, integration, verification and field ops.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l3 6 6 .5-4.5 3 1.5 6L12 14l-6 4 1.5-6L3 8.5 9 8 12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  title: "Cross-discipline collaboration",
                  desc: "Embedded, mechanical, AI and operations work in the same sprint to reduce integration risk.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none">
                      <path d="M12 20v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M4 20c4-6 4-10 8-10s4 4 8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  title: "Real product impact",
                  desc: "Our work moves beyond demos — we measure success through field outcomes and reliability.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none">
                      <path d="M3 12h3l3 8 7-16 3 8h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
              ].map((c, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-50 rounded-md">{c.icon}</div>
                    <h4 className="text-xl font-semibold text-gray-900">{c.title}</h4>
                  </div>
                  <p className="mt-4 text-gray-700">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CULTURE */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
              [03] CULTURE
            </p>

            <h3 className="mt-6 text-3xl md:text-4xl text-gray-900 font-light">
              A culture built for engineers
            </h3>

            <p className="mt-6 text-gray-700 max-w-3xl">
              We prioritize rigorous technical review, rapid prototyping, and learning from field tests.
              This creates an environment where engineers take ownership and ship with confidence.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Build Together", desc: "Cross-discipline teams work as one." },
                { title: "Move Fast, Build Smart", desc: "Prototype, test, iterate." },
                { title: "Ownership & Trust", desc: "Engineers lead execution." },
                { title: "Learn Continuously", desc: "Growth through real deployments." },
              ].map((c, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h5 className="font-semibold text-lg text-gray-900">{c.title}</h5>
                  <p className="mt-3 text-gray-700">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES (dark) */}
        <section className="bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm tracking-widest font-semibold text-gray-300 uppercase">
              [04] VALUES
            </p>

            <h3 className="mt-6 text-3xl md:text-4xl font-light">
              Principles that guide our work
            </h3>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Build What Matters", desc: "Solve real problems with practical solutions." },
                { title: "Respect the Engineer’s Mindset", desc: "Curiosity, logic and experimentation." },
                { title: "Deliver with Excellence", desc: "Safety, reliability and performance." },
              ].map((v, i) => (
                <div key={i} className="p-6 border border-white/10 rounded-2xl">
                  <h4 className="text-xl font-semibold">{v.title}</h4>
                  <p className="mt-3 text-gray-300">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK AREAS */}
        <section className="py-24 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
              [05] WORK AREAS
            </p>

            <h3 className="mt-6 text-3xl md:text-4xl font-light">Our areas of expertise</h3>

            <p className="mt-4 text-gray-700 max-w-3xl">
              We build full-stack robotics solutions covering perception, autonomy, hardware
              integration and field operations.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Autonomous Systems", desc: "Perception, planning and control stacks." },
                { title: "Industrial Robotics", desc: "Automation for safety and efficiency." },
                { title: "Computer Vision & AI", desc: "Real-time detection and analytics." },
                { title: "Robotics Infrastructure", desc: "Scalable hardware-software platforms." },
              ].map((a, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold">{a.title}</h4>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p className="mt-4 text-gray-700">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAREER GROWTH */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
              [06] CAREER GROWTH
            </p>

            <h3 className="mt-6 text-3xl md:text-4xl font-light">Career growth at Robust Robotics</h3>

            <p className="mt-4 text-gray-700 max-w-3xl">
              You’ll build systems end-to-end and gain hands-on experience in all layers of robotics:
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Robotics system design",
                "Embedded development",
                "AI integration",
                "Field deployment",
                "Rapid prototyping",
                "Hardware-software integration",
              ].map((skill, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 font-semibold text-gray-800">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
              [07] JOIN US
            </p>

            <h3 className="mt-6 text-3xl md:text-4xl font-light">Join the team building the future of robotics</h3>

            <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
              If you enjoy solving hard engineering problems and shipping real systems, we want to meet you.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/careers"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border border-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Contact Recruiting
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <Lastfooter />
      </main>
    </div>
  );
}