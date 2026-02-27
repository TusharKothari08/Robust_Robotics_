

// import { useNavigate } from "react-router-dom";
// import why_RR from "../assets/why_RR.png";
// import AnimatedLabel from "../components/ui/AnimatedLabel";

// export default function WhyRobustRoboticsSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

//         {/* LEFT SIDE */}
//         <div>

//           {/* Top Label Row */}
//           <div className="flex items-center justify-between mb-8">
//             <AnimatedLabel className="text-sm font-semibold tracking-widest text-gray-900 uppercase">
//               [07] WHY ROBUST ROBOTICS
//             </AnimatedLabel>

//             <button
//               onClick={() => navigate("/why-robust-robotics")}
//               className="text-sm font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1 transition"
//             >
//               View More <span className="text-lg">{">"}</span>
//             </button>
//           </div>

//           {/* Title */}
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900 mb-6">
//             We deliver advanced robotics
//             <br className="hidden md:block" />
//             solutions for a smarter future.
//           </h2>

//           {/* Divider */}
//           <div className="w-14 h-[2px] bg-blue-700 mb-6"></div>

//           {/* Description */}
//           <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
//             Robust Robotics builds intelligent automation systems and AI-powered robotics
//             that improve productivity, reduce operational cost, and enhance industrial safety.
//           </p>
//         </div>

//         {/* RIGHT IMAGE CARD */}
//         <div className="relative rounded-xl overflow-hidden shadow-lg group">

//           <img
//             src={why_RR}
//             alt="Robust Robotics"
//             className="
//               w-full h-[420px] object-cover
//               transition-transform duration-700
//               group-hover:scale-105
//             "
//           />

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

//           {/* Text Overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//             <h3 className="text-lg font-semibold mb-1">
//               Building Intelligent Industrial Automation
//             </h3>
//             <p className="text-sm text-gray-200 leading-relaxed">
//               We integrate robotics, AI, and engineering to solve real-world challenges.
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

import { useNavigate } from "react-router-dom";
import why_RR from "../assets/why_RR.png";
import AnimatedLabel from "../components/ui/AnimatedLabel";

export default function WhyRobustRoboticsSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT PANEL */}
        <div className="relative">

          {/* Label + CTA */}
          <div className="flex items-center justify-between mb-10">
            <AnimatedLabel className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
              [07] WHY ROBUST ROBOTICS
            </AnimatedLabel>

            <button
              onClick={() => navigate("/why-robust-robotics")}
              className="text-sm font-semibold text-blue-500 hover:underline flex items-center gap-1 transition"
            >
              View More <span className="text-lg">{">"}</span>
            </button>
          </div>

          {/* Heading */}
          <div className="max-w-[540px]">
  <h2 className="
    text-4xl md:text-5xl lg:text-[56px]
    font-light
    leading-[1.1]
    tracking-[-0.02em]
    text-gray-900
    mb-6
  ">
    We deliver advanced
    <br />
    robotics solutions for
    <br className="hidden md:block" />
    a smarter future.
  </h2>
</div>

          {/* Accent Line */}
          <div className="w-16 h-[3px] bg-blue-700 mb-6"></div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-10">
            Robust Robotics builds intelligent automation systems and AI-powered robotics
            that improve productivity, reduce operational cost, and enhance industrial safety.
          </p>
        </div>

        {/* RIGHT PANEL IMAGE */}
        <div className="relative group">

          <div className="relative rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.2)]">

            <img
              src={why_RR}
              alt="Robust Robotics"
              className="
                w-full h-[420px] object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            {/* Glass Overlay Mission Card */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-white">

              <h3 className="text-base font-semibold mb-1">
                Building Intelligent Industrial Automation
              </h3>

              <p className="text-sm text-gray-200">
                Robotics, AI, and engineering integrated for real-world missions.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}