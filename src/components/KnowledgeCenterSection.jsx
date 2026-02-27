// import { useNavigate } from "react-router-dom";

// export default function KnowledgeCenterSection() {
//     const navigate = useNavigate();

//     const resources = [
//         {
//             type: "Technical Brief",
//             title: "Autonomous Navigation in GPS-Denied Environments",
//             desc: "Exploring sensor fusion and AI-driven positioning for reliable operation in contested zones.",
//             action: "Download PDF",
//             route: "/knowledge-center/autonomous-navigation-gps-denied",
//         },
//         {
//             type: "Case Study",
//             title: "Rapid Infrastructure Assessment Using LiDAR-Based Digital Twins",
//             desc: "How our 3D mapping platform reduced survey time by 75% for critical infrastructure projects.",
//             action: "Read Case Study",
//             route: "/knowledge-center/lidar-digital-twins-case-study",
//         },
//         {
//             type: "White Paper",
//             title: "The Role of Fiber-Optic Tethering in Modern UAV Operations",
//             desc: "Analysis of secure communications and unlimited flight time for specialized mission profiles.",
//             action: "Access White Paper",
//             route: "/knowledge-center/fiber-optic-tethering-uav",
//         },
//     ];

//     return (
//         <section className="w-full bg-white py-10">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Top Row */}
//                 <div className="flex items-center justify-between">
//                     <p className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
//                         [06] KNOWLEDGE CENTER
//                     </p>

//                     <button
//                         onClick={() => navigate("/knowledge-center")}
//                         className="text-sm font-semibold text-blue-700 hover:underline flex items-center gap-1">
//                             View More <span className="text-lg">{">"}</span>
//                     </button>
//                 </div>

//                 {/* Title */}
//                 <h2 className="mt-8 text-4xl md:text-5xl font-light text-gray-900  leading-snug">
//                     Insights from the Field
//                 </h2>

//                 {/* Cards */}
//                 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
//                     {resources.map((item, index) => (
//                         <div
//                             key={index}
//                             className="border rounded-xl p-10 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
//                         >
//                             <div>
//                                 <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                                     {item.type}
//                                 </p>

//                                 <h3 className="mt-5 text-xl font-semibold text-gray-900 leading-snug">
//                                     {item.title}
//                                 </h3>

//                                 <p className="mt-5 text-gray-600 leading-relaxed">
//                                     {item.desc}
//                                 </p>
//                             </div>

//                             <button
//                                 onClick={() => navigate(item.route)}
//                                 className="mt-10 text-blue-700 font-semibold hover:underline flex items-center gap-2"
//                             >
//                                 {item.action} <span className="text-lg">→</span>
//                             </button>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom CTA */}
//                 <div className="mt-16 text-center">
//                     <button
//                         onClick={() => navigate("/knowledge-center")}
//                         className="bg-blue-700 text-white px-10 py-4 font-semibold hover:bg-blue-800 transition"
//                     >
//                         View Complete Resource Library
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }

import { useNavigate } from "react-router-dom";
import AnimatedLabel from "../components/ui/AnimatedLabel";

export default function KnowledgeCenterSection() {
  const navigate = useNavigate();

  const resources = [
    {
      type: "Technical Brief",
      title: "Autonomous Navigation in GPS-Denied Environments",
      desc: "Exploring sensor fusion and AI-driven positioning for reliable operation in contested zones.",
      route: "/knowledge-center/autonomous-navigation-gps-denied",
    },
    {
      type: "Case Study",
      title: "Rapid Infrastructure Assessment Using LiDAR-Based Digital Twins",
      desc: "How our 3D mapping platform reduced survey time by 75% for critical infrastructure projects.",
      route: "/knowledge-center/lidar-digital-twins-case-study",
    },
    {
      type: "White Paper",
      title: "The Role of Fiber-Optic Tethering in Modern UAV Operations",
      desc: "Analysis of secure communications and unlimited flight time for specialized mission profiles.",
      route: "/knowledge-center/fiber-optic-tethering-uav",
    },
  ];

  return (
    <section className="w-full bg-white pt-12 pb-12">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* 🔥 SAME LETTER ANIMATION */}
          <AnimatedLabel className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
            [06] KNOWLEDGE CENTER
          </AnimatedLabel>

          <button
            onClick={() => navigate("/knowledge-center")}
            className="text-sm font-semibold text-blue-500 hover:underline flex items-center gap-1"
          >
            View More <span>{">"}</span>
          </button>
        </div>

        {/* Title */}
        <h2 className="mt-8 text-4xl md:text-5xl font-light text-gray-900 leading-tight max-w-3xl">
          Insights from the Field
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

          {resources.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.route)}
              className="group cursor-pointer bg-white border border-gray-200 rounded-lg p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-gray-300 transition duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Type */}
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                  {item.type}
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

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => navigate("/knowledge-center")}
            className="border border-blue-700 text-blue-700 px-8 py-3 font-semibold rounded-md hover:bg-blue-700 hover:text-white transition"
          >
            View Complete Resource Library
          </button>
        </div>

      </div>
    </section>
  );
}
