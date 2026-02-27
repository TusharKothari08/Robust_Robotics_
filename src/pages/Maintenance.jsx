

// // src/pages/Maintenance.jsx
// import { useEffect, useMemo, useState } from "react";
// import { SITE_CONFIG } from "../config/siteConfig";

// export default function Maintenance() {
//   const contact = SITE_CONFIG.MAINTENANCE_CONTACT_EMAIL || "support@example.com";
//   const estimatedIso = SITE_CONFIG.MAINTENANCE_ESTIMATED_END || null;

//   // If an estimated end time exists, show a live countdown
//   const targetTs = useMemo(() => (estimatedIso ? new Date(estimatedIso).getTime() : null), [estimatedIso]);
//   const [remainingMs, setRemainingMs] = useState(targetTs ? Math.max(targetTs - Date.now(), 0) : 0);

//   useEffect(() => {
//     if (!targetTs) return;
//     const t = setInterval(() => {
//       const rem = Math.max(targetTs - Date.now(), 0);
//       setRemainingMs(rem);
//       if (rem === 0) clearInterval(t);
//     }, 1000);
//     return () => clearInterval(t);
//   }, [targetTs]);

//   // attempt to reload periodically (useful when maintenance finishes)
//   useEffect(() => {
//     const id = setInterval(() => {
//       // try a lightweight request by reloading the page (or call an endpoint)
//       // NOTE: this will only attempt reload if maintenance mode is off server-side,
//       // in dev it will simply reload.
//       window.location.reload();
//     }, 60_000); // every 60s
//     return () => clearInterval(id);
//   }, []);

//   // helper format mm:ss or days/hours if large
//   const formatRemaining = (ms) => {
//     if (!ms) return null;
//     let total = Math.floor(ms / 1000);
//     const days = Math.floor(total / 86400);
//     total -= days * 86400;
//     const hours = Math.floor(total / 3600);
//     total -= hours * 3600;
//     const minutes = Math.floor(total / 60);
//     const seconds = total - minutes * 60;

//     if (days > 0) return `${days}d ${hours}h ${minutes}m`;
//     if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
//     return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">
//       {/* subtle top bar */}
//       <div className="h-1 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

//       <main className="flex-1 flex items-center justify-center px-6 py-12">
//         <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center">

//           {/* LEFT: big message */}
//           <div className="space-y-6">
//             <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
//               Scheduled Maintenance
//             </h1>

//             <p className="text-lg text-gray-600 max-w-xl">
//               We’re performing scheduled maintenance to deliver a more reliable
//               platform. Thank you for your patience — we’ll be back online soon.
//             </p>

//             <div className="flex flex-wrap gap-4 items-center">
//               <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg">
//                 <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
//                 <span className="text-sm font-medium text-gray-700">Maintenance in progress</span>
//               </div>

//               {targetTs ? (
//                 <div className="inline-flex flex-col">
//                   <span className="text-xs text-gray-500">Estimated time remaining</span>
//                   <span className="text-sm font-semibold text-gray-800">{formatRemaining(remainingMs)}</span>
//                 </div>
//               ) : (
//                 <div className="text-sm text-gray-500">Estimated downtime: a few minutes</div>
//               )}
//             </div>

//             {/* contact area */}
//             <div className="mt-6">
//               <p className="text-sm text-gray-500 mb-2">Need help while we’re offline?</p>
//               <a
//                 href={`mailto:${contact}`}
//                 className="inline-block text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg shadow-sm"
//               >
//                 Contact: {contact}
//               </a>
//             </div>
//           </div>

//           {/* RIGHT: status card */}
//           <aside className="relative">
//             <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200 shadow-sm">
//               {/* subtle pattern */}
//               <div className="mb-6">
//                 <h3 className="text-sm text-gray-600">Live progress</h3>
//                 <p className="mt-2 text-gray-700 font-medium text-lg">Deploying fixes & optimizations</p>
//               </div>

//               {/* indeterminate progress bar */}
//               <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="h-3 relative bg-white">
//                   <div
//                     className="absolute inset-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-slide"
//                     style={{ transform: "skewX(-12deg)" }}
//                   />
//                 </div>
//               </div>

//               {/* small status items */}
//               <ul className="mt-6 space-y-4">
//                 <li className="flex items-start gap-3">
//                   <div className="w-3 h-3 rounded-full bg-green-400 mt-1" />
//                   <div>
//                     <div className="text-sm font-medium text-gray-800">Core API</div>
//                     <div className="text-xs text-gray-500">Updating routing & fallbacks</div>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <div className="w-3 h-3 rounded-full bg-yellow-400 mt-1" />
//                   <div>
//                     <div className="text-sm font-medium text-gray-800">Frontend</div>
//                     <div className="text-xs text-gray-500">Pushing new assets</div>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <div className="w-3 h-3 rounded-full bg-gray-300 mt-1" />
//                   <div>
//                     <div className="text-sm font-medium text-gray-800">Database</div>
//                     <div className="text-xs text-gray-500">Monitoring</div>
//                   </div>
//                 </li>
//               </ul>

//               <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600">
//                 We’ll notify you once the site is back. Meanwhile reach out at{" "}
//                 <a href={`mailto:${contact}`} className="text-gray-800 font-medium underline">
//                   {contact}
//                 </a>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       <footer className="text-center text-sm text-gray-400 pb-8">
//         © {new Date().getFullYear()} Robust Robotics — Thank you for your patience.
//       </footer>

//       {/* small inline styles for keyframe used above (Tailwind doesn't provide custom animate-slide by default) */}
//       <style>{`
//         @keyframes slide {
//           0% { left: -40%; }
//           50% { left: 50%; }
//           100% { left: 100%; }
//         }
//         .animate-slide { animation: slide 1.8s linear infinite; }
//       `}</style>
//     </div>
//   );
// }

// src/pages/Maintenance.jsx
import { useEffect, useMemo, useState } from "react";
import { SITE_CONFIG } from "../config/siteConfig";

export default function Maintenance() {
  const contact =
    SITE_CONFIG.MAINTENANCE_CONTACT_EMAIL || "support@example.com";

  const estimatedIso = SITE_CONFIG.MAINTENANCE_ESTIMATED_END || null;

  const targetTs = useMemo(
    () => (estimatedIso ? new Date(estimatedIso).getTime() : null),
    [estimatedIso]
  );

  const [remainingMs, setRemainingMs] = useState(
    targetTs ? Math.max(targetTs - Date.now(), 0) : 0
  );

  useEffect(() => {
    if (!targetTs) return;

    const t = setInterval(() => {
      const rem = Math.max(targetTs - Date.now(), 0);
      setRemainingMs(rem);
    }, 1000);

    return () => clearInterval(t);
  }, [targetTs]);

  const formatRemaining = (ms) => {
    if (!ms) return null;
    let total = Math.floor(ms / 1000);
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">

      {/* subtle top divider */}
      <div className="h-[2px] w-full bg-gray-100" />

      {/* CENTER CONTENT */}
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-3xl text-center">

          {/* Label */}
          <p className="text-sm tracking-[0.25em] text-gray-400 mb-6">
            ROBUST ROBOTICS
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
            Scheduled Maintenance
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Our website is temporarily unavailable while we perform
            scheduled improvements to enhance performance and reliability.
            We appreciate your patience and will be back shortly.
          </p>

          {/* Status */}
          <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-3 rounded-full border border-gray-200 mb-10">
            <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-gray-700 text-sm font-medium">
              Maintenance in progress
            </span>
          </div>

          {/* Countdown OR fallback */}
          {targetTs ? (
            <p className="text-gray-500 mb-8">
              Estimated availability in{" "}
              <span className="font-semibold text-gray-800">
                {formatRemaining(remainingMs)}
              </span>
            </p>
          ) : (
            <p className="text-gray-500 mb-8">
              Expected downtime: a few minutes
            </p>
          )}

          {/* CONTACT */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-6 inline-block">
            <p className="text-sm text-gray-500 mb-2">
              Need immediate assistance?
            </p>

            <a
              href={`mailto:${contact}`}
              className="text-lg font-medium text-gray-900 hover:underline"
            >
              {contact}
            </a>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-400 pb-8">
        © {new Date().getFullYear()} Robust Robotics
      </footer>
    </div>
  );
}