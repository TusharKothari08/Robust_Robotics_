// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openNestedDropdown, setOpenNestedDropdown] = useState(null);

//   const navLinks = [
//     {
//       name: "Who We Are",
//       dropdown: true,
//       children: [
//         {
//           name: "Our Businesses",
//           dropdown: true,
//           children: [
//             { name: "Autonomous Aerial Systems", href: "/business/aerial-systems" },
//             { name: "Defense & Security Solutions", href: "/business/defense-security" },
//             { name: "Maritime & Coastal Systems", href: "/business/maritime-coastal" },
//             { name: "Mission Integration & Analytics", href: "/business/mission-analytics" },
//             { name: "Autonomy & Artificial Intelligence", href: "/business/autonomy-ai" },
//             { name: "Training & Operator Development", href: "/business/training-operator" },
//           ],
//         },
//         {
//           name: "Sustainability & Social Impact",
//           dropdown: true,
//           children: [
//             { name: "Environmental Restoration", href: "/impact/environmental-restoration" },
//             { name: "Community Resilience", href: "/impact/community-resilience" },
//             { name: "Employee Volunteerism", href: "/impact/employee-volunteerism" },
//             { name: "Employee-Focused Programs", href: "/impact/employee-programs" },
//             { name: "Sustainability", href: "/impact/sustainability" },
//           ],
//         },
//         { name: "Ethics", href: "/ethics" },
//         { name: "Global Activities", href: "/global-activities" },
//       ],
//     },
//     {
//       name: "What We Do",
//       dropdown: true,
//       children: [
//         { name: "Smart City Solutions", href: "/what-we-do/smart-city-solutions" },
//         { name: "Defense & Security Systems", href: "/what-we-do/defense-security-systems" },
//         { name: "Commercial Robotics & Automation", href: "/what-we-do/commercial-robotics" },
//         { name: "AI Surveillance & Computer Vision", href: "/what-we-do/ai-surveillance" },
//         { name: "Autonomous Mobility Systems", href: "/what-we-do/autonomous-mobility" },
//         { name: "Maritime & Coastal Monitoring", href: "/what-we-do/maritime-monitoring" },
//         { name: "Mission Control & Command Platform", href: "/what-we-do/mission-control" },
//         { name: "Research & Innovation (R&D)", href: "/what-we-do/research-innovation" },
//       ],
//     },
//     { name: "Knowledge Center", href: "/knowledge-center" },
//     {
//       name: "Company",
//       dropdown: true,
//       children: [
//         { name: "About Us", href: "/about-us" },
//         { name: "Team", href: "/team" },
//       ],
//     },
//     {
//       name: "Support",
//       dropdown: true,
//       children: [
//         { name: "Contact Us", href: "/contact" },
//         { name: "Customer Support", href: "/support" },
//       ],
//     },
//     { name: "Careers", href: "/careers" },
//   ];

//   return (
//     <nav className="w-full bg-[#0A1A2F]/95 backdrop-blur-xl border-b border-white/5 fixed top-0 z-50">
//       <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">

//       <div className="flex items-center justify-between h-[88px]">

//         {/* 🔥 MOBILE MENU BUTTON LEFT */}
//         <button
//   onClick={() => setIsOpen(prev => !prev)}
//   className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
// >
//   <span
//     className={`
//       absolute w-6 h-[2px] bg-white transition-all duration-300
//       ${isOpen ? "rotate-45" : "-translate-y-2"}
//     `}
//   />
//   <span
//     className={`
//       absolute w-6 h-[2px] bg-white transition-all duration-300
//       ${isOpen ? "opacity-0" : "opacity-100"}
//     `}
//   />
//   <span
//     className={`
//       absolute w-6 h-[2px] bg-white transition-all duration-300
//       ${isOpen ? "-rotate-45" : "translate-y-2"}
//     `}
//   />
// </button>

//         <Link to="/" className="text-white text-[22px] font-semibold tracking-wider">
//           Robust Robotics
//         </Link>

//           {/* Desktop */}
//           <div className="hidden md:flex items-center space-x-10 text-white/90 text-[15px] font-medium tracking-wide">
//             {navLinks.map((link, index) => {

//               if (link.dropdown) {
//                 return (
//                   <div key={index} className="relative group">

//                     <span className="cursor-pointer hover:text-gray-200 transition">
//                       {link.name}
//                     </span>

//                     {/* 🔥 MAIN DROPDOWN */}
//                     <div
//                       className="
//                         absolute left-0 top-[30px]
//                         min-w-[220px] w-max
//                         bg-[#142F4D]/85 backdrop-blur-2xl
//                         border border-white/5
//                         rounded-xl
//                         shadow-[0_12px_35px_rgba(0,0,0,0.35)]
//                         opacity-0 invisible translate-y-2
//                         group-hover:opacity-100
//                         group-hover:visible
//                         group-hover:translate-y-0
//                         transition-all duration-200 ease-out
//                         z-[999]
//                         py-1.5
//                       "
//                     >
//                       {link.children.map((child, i) => {

//                         if (child.dropdown) {
//                           return (
//                             <div key={i} className="relative group/nested">

//                               <div className="flex justify-between items-center px-4 py-2 hover:bg-white/5 transition cursor-pointer rounded-lg mx-1">
//                                 <span className="text-white/90">{child.name}</span>
//                                 <span className="text-white/50">›</span>
//                               </div>

//                               {/* 🔥 NESTED */}
//                               <div
//                                 className="
//                                   absolute top-0 left-full ml-2
//                                   min-w-[240px] w-max
//                                   bg-[#142F4D]/85 backdrop-blur-2xl
//                                   border border-white/5
//                                   rounded-xl
//                                   shadow-[0_10px_28px_rgba(0,0,0,0.25)]
//                                   opacity-0 invisible translate-x-2
//                                   group-hover/nested:opacity-100
//                                   group-hover/nested:visible
//                                   group-hover/nested:translate-x-0
//                                   transition-all duration-200 ease-out
//                                   z-[9999]
//                                   py-1.5
//                                 "
//                               >
//                                 {child.children.map((sub, subIndex) => (
//                                   <Link
//                                     key={subIndex}
//                                     to={sub.href}
//                                     className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg mx-1 transition"
//                                   >
//                                     {sub.name}
//                                   </Link>
//                                 ))}
//                               </div>

//                             </div>
//                           );
//                         }

//                         return (
//                           <Link
//                             key={i}
//                             to={child.href}
//                             className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg mx-1 transition"
//                           >
//                             {child.name}
//                           </Link>
//                         );
//                       })}
//                     </div>

//                   </div>
//                 );
//               }

//               return (
//                 <Link
//                   key={index}
//                   to={link.href}
//                   className="relative hover:text-gray-200 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all hover:after:w-full"
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </div>

          

//         </div>
//       </div>
//       {/* ================= MOBILE SIDEBAR ================= */}
// <div
//   className={`
//     fixed top-0 left-0 h-full w-[280px]
//     bg-[#0A1A2F]/95
//     border-r border-white/10
//     z-[9999]
//     transform
//     ${isOpen ? "translate-x-0" : "-translate-x-full"}
//     transition-transform duration-300 ease-in-out
//     md:hidden
//   `}
// >

//   <div className="p-5 space-y-2 mt-24">

//     {navLinks.map((link, index) => (

//       <div key={index}>

//         {/* NORMAL LINK */}
//         {!link.dropdown && (
//           <Link
//             to={link.href}
//             onClick={() => setIsOpen(false)}
//             className="block py-3 px-3 text-white/90 hover:bg-white/10 rounded-lg"
//           >
//             {link.name}
//           </Link>
//         )}

//         {/* MAIN DROPDOWN */}
//         {link.dropdown && (
//           <div>

//             <div
//               onClick={() =>
//                 setOpenDropdown(openDropdown === index ? null : index)
//               }
//               className="flex justify-between items-center py-3 px-3 cursor-pointer text-white hover:bg-white/10 rounded-lg"
//             >
//               {link.name}
//               <span>▾</span>
//             </div>

//             {openDropdown === index && (
//               <div className="ml-4 border-l border-white/10 pl-3">

//                 {link.children.map((child, i) => (

//                   <div key={i}>

//                     {!child.dropdown && (
//                       <Link
//                         to={child.href}
//                         onClick={() => setIsOpen(false)}
//                         className="block py-2 text-white/70 hover:text-white"
//                       >
//                         {child.name}
//                       </Link>
//                     )}

//                     {/* 🔥 NESTED DROPDOWN */}
//                     {child.dropdown && (
//                       <>
//                         <div
//                           onClick={() =>
//                             setOpenNestedDropdown(
//                               openNestedDropdown === i ? null : i
//                             )
//                           }
//                           className="flex justify-between items-center py-2 text-white/80 cursor-pointer"
//                         >
//                           {child.name}
//                           <span>▾</span>
//                         </div>

//                         {openNestedDropdown === i && (
//                           <div className="ml-4 border-l border-white/10 pl-3">

//                             {child.children.map((sub, subIndex) => (
//                               <Link
//                                 key={subIndex}
//                                 to={sub.href}
//                                 onClick={() => setIsOpen(false)}
//                                 className="block py-2 text-white/60 hover:text-white"
//                               >
//                                 {sub.name}
//                               </Link>
//                             ))}

//                           </div>
//                         )}
//                       </>
//                     )}

//                   </div>

//                 ))}

//               </div>
//             )}

//           </div>
//         )}

//       </div>

//     ))}

//   </div>
// </div>


// {/* BACKDROP */}
// {isOpen && (
//   <div
//     onClick={() => setIsOpen(false)}
//     className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
//   />
// )}
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NAV_BG = "#0A1A2F";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // menuStack holds arrays of menu items for the mobile panel; start with top-level nav
  const [menuStack, setMenuStack] = useState(null);

  const navLinks = [
    {
      name: "Who We Are",
      dropdown: true,
      children: [
        {
          name: "Our Businesses",
          dropdown: true,
          children: [
            { name: "Autonomous Aerial Systems", href: "/business/aerial-systems" },
            { name: "Defense & Security Solutions", href: "/business/defense-security" },
            { name: "Maritime & Coastal Systems", href: "/business/maritime-coastal" },
            { name: "Mission Integration & Analytics", href: "/business/mission-analytics" },
            { name: "Autonomy & Artificial Intelligence", href: "/business/autonomy-ai" },
            { name: "Training & Operator Development", href: "/business/training-operator" },
          ],
        },
        {
          name: "Sustainability & Social Impact",
          dropdown: true,
          children: [
            { name: "Environmental Restoration", href: "/impact/environmental-restoration" },
            { name: "Community Resilience", href: "/impact/community-resilience" },
            { name: "Employee Volunteerism", href: "/impact/employee-volunteerism" },
            { name: "Employee-Focused Programs", href: "/impact/employee-programs" },
            { name: "Sustainability", href: "/impact/sustainability" },
          ],
        },
        { name: "Ethics", href: "/ethics" },
        { name: "Global Activities", href: "/global-activities" },
      ],
    },
    {
      name: "What We Do",
      dropdown: true,
      children: [
        { name: "Smart City Solutions", href: "/what-we-do/smart-city-solutions" },
        { name: "Defense & Security Systems", href: "/what-we-do/defense-security-systems" },
        { name: "Commercial Robotics & Automation", href: "/what-we-do/commercial-robotics" },
        { name: "AI Surveillance & Computer Vision", href: "/what-we-do/ai-surveillance" },
        { name: "Autonomous Mobility Systems", href: "/what-we-do/autonomous-mobility" },
        { name: "Maritime & Coastal Monitoring", href: "/what-we-do/maritime-monitoring" },
        { name: "Mission Control & Command Platform", href: "/what-we-do/mission-control" },
        { name: "Research & Innovation (R&D)", href: "/what-we-do/research-innovation" },
      ],
    },
    { name: "Knowledge Center", href: "/knowledge-center" },
    {
      name: "Company",
      dropdown: true,
      children: [
        { name: "About Us", href: "/about-us" },
        { name: "Team", href: "/team" },
      ],
    },
    {
      name: "Support",
      dropdown: true,
      children: [
        { name: "Contact Us", href: "/contact" },
        { name: "Customer Support", href: "/support" },
      ],
    },
    { name: "Careers", href: "/careers" },
  ];

  // initialize menuStack once (lazy)
  useEffect(() => {
    setMenuStack([navLinks]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Body scroll lock when sidebar open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setMenuStack([navLinks]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Mobile navigation stack helpers
  const currentMenu = () => menuStack?.[menuStack.length - 1] || [];
  const pushMenu = (children) => setMenuStack((s) => (s ? [...s, children] : [navLinks, children]));
  const popMenu = () => setMenuStack((s) => (s && s.length > 1 ? s.slice(0, -1) : s));

  // close & reset
  const closeMenu = () => {
    setIsOpen(false);
    setMenuStack([navLinks]);
  };

  return (
    <nav className="w-full fixed top-0 z-50" style={{ backgroundColor: NAV_BG }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-[88px]">

          {/* Mobile hamburger (left) */}
          <button
            onClick={() => setIsOpen((p) => !p)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`} />
          </button>

          {/* Brand - center on mobile, left on desktop */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link to="/" className="text-white text-[22px] font-semibold" onClick={() => { if (isOpen) closeMenu(); }}>
              Robust Robotics
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 text-white text-[15px] pr-6">
            {navLinks.map((link, idx) => {
              if (link.dropdown) {
                return (
                  <div key={idx} className="relative group">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 hover:text-blue-300 transition text-white"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {link.name}
                      <svg className="w-3 h-3" viewBox="0 0 20 20" fill="none" aria-hidden>
                        <path d="M5 7.5 L10 12.5 L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* main dropdown */}
                    <div
                      className="
                        absolute left-0 top-[36px] min-w-[220px]
                        bg-[#142F4D] border border-white/6 rounded-xl shadow-lg
                        opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                        transition-all duration-200 py-2 z-50
                      "
                    >
                      {link.children.map((child, cIdx) => {
                        if (child.dropdown) {
                          return (
                            <div key={cIdx} className="relative group/nested">
                              <div className="flex items-center justify-between px-4 py-2 hover:bg-white/5 cursor-pointer rounded-lg mx-1 text-white/90">
                                <span>{child.name}</span>
                                <span className="text-white/60">›</span>
                              </div>

                              {/* nested panel */}
                              <div className="
                                absolute top-0 left-full ml-2 min-w-[240px]
                                bg-[#142F4D] border border-white/6 rounded-xl shadow-lg
                                opacity-0 invisible translate-x-2 group-hover/nested:opacity-100 group-hover/nested:visible group-hover/nested:translate-x-0
                                transition-all duration-200 py-2
                              ">
                                {child.children.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    to={sub.href}
                                    className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg mx-1 transition"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        return (
                          <Link
                            key={cIdx}
                            to={child.href}
                            className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg mx-1 transition"
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={idx} to={link.href} className="hover:text-blue-300 transition text-white">
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR - solid NAV_BG (no transparency) */}
      <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-[${NAV_BG}] md:hidden z-[10000] transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out shadow-2xl`}
        role="dialog"
        aria-modal="true"
      >
        {/* header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/8">
          {menuStack && menuStack.length > 1 ? (
            <button
              onClick={() => popMenu()}
              className="text-white/95 text-sm flex items-center gap-2"
            >
              ← Back
            </button>
          ) : (
            <span className="text-white font-semibold text-lg">Robust Robotics</span>
          )}

          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-white text-2xl"
          >
            ×
          </button>
        </div>

        {/* content */}
        <div className="px-4 py-4 overflow-y-auto h-[calc(100%-76px)]">
          {(currentMenu() || []).map((item, i) => (
            <div key={i} className="mb-1">
              {!item.dropdown ? (
                <Link
                  to={item.href}
                  onClick={closeMenu}
                  className="block py-4 px-3 text-white/95 rounded-lg hover:bg-white/6 transition"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() => pushMenu(item.children)}
                  className="w-full flex items-center justify-between py-4 px-3 text-white/95 rounded-lg hover:bg-white/6 transition"
                  aria-expanded="false"
                >
                  <span className="text-left">{item.name}</span>
                  <span className="text-white/70">›</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 md:hidden z-[9999]"
          aria-hidden="true"
        />
      )}
    </nav>
  );
}