// import React from "react";
// import { motion } from "framer-motion";
// import heroImg from "../assets/HeroImage.jpeg";

// const heading = "Engineering the Future of Autonomous Systems";

// // Parent container controls stagger timing
// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.05,
//     },
//   },
// };

// // Each letter animation
// const letterAnimation = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//     filter: "blur(6px)",
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
// };

// const Hero = () => {
//   return (
//     <section className="w-screen bg-white py-12 overflow-x-hidden">
      
//       {/* IMAGE CONTAINER */}
//       <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[75vh] overflow-hidden shadow-lg">

//         {/* Background Image */}
//         <img
//           src={heroImg}
//           alt="Autonomous Robotics"
//           className="absolute inset-0 w-full h-full object-cover scale-105"
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />

//         {/* TEXT CONTENT */}
//         <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">

//           {/* 🔥 LETTER BY LETTER ANIMATED HEADING */}
//           <motion.h1
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 drop-shadow-sm flex flex-wrap"
//           >
//             {heading.split("").map((char, index) => (
//               <motion.span key={index} variants={letterAnimation}>
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </motion.h1>

//           {/* Normal =Paragraph */}
//           <motion.p
//   initial={{ opacity: 0, scale: 0.9, y: 20 }}
//   animate={{ opacity: 1, scale: 1, y: 0 }}
//   transition={{
//     delay: 1.8,
//     duration: 0.8,
//     ease: "easeOut"
//   }}
//   className="text-base sm:text-lg md:text-xl text-gray-800 drop-shadow-sm max-w-2xl"
// >
//   Delivering cutting-edge robotics and drone solutions for critical operations across air, land, and sea.
// </motion.p>

//         </div>

//         {/* CTA BUTTON */}
//         <div className="absolute bottom-8 left-6 sm:left-10 md:left-16 z-20">
//           <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-3 rounded-xl text-white font-semibold shadow-xl">
//             Explore Our Solutions →
//           </button>
//         </div>

//         {/* Bottom Curve */}
//         <svg
//           className="absolute bottom-0 left-0 w-full"
//           viewBox="0 0 1440 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,40 C240,120 480,120 720,80 960,40 1200,40 1440,80 L1440,0 L0,0 Z"
//             fill="white"
//           />
//         </svg>

//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import heroImg from "../assets/HeroImage.jpeg";

const heading = "Engineering the Future of Autonomous Systems";

const Hero = () => {
  return (
    <section className="w-screen bg-white py-12 overflow-x-hidden">

      <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[75vh] overflow-hidden shadow-lg">

        {/* STATIC BACKGROUND IMAGE (ANIMATION REMOVED ONLY) */}
        <img
          src={heroImg}
          alt="Autonomous Robotics"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />

        {/* TEXT CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">

          {/* Heading (LETTER ANIMATION REMOVED ONLY) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 drop-shadow-sm flex flex-wrap">
            {heading}
          </h1>

          {/* Subtitle (FADE ANIMATION REMOVED ONLY) */}
          <p className="text-base sm:text-lg md:text-xl text-gray-800 drop-shadow-sm max-w-2xl">
            Delivering cutting-edge robotics and drone solutions for critical operations across air, land, and sea.
          </p>

        </div>

        {/* CTA */}
        <div className="absolute bottom-8 left-6 sm:left-10 md:left-16 z-20">
          <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-3 rounded-xl text-white font-semibold shadow-xl">
            Explore Our Solutions →
          </button>
        </div>

        {/* Curve */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,120 480,120 720,80 960,40 1200,40 1440,80 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>

      </div>
    </section>
  );
};

export default Hero;