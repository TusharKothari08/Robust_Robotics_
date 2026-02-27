// import { useNavigate } from "react-router-dom";

// export default function InnovationUpdatesSection() {
//     const navigate = useNavigate();

//     const updates = [
//         {
//             id: "ai-fire-suppression-platform-advances",
//             title: "AI-Powered Fire Suppression Platform Advances",
//             date: "January 2026",
//             desc: "Our autonomous aerial firefighting system completed field validation, demonstrating rapid threat detection and precision payload deployment in challenging environmental conditions.",
//         },
//         {
//             id: "high-speed-interceptor-architecture-certified",
//             title: "High-Speed Interceptor Architecture Certified",
//             date: "December 2025",
//             desc: "Dual-mode interceptor platform validated for aerial threat response in contested operational theaters, featuring both fiber-guided and autonomous flight modes.",
//         },
//         {
//             id: "next-generation-gis-capabilities-deployed",
//             title: "Next-Generation GIS Capabilities Deployed",
//             date: "November 2025",
//             desc: "Enhanced 360° LiDAR mapping platform now delivers real-time digital twins for defense, infrastructure, and urban development applications.",
//         },
//         {
//             id: "operator-training-systems-expanded",
//             title: "Operator Training Systems Expanded",
//             date: "October 2025",
//             desc: "New simulation-based training modules enable safe skill development for advanced tethered drone operations.",
//         },
//     ];

//     return (
//         <section className="w-full bg-white py-10">
//             <div className="max-w-7xl mx-auto px-6">

//                 {/* Top Row */}
//                 <div className="flex items-center justify-between">
//                     <p className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
//                         [05] INNOVATION UPDATES
//                     </p>

//                     <button
//                         onClick={() => navigate("/innovation-updates")}
//                         className="text-sm font-semibold text-blue-700 hover:underline flex items-center gap-1"
//                         >
//                             View More <span className="text-lg">{">"}</span>
//                     </button>
//                 </div>

//                 {/* Title */}
//                 <h2 className="mt-14 text-4xl md:text-5xl font-light text-gray-900 text-center leading-snug">
//                     Advancing the State of the Art
//                 </h2>

//                 {/* Cards */}
//                 <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {updates.map((item) => (
//                         <div
//                             key={item.id}
//                             className="border rounded-xl p-7 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
//                         >
//                             <div>
//                                 <p className="text-sm text-gray-500 font-semibold">
//                                     {item.date}
//                                 </p>

//                                 <h3 className="mt-4 text-lg font-semibold text-gray-900 leading-snug">
//                                     {item.title}
//                                 </h3>

//                                 <p className="mt-4 text-sm text-gray-600 leading-relaxed">
//                                     {item.desc}
//                                 </p>
//                             </div>

//                             <button
//                                 onClick={() => navigate(`/innovation-updates/${item.id}`)}
//                                 className="mt-8 text-sm font-semibold text-blue-700 hover:underline flex items-center gap-2"
//                             >
//                                 Learn More <span className="text-lg">→</span>
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

import { useNavigate } from "react-router-dom";
import AnimatedLabel from "../components/ui/AnimatedLabel";

export default function InnovationUpdatesSection() {
  const navigate = useNavigate();

  const updates = [
    {
      id: "ai-fire-suppression-platform-advances",
      title: "AI-Powered Fire Suppression Platform Advances",
      date: "January 2026",
      desc: "Our autonomous aerial firefighting system completed field validation, demonstrating rapid threat detection and precision payload deployment in challenging environmental conditions.",
    },
    {
      id: "high-speed-interceptor-architecture-certified",
      title: "High-Speed Interceptor Architecture Certified",
      date: "December 2025",
      desc: "Dual-mode interceptor platform validated for aerial threat response in contested operational theaters, featuring both fiber-guided and autonomous flight modes.",
    },
    {
      id: "next-generation-gis-capabilities-deployed",
      title: "Next-Generation GIS Capabilities Deployed",
      date: "November 2025",
      desc: "Enhanced 360° LiDAR mapping platform now delivers real-time digital twins for defense, infrastructure, and urban development applications.",
    },
    {
      id: "operator-training-systems-expanded",
      title: "Operator Training Systems Expanded",
      date: "October 2025",
      desc: "New simulation-based training modules enable safe skill development for advanced tethered drone operations.",
    },
  ];

  return (
    <section className="w-full bg-gray-100 pt-12 py-10">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* 🔥 SAME LETTER ANIMATION */}
          <AnimatedLabel className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
            [05] INNOVATION UPDATES
          </AnimatedLabel>

          <button
            onClick={() => navigate("/innovation-updates")}
            className="text-sm font-semibold text-blue-500 hover:underline flex items-center gap-1"
          >
            View More <span className="text-lg">{">"}</span>
          </button>
        </div>

        {/* Title */}
        <h2 className="mt-8 text-4xl md:text-5xl font-light text-gray-900 leading-tight max-w-3xl">
          Advancing the State <br className="hidden md:block" />
          of the Art
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {updates.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/innovation-updates/${item.id}`)}
              className="group cursor-pointer bg-white border border-gray-200 rounded-lg p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-gray-300 transition duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Date */}
                <p className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                  {item.date}
                </p>

                {/* Title */}
                <h3 className="mt-4 text-lg font-medium text-gray-900 leading-snug group-hover:text-blue-700 transition">
                  {item.title}
                </h3>

                {/* Accent Line */}
                <div className="w-8 h-[2px] bg-blue-700 mt-4 mb-5 group-hover:w-14 transition-all duration-300"></div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
