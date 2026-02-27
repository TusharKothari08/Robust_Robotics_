// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Lastfooter from "../components/Lastfooter";
// import { Link } from "react-router-dom";

// export default function Careers() {
//   const [keyword, setKeyword] = useState("");
//   const [location, setLocation] = useState("All Locations");
//   const [radius, setRadius] = useState("25 miles");
//   const [department, setDepartment] = useState("All");
//   const [experience, setExperience] = useState("All");

//   return (
//     <div className="w-full bg-white text-black">
//       <Navbar />

//       {/* Prevent Overlap with Fixed Navbar */}
//       <div className="pt-20">
//         {/* HERO SECTION */}
//         <section className="bg-white border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-6 py-20">
//             <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
//               Careers
//             </p>

//             <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight max-w-5xl">
//               Where Innovation Meets Purpose
//             </h1>

//             <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
//               Engineering the autonomous systems that define tomorrow.
//             </p>

//             <div className="mt-10 flex flex-wrap gap-4">
//               <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-900 transition">
//                 Search Jobs
//               </button>

//               <button className="border border-gray-400 px-8 py-4 font-semibold hover:bg-gray-100 transition">
//                 View All Openings
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* JOB SEARCH */}
//         <section className="bg-gray-50 border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-6 py-16">
//             <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
//               Job Search
//             </p>

//             <h2 className="mt-6 text-3xl md:text-5xl font-light">
//               Find Your Next Challenge
//             </h2>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Keyword */}
//               <div className="bg-white border border-gray-200 p-6">
//                 <p className="text-sm font-semibold text-gray-700 mb-2">
//                   Keyword Search
//                 </p>
//                 <input
//                   value={keyword}
//                   onChange={(e) => setKeyword(e.target.value)}
//                   placeholder="Role, Technology, Department"
//                   className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black transition"
//                 />
//               </div>

//               {/* Location */}
//               <div className="bg-white border border-gray-200 p-6">
//                 <p className="text-sm font-semibold text-gray-700 mb-2">
//                   Location
//                 </p>
//                 <select
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black transition"
//                 >
//                   <option>All Locations</option>
//                   <option>North America</option>
//                   <option>Europe</option>
//                   <option>Asia-Pacific</option>
//                   <option>Remote</option>
//                 </select>
//               </div>

//               {/* Radius */}
//               <div className="bg-white border border-gray-200 p-6">
//                 <p className="text-sm font-semibold text-gray-700 mb-2">
//                   Search Radius
//                 </p>
//                 <select
//                   value={radius}
//                   onChange={(e) => setRadius(e.target.value)}
//                   className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black transition"
//                 >
//                   <option>5 miles</option>
//                   <option>15 miles</option>
//                   <option>25 miles</option>
//                   <option>35 miles</option>
//                   <option>50 miles</option>
//                   <option>Remote</option>
//                 </select>
//               </div>

//               {/* Department */}
//               <div className="bg-white border border-gray-200 p-6">
//                 <p className="text-sm font-semibold text-gray-700 mb-2">
//                   Department
//                 </p>
//                 <select
//                   value={department}
//                   onChange={(e) => setDepartment(e.target.value)}
//                   className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black transition"
//                 >
//                   <option>All</option>
//                   <option>Engineering</option>
//                   <option>Research & Development</option>
//                   <option>Operations</option>
//                   <option>Business Development</option>
//                   <option>Support</option>
//                 </select>
//               </div>

//               {/* Experience */}
//               <div className="bg-white border border-gray-200 p-6">
//                 <p className="text-sm font-semibold text-gray-700 mb-2">
//                   Experience Level
//                 </p>
//                 <select
//                   value={experience}
//                   onChange={(e) => setExperience(e.target.value)}
//                   className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black transition"
//                 >
//                   <option>All</option>
//                   <option>Entry Level</option>
//                   <option>Mid-Level</option>
//                   <option>Senior</option>
//                   <option>Lead / Principal</option>
//                 </select>
//               </div>

//               {/* Search Button */}
//               <div className="bg-white border border-gray-200 p-6 flex items-end">
//                 <button className="w-full bg-black text-white py-4 font-semibold hover:bg-gray-900 transition">
//                   Search Jobs
//                 </button>
//               </div>
//             </div>

//             {/* Navigation Quick Links */}
//             <div className="mt-14 border-t border-gray-200 pt-10">
//               <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
//                 Navigation
//               </p>

//               <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm font-semibold text-gray-800">
//                 {[
//                   "Working Here",
//                   "Locations",
//                   "Skill Areas",
//                   "Experience Levels",
//                   "Returning Applicants",
//                   "#LifeAtRobust Blog",
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="border border-gray-200 bg-white px-4 py-3 hover:bg-gray-100 cursor-pointer transition"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section className="bg-white border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-6 py-20">
//             <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
//               About Robust Robotics
//             </p>

//             <p className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
//               Robust Robotics exists to advance the frontier of autonomous technology and deploy
//               intelligent systems that solve real-world challenges. Through robotics, artificial
//               intelligence, and unmanned platforms, we're building the future of autonomous
//               operations with a team committed to making defense more capable, industry more
//               efficient, and environmental protection more effective.
//             </p>
//           </div>
//         </section>

//         {/* CAREER FOUNDATION */}
//         <section className="bg-gray-50 border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-6 py-20">
//             <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
//               Build Your Career on Solid Foundations
//             </p>

//             <h2 className="mt-6 text-3xl md:text-5xl font-light">
//               From Concept to Global Impact
//             </h2>

//             <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
//               What began as a focused engineering team in 2018 has evolved into a 350+ person
//               organization spanning three continents. We've deployed over 500 autonomous systems
//               worldwide, but we're just beginning to realize the potential of intelligent machines
//               working alongside humans.
//             </p>

//             <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
//               We view careers as long-term partnerships, not short-term positions. Your growth
//               trajectory here is shaped by technical curiosity, the pursuit of meaningful impact,
//               and the opportunity to advance alongside cutting-edge technology.
//             </p>

//             <button className="mt-10 bg-black text-white px-8 py-4 font-semibold hover:bg-gray-900 transition">
//               View Current Openings
//             </button>
//           </div>
//         </section>

//         {/* WHAT DRIVES OUR TEAM */}
//         <section className="bg-white border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-6 py-20">
//             <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
//               What Drives Our Team
//             </p>

//             <h2 className="mt-6 text-3xl md:text-5xl font-light">
//               Mission-Critical Work That Matters
//             </h2>

//             <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
//               Our team members work on systems that protect lives, enhance operational capability,
//               and preserve environmental resources. Whether you're designing flight control
//               algorithms, architecting computer vision systems, or integrating sensor packages,
//               your work has tangible impact.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[
//                 "Defense systems operating in contested environments",
//                 "Industrial robots improving manufacturing precision and safety",
//                 "Environmental platforms protecting marine ecosystems",
//                 "Underwater vehicles mapping critical infrastructure",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="border border-gray-200 bg-gray-50 px-6 py-6"
//                 >
//                   <p className="font-semibold text-gray-900">{item}</p>
//                 </div>
//               ))}
//             </div>

//             <h3 className="mt-16 text-2xl font-semibold text-gray-900">
//               Technology at the Cutting Edge
//             </h3>

//             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 "State-of-the-art simulation and testing facilities",
//                 "Advanced manufacturing and integration labs",
//                 "Field testing ranges for aerial and ground platforms",
//                 "Marine testing facilities for underwater systems",
//                 "High-performance computing clusters for AI development",
//                 "Autonomy and ownership focused engineering culture",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white border border-gray-200 p-6 hover:bg-gray-50 transition"
//                 >
//                   <p className="text-gray-800 font-medium">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* VALUES */}
//         <section className="bg-gray-50 border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-6 py-20">
//             <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
//               Values That Guide Us
//             </p>

//             <h2 className="mt-6 text-3xl md:text-5xl font-light">
//               Excellence Through Principles
//             </h2>

//             <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
//               Our values aren't just words on a page—they're the decision-making framework that
//               guides how we work, collaborate, and innovate.
//             </p>

//             <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[
//                 {
//                   title: "Engineer for Impact",
//                   desc: "Build systems that perform when it matters most. Every decision considers operational reality, not just technical elegance.",
//                 },
//                 {
//                   title: "Pursue Technical Truth",
//                   desc: "Let data and physics guide decisions. Technical integrity is non-negotiable.",
//                 },
//                 {
//                   title: "Own the Outcome",
//                   desc: "We succeed when systems perform in the field, meet customer needs, and accomplish missions.",
//                 },
//                 {
//                   title: "Move with Urgency and Precision",
//                   desc: "Fast iteration without compromising safety, reliability, or performance.",
//                 },
//                 {
//                   title: "Collaborate Across Boundaries",
//                   desc: "Break down silos across disciplines to build complete autonomous systems.",
//                 },
//                 {
//                   title: "Simplify the Complex",
//                   desc: "Find elegant solutions. Complexity without value is waste.",
//                 },
//               ].map((value, index) => (
//                 <div
//                   key={index}
//                   className="bg-white border border-gray-200 p-8 hover:bg-gray-50 transition"
//                 >
//                   <h3 className="text-xl font-semibold text-gray-900">
//                     {value.title}
//                   </h3>
//                   <p className="mt-4 text-gray-700 leading-relaxed">{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* BENEFITS */}
//         <section className="bg-white border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-6 py-20">
//             <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
//               What We Offer
//             </p>

//             <h2 className="mt-6 text-3xl md:text-5xl font-light">
//               Competitive Compensation and Benefits
//             </h2>

//             <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Financial Package",
//                   points: [
//                     "Competitive base salaries",
//                     "Performance-based bonuses",
//                     "Equity participation",
//                     "Relocation assistance",
//                     "Annual salary reviews",
//                   ],
//                 },
//                 {
//                   title: "Health & Wellness",
//                   points: [
//                     "Medical, dental, vision coverage",
//                     "Mental health support",
//                     "Fitness & wellness stipends",
//                     "Ergonomic workspace support",
//                     "Healthy meals at offices",
//                   ],
//                 },
//                 {
//                   title: "Work-Life Integration",
//                   points: [
//                     "Flexible work arrangements",
//                     "Generous PTO (4 weeks minimum)",
//                     "16-week parental leave",
//                     "Sabbatical program",
//                     "Volunteer time off",
//                   ],
//                 },
//                 {
//                   title: "Professional Development",
//                   points: [
//                     "$5,000+ learning budget",
//                     "Conference attendance",
//                     "Advanced degree sponsorship",
//                     "Technical certification support",
//                     "Career path planning",
//                   ],
//                 },
//                 {
//                   title: "Retirement Planning",
//                   points: [
//                     "401(k) with company match",
//                     "Financial advisory services",
//                     "Stock purchase programs",
//                     "Pre-tax commuter benefits",
//                   ],
//                 },
//               ].map((benefit, index) => (
//                 <div
//                   key={index}
//                   className="border border-gray-200 bg-gray-50 p-8"
//                 >
//                   <h3 className="text-xl font-semibold text-gray-900">
//                     {benefit.title}
//                   </h3>
//                   <ul className="mt-5 space-y-2 text-gray-700">
//                     {benefit.points.map((p, i) => (
//                       <li key={i}>• {p}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* LOCATIONS */}
//         <section className="bg-gray-50 border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-6 py-20">
//             <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
//               Our Locations
//             </p>

//             <h2 className="mt-6 text-3xl md:text-5xl font-light">
//               Global Presence, Local Impact
//             </h2>

//             <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[
//                 {
//                   title: "Headquarters - Silicon Valley, California",
//                   points: [
//                     "Primary R&D, manufacturing, and business operations",
//                     "85,000 sq ft facility with advanced labs",
//                     "Flight testing range and ground test areas",
//                     "Marine testing access through partner facilities",
//                   ],
//                 },
//                 {
//                   title: "East Coast Operations - Boston, Massachusetts",
//                   points: [
//                     "Computer vision and AI research",
//                     "University partnerships",
//                     "Perception and autonomy algorithms focus",
//                     "Software development hub",
//                   ],
//                 },
//                 {
//                   title: "European Center - Rotterdam, Netherlands",
//                   points: [
//                     "Manufacturing and European support",
//                     "Maritime systems focus",
//                     "Regional customer proximity",
//                     "Port access for sea testing",
//                   ],
//                 },
//                 {
//                   title: "Asia-Pacific Office - Singapore",
//                   points: [
//                     "Regional business development",
//                     "Support and training center",
//                     "Partnership development",
//                     "Customer operations support",
//                   ],
//                 },
//               ].map((loc, index) => (
//                 <div
//                   key={index}
//                   className="bg-white border border-gray-200 p-8"
//                 >
//                   <h3 className="text-xl font-semibold text-gray-900">
//                     {loc.title}
//                   </h3>
//                   <ul className="mt-5 space-y-2 text-gray-700">
//                     {loc.points.map((p, i) => (
//                       <li key={i}>• {p}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-12 border border-gray-200 bg-white p-8">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 Remote Opportunities
//               </h3>
//               <p className="mt-4 text-gray-700 leading-relaxed">
//                 Select positions support remote work for qualified candidates in approved locations.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* APPLICATION PROCESS */}
//         <section className="bg-white border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-6 py-20">
//             <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
//               Application Process
//             </p>

//             <h2 className="mt-6 text-3xl md:text-5xl font-light">
//               How to Join Us
//             </h2>

//             <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 { step: "01", title: "Explore Opportunities", desc: "Browse open roles across locations and departments." },
//                 { step: "02", title: "Submit Application", desc: "Apply online with your resume and optional portfolio." },
//                 { step: "03", title: "Initial Screening", desc: "Recruiting team reviews applications and schedules calls." },
//                 { step: "04", title: "Technical Assessment", desc: "Challenge, design discussion, or portfolio evaluation." },
//                 { step: "05", title: "On-Site Interviews", desc: "Technical and cultural fit interviews with the team." },
//                 { step: "06", title: "Offer & Onboarding", desc: "Competitive offer and structured onboarding experience." },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="border border-gray-200 bg-gray-50 p-8"
//                 >
//                   <p className="text-sm font-semibold text-gray-500 tracking-widest">
//                     STEP {item.step}
//                   </p>
//                   <h3 className="mt-4 text-xl font-semibold text-gray-900">
//                     {item.title}
//                   </h3>
//                   <p className="mt-4 text-gray-700 leading-relaxed">{item.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <p className="mt-10 text-gray-700 text-lg">
//               <span className="font-semibold">Average Timeline:</span> 3–5 weeks from application to offer for most positions.
//             </p>
//           </div>
//         </section>

//         {/* FINAL CTA */}
//         <section className="bg-gray-50 border-t border-gray-200">
//           <div className="max-w-7xl mx-auto px-6 py-20 text-center">
//             <h2 className="text-3xl md:text-5xl font-light">
//               Ready to Build the Future?
//             </h2>

//             <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
//               Robust Robotics is an Equal Opportunity Employer committed to building a diverse and inclusive team.
//               We welcome applicants from all backgrounds to apply.
//             </p>

//             <div className="mt-10 flex flex-wrap gap-4 justify-center">
//               <button className="bg-black text-white px-10 py-4 font-semibold hover:bg-gray-900 transition">
//                 View All Jobs
//               </button>

//               <button className="border border-gray-400 px-10 py-4 font-semibold hover:bg-white hover:border-black transition">
//                 Search by Location
//               </button>

//               <button className="border border-gray-400 px-10 py-4 font-semibold hover:bg-white hover:border-black transition">
//                 Search by Department
//               </button>
//             </div>

//             <p className="mt-10 text-sm tracking-widest text-gray-500 uppercase">
//               Engineering Intelligence Into Motion
//             </p>
//           </div>
//         </section>

//         <Footer />
//         <Lastfooter />
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";

export default function Careers() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [openSkill, setOpenSkill] = useState(null);

  const faqData = [
    {
      q: "Do you sponsor visas for international candidates?",
      a: "Yes. We sponsor H-1B, TN, and other work visas for qualified candidates when required.",
    },
    {
      q: "Do you offer remote work options?",
      a: "Select roles support remote work. Hardware and integration roles typically require on-site presence.",
    },
    {
      q: "How does career progression work?",
      a: "We offer both technical and management tracks. Advancement is based on impact and capability growth.",
    },
  ];

  const skillAreas = [
    {
      title: "Engineering & Technology",
      content:
        "Mechanical, Electrical, Software, Systems, AI/ML, Robotics Engineering disciplines.",
    },
    {
      title: "Research & Development",
      content:
        "Advanced concepts, prototyping, algorithm development, next-generation platform research.",
    },
    {
      title: "Manufacturing & Operations",
      content:
        "Production engineering, QA, supply chain, integration, field support.",
    },
    {
      title: "Business & Support",
      content:
        "Program management, business development, finance, HR, legal, marketing.",
    },
  ];

  return (
    <div className="bg-white text-black w-full">
      <Navbar />
      <div className="pt-28">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
            Robust Robotics — Careers
          </p>

          <h1 className="mt-8 text-6xl md:text-7xl font-light leading-tight">
            Where Innovation <span className="font-semibold">Meets Purpose</span>
          </h1>

          <p className="mt-10 text-xl text-gray-600 max-w-3xl">
            Engineering the autonomous systems that define tomorrow.
          </p>

          <div className="mt-14 flex gap-6 flex-wrap">
            <button className="bg-black text-white px-10 py-4 text-sm font-semibold tracking-wider">
              SEARCH JOBS
            </button>
            <button className="border border-black px-10 py-4 text-sm font-semibold tracking-wider hover:bg-black hover:text-white transition">
              VIEW ALL OPENINGS
            </button>
          </div>
        </section>

        {/* JOB SEARCH */}
        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-light">Find Your Next Challenge</h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <input className="border border-gray-300 px-5 py-4 focus:outline-none focus:border-black transition" placeholder="Role, Technology, Department" />
              <select className="border border-gray-300 px-5 py-4 focus:outline-none focus:border-black transition">
                <option>All Locations</option>
              </select>
              <select className="border border-gray-300 px-5 py-4 focus:outline-none focus:border-black transition">
                <option>25 Miles</option>
              </select>
              <select className="border border-gray-300 px-5 py-4 focus:outline-none focus:border-black transition">
                <option>All Departments</option>
              </select>
              <select className="border border-gray-300 px-5 py-4 focus:outline-none focus:border-black transition">
                <option>All Experience Levels</option>
              </select>
              <button className="bg-black text-white px-8 py-4 font-semibold">
                SEARCH JOBS
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-4xl mx-auto px-6 py-32">
          <h2 className="text-4xl font-light">About Robust Robotics</h2>
          <p className="mt-10 text-lg text-gray-600 leading-relaxed">
            Robust Robotics exists to advance the frontier of autonomous technology
            and deploy intelligent systems that solve real-world challenges.
          </p>
        </section>

        {/* VALUES */}
        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-32">
            <h2 className="text-4xl font-light">Values That Guide Us</h2>

            <div className="mt-16 grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xl font-semibold">Engineer for Impact</h3>
                <p className="mt-4 text-gray-600">
                  Build systems that perform when it matters most.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Pursue Technical Truth</h3>
                <p className="mt-4 text-gray-600">
                  Let data and physics guide decisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Own the Outcome</h3>
                <p className="mt-4 text-gray-600">
                  Take responsibility for results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Collaborate Across Boundaries</h3>
                <p className="mt-4 text-gray-600">
                  Break down silos between disciplines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILL AREAS */}
        <section className="max-w-4xl mx-auto px-6 py-32">
          <h2 className="text-4xl font-light text-center">
            Skill Areas & Departments
          </h2>

          <div className="mt-16 space-y-6">
            {skillAreas.map((item, i) => (
              <div key={i} className="border-b pb-6">
                <button
                  className="w-full text-left font-medium"
                  onClick={() => setOpenSkill(openSkill === i ? null : i)}
                >
                  {item.title}
                </button>
                {openSkill === i && (
                  <p className="mt-4 text-gray-600 text-sm">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* APPLICATION PROCESS */}
        <section className="bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-32">
            <h2 className="text-4xl font-light">Application Process</h2>

            <div className="mt-14 space-y-10">
              {["Explore Opportunities", "Submit Application", "Initial Screening", "Technical Assessment", "On-Site Interviews", "Offer & Onboarding"].map((step, i) => (
                <div key={i} className="flex gap-8">
                  <div className="text-2xl font-light">{`0${i + 1}`}</div>
                  <div>
                    <h4 className="font-semibold">{step}</h4>
                    <p className="text-gray-600 text-sm mt-2">
                      Step details and expectations.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 py-32">
          <h2 className="text-4xl font-light text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-16 space-y-6">
            {faqData.map((item, i) => (
              <div key={i} className="border-b pb-6">
                <button
                  className="w-full text-left font-medium"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  {item.q}
                </button>
                {openFAQ === i && (
                  <p className="mt-4 text-gray-600 text-sm">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

          <div className="relative max-w-5xl mx-auto px-6 py-36 text-center">
            <div className="w-16 h-[1px] bg-gray-600 mx-auto mb-12"></div>

            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              Ready to <span className="font-semibold">Build the Future?</span>
            </h2>

            <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Join a team engineering mission-critical autonomous systems that
              operate where precision, reliability, and intelligence matter most.
            </p>

            <div className="mt-14 flex justify-center gap-6 flex-wrap">
              <button className="bg-white text-black px-12 py-4 text-sm font-semibold tracking-wider transition transform hover:-translate-y-1 hover:shadow-2xl">
                VIEW ALL JOBS
              </button>

              <button className="border border-gray-500 px-12 py-4 text-sm font-semibold tracking-wider hover:border-white hover:bg-white hover:text-black transition">
                SEARCH BY DEPARTMENT
              </button>
            </div>

            <p className="mt-16 text-xs tracking-[0.3em] uppercase text-gray-600">
              Engineering Intelligence Into Motion
            </p>
          </div>
        </section>

        <Footer />
        <Lastfooter />
      </div>
    </div>
  );
}

