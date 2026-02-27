// import { useNavigate } from "react-router-dom";

// export default function CoreCapabilitiesSection() {
//     const navigate = useNavigate();

//     const capabilities = [
//         {
//             title: "AI & Autonomous Navigation",
//             desc: "Proprietary algorithms enabling operation in GPS-denied, low-visibility, and electronically contested environments.",
//             route: "/core-capabilities/ai-autonomous-navigation",
//         },
//         {
//             title: "Advanced Sensor Fusion",
//             desc: "Integration of LiDAR, thermal, optical, and hyperspectral sensors for comprehensive situational awareness.",
//             route: "/core-capabilities/advanced-sensor-fusion",
//         },
//         {
//             title: "Precision Deployment Systems",
//             desc: "Payload delivery mechanisms engineered for accuracy in dynamic operational conditions.",
//             route: "/core-capabilities/precision-deployment",
//         },
//         {
//             title: "Digital Twin & GIS Mapping",
//             desc: "Real-time 3D reconstruction and CAD-ready outputs for infrastructure analysis and mission planning.",
//             route: "/core-capabilities/digital-twin-gis",
//         },
//     ];

//     return (
//         <section className="w-full bg-white py-8">
//             <div className="max-w-7xl mx-auto px-6">

//                 {/* Top Heading */}
//                 <div className="flex items-center justify-between">
//                     <p className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
//                         [04] CORE CAPABILITIES
//                     </p>

//                     <button
//                         onClick={() => navigate("/core-capabilities")}
//                         className="text-sm font-semibold text-blue-700 hover:underline"
//                     >
//                         View All
//                     </button>
//                 </div>

//                 {/* Title */}
//                 <h2 className="mt-14 text-4xl md:text-5xl font-light text-gray-900 text-center leading-snug">
//                     Technology Built for the Toughest Missions
//                 </h2>

//                 {/* Grid */}
//                 <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//                     {capabilities.map((item, index) => (
//                         <div
//                             key={index}
//                             onClick={() => navigate(item.route)}
//                             className="group cursor-pointer relative bg-gray-100 overflow-hidden h-[320px] flex flex-col justify-between p-8 hover:bg-gray-900 transition duration-300"
//                         >
//                             {/* Title */}
//                             <div>
//                                 <h3 className="text-2xl font-light text-gray-900 group-hover:text-white transition">
//                                     {item.title}
//                                 </h3>

//                                 <p className="mt-5 text-sm text-gray-700 leading-relaxed group-hover:text-gray-200 transition">
//                                     {item.desc}
//                                 </p>
//                             </div>

//                             {/* Arrow */}
//                             <div className="flex justify-end">
//                                 <div className="w-12 h-12 flex items-center justify-center border border-gray-500 group-hover:border-white rounded-full transition">
//                                     <span className="text-xl text-gray-900 group-hover:text-white transition">
//                                         →
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Hover Overlay effect */}
//                             <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-black transition"></div>
//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </section>
//     );
// }
import { useNavigate } from "react-router-dom";
import AnimatedLabel from "../components/ui/AnimatedLabel";

export default function CoreCapabilitiesSection() {
  const navigate = useNavigate();

  const capabilities = [
    {
      title: "AI & Autonomous Navigation",
      desc: "Proprietary algorithms enabling operation in GPS-denied, low-visibility, and electronically contested environments.",
      route: "/core-capabilities/ai-autonomous-navigation",
    },
    {
      title: "Advanced Sensor Fusion",
      desc: "Integration of LiDAR, thermal, optical, and hyperspectral sensors for comprehensive situational awareness.",
      route: "/core-capabilities/advanced-sensor-fusion",
    },
    {
      title: "Precision Deployment Systems",
      desc: "Payload delivery mechanisms engineered for accuracy in dynamic operational conditions.",
      route: "/core-capabilities/precision-deployment",
    },
    {
      title: "Digital Twin & GIS Mapping",
      desc: "Real-time 3D reconstruction and CAD-ready outputs for infrastructure analysis and mission planning.",
      route: "/core-capabilities/digital-twin-gis",
    },
  ];

  return (
    <section className="w-full bg-white pt-12 pb-10">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* 🔥 SAME LETTER ANIMATION */}
          <AnimatedLabel className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
            [04] CORE CAPABILITIES
          </AnimatedLabel>

          <button
            onClick={() => navigate("/core-capabilities")}
            className="text-sm font-semibold text-blue-500 hover:underline flex items-center gap-1"
          >
            View More <span className="text-lg">{">"}</span>
          </button>
        </div>

        {/* Title */}
        <h2 className="mt-8 text-4xl md:text-5xl font-light text-gray-800 leading-tight max-w-3xl">
          Technology Built for the <br className="hidden md:block" />
          Toughest Missions
        </h2>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {capabilities.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.route)}
              className="group cursor-pointer bg-white border border-gray-200 rounded-lg h-[300px] flex flex-col justify-between p-8 shadow-sm hover:shadow-md hover:border-gray-300 transition duration-300 hover:-translate-y-1"
            >
              {/* Content */}
              <div>
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>

                {/* Accent Line */}
                <div className="w-8 h-[2px] bg-blue-700 mt-4 mb-6 group-hover:w-14 transition-all duration-300"></div>

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
