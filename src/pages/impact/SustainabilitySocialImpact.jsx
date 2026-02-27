// import React from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";

// /**
//  * Parent page for Sustainability & Social Impact.
//  * Renders hero, quick nav cards and an <Outlet /> for nested pages.
//  *
//  * Tailwind is assumed to be configured in the project.
//  */

// const Card = ({ to, title, desc }) => (
//   <Link
//     to={to}
//     className="group block rounded-2xl bg-gradient-to-b from-[#16263A] to-[#0F2333]/90 p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
//     aria-label={title}
//   >
//     <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#E6F0FF]">
//       {title}
//     </h3>
//     <p className="text-sm text-[#DCE7F5]">{desc}</p>
//   </Link>
// );

// export default function SustainabilitySocialImpact() {
//   const location = useLocation();

//   const cards = [
//     {
//       to: "environmental-restoration",
//       title: "Environmental Restoration",
//       desc: "Habitat repair, reforestation and biodiversity initiatives."
//     },
//     {
//       to: "community-resilience",
//       title: "Community Resilience",
//       desc: "Local partnerships, disaster readiness, and support programs."
//     },
//     {
//       to: "employee-volunteerism",
//       title: "Employee Volunteerism",
//       desc: "Organised volunteer days and skills-based volunteering."
//     },
//     {
//       to: "employee-focused-programs",
//       title: "Employee-Focused Programs",
//       desc: "Wellbeing, inclusion, professional development."
//     },
//     {
//       to: "sustainability",
//       title: "Sustainability",
//       desc: "Our strategy for carbon reduction, circularity and targets."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-900">
//       {/* Hero */}
//       <header className="bg-[#0A1A2F] text-white">
//         <div className="max-w-7xl mx-auto px-6 py-20">
//           <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
//             <div className="flex-1">
//               <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
//                 Sustainability &amp; Social Impact
//               </h1>
//               <p className="mt-4 text-slate-200 max-w-2xl">
//                 We design and run programs that restore ecosystems, strengthen
//                 communities, and enable our employees to make a measurable
//                 positive impact.
//               </p>

//               <nav
//                 aria-label="breadcrumb"
//                 className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300"
//               >
//                 <Link to="/" className="hover:underline">
//                   Home
//                 </Link>
//                 <span aria-hidden="true">/</span>
//                 <span className="font-medium">Sustainability &amp; Social Impact</span>
//               </nav>
//             </div>

//             <div className="w-full lg:w-96">
//               <div className="rounded-xl bg-[#122839] p-6 shadow-lg border border-[#1f3042]/50">
//                 <p className="text-sm text-slate-200">Overview</p>
//                 <h2 className="mt-2 text-xl font-semibold">Strategy at a glance</h2>
//                 <ul className="mt-3 text-slate-200 text-sm space-y-2">
//                   <li>• Net-zero roadmap aligned with science-based targets</li>
//                   <li>• Community-first project selection</li>
//                   <li>• Employee engagement &amp; leadership development</li>
//                 </ul>
//                 <div className="mt-4">
//                   <Link
//                     to="sustainability"
//                     className="inline-block px-4 py-2 rounded-md bg-white text-[#0A1A2F] font-medium shadow hover:opacity-95"
//                   >
//                     Read our plan
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Content */}
//       <main className="max-w-7xl mx-auto px-6 py-12">
//         {/* Quick nav grid */}
//         <section aria-labelledby="quick-nav" className="mb-12">
//           <h2 id="quick-nav" className="text-xl font-semibold mb-4">
//             Explore topics
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {cards.map((c) => (
//               <Card
//                 key={c.to}
//                 to={c.to}
//                 title={c.title}
//                 desc={c.desc}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Placeholder area where nested pages are rendered */}
//         <section aria-label="topic">
//           <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
//             <Outlet />
//             {/* If no nested route selected, show a helpful panel */}
//             {location.pathname === "/ssi" && (
//               <div className="text-slate-700">
//                 <h3 className="text-lg font-semibold mb-2">Pick a topic</h3>
//                 <p className="text-sm">
//                   Click any card above or use the dropdown in the site nav to
//                   view a focused page with goals, programs, KPIs and ways to
//                   get involved.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


import { Outlet } from "react-router-dom";

export default function SustainabilitySocialImpact() {
  return (
    <div className="min-h-screen pt-28 bg-white text-[#0A1A2F]">

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h1 className="text-4xl font-bold">
          Sustainability & Social Impact
        </h1>
      </div>

      {/* CHILD PAGE RENDER SLOT */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <Outlet />
      </div>

    </div>
  );
}