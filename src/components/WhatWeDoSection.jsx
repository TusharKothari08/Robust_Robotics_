// import { useNavigate } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";

// const slides = [
//   {
//     title: "AI-Powered Counter-UAS",
//     subtitle: "Proven systems show what works in real-world missions.",
//     image:
//       "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1400&q=80",
//   },
//   {
//     title: "Autonomous Robotics",
//     subtitle: "Smart robotics solutions for industrial automation.",
//     image:
//       "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1400&q=80",
//   },
// ];

// const label = "[02] WHAT WE DO";

// export default function WhatWeDoSection() {
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // 🔥 Typing Animation
//   const [typedText, setTypedText] = useState("");
//   const sectionRef = useRef(null);
//   const typingIndex = useRef(0);
//   const typingIntervalRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {

//           clearInterval(typingIntervalRef.current);
//           typingIndex.current = 0;
//           setTypedText("");

//           typingIntervalRef.current = setInterval(() => {
//             setTypedText(label.slice(0, typingIndex.current + 1));
//             typingIndex.current++;

//             if (typingIndex.current === label.length) {
//               clearInterval(typingIntervalRef.current);
//             }
//           }, 60);
//         }
//       },
//       { threshold: 0.6 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       observer.disconnect();
//       clearInterval(typingIntervalRef.current);
//     };
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <section ref={sectionRef} className="w-full bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* 🔥 TOP ALIGNED LAYOUT */}
//         <div className="flex flex-col lg:flex-row items-start gap-16">

//           {/* LEFT SIDE */}
//           <div className="flex-1 pt-4">

//             {/* Label */}
//             <div className="flex items-center justify-between min-h-[24px]">
//               <p className="text-sm font-semibold tracking-widest text-gray-800 uppercase flex items-center">
//                 {typedText}
//                 <span className="ml-1 w-[2px] h-[1em] bg-gray-800 animate-pulse"></span>
//               </p>

//               <button
//                 onClick={() => navigate("/what-we-do")}
//                 className="text-sm font-semibold text-blue-700 hover:underline flex items-center gap-1"
//               >
//                 View More <span className="text-lg">{">"}</span>
//               </button>
//             </div>

//             {/* Title */}
//             <h2 className="mt-10 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
//               Pioneering Innovation in
//               <br />
//               Autonomous Technology
//             </h2>

//             {/* Description */}
//             <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
//               We deliver innovative solutions to the world’s toughest challenges by building
//               advanced autonomous systems and AI-driven technologies.
//             </p>

//           </div>

//           {/* RIGHT IMAGE BLOCK */}
//           <div className="flex-1 w-full">
//             <div
//               className="
//                 relative w-full
//                 h-[260px]
//                 sm:h-[320px]
//                 md:h-[380px]
//                 lg:h-[460px]
//                 xl:h-[500px]
//                 overflow-hidden
//                 rounded-xl
//                 shadow-lg
//                 group
//               "
//             >
//               {/* Image */}
//               <img
//                 src={slides[currentSlide].image}
//                 alt="What we do slide"
//                 className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
//               />

//               {/* Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

//               {/* Overlay Text */}
//               <div className="absolute bottom-0 left-0 w-full text-white p-6">
//                 <h3 className="text-lg font-semibold">
//                   {slides[currentSlide].title}
//                 </h3>
//                 <p className="text-sm opacity-90 mt-1">
//                   {slides[currentSlide].subtitle}
//                 </p>
//               </div>

//               {/* Arrows */}
//               <div className="absolute bottom-6 right-6 flex gap-4">
//                 <button
//                   onClick={prevSlide}
//                   className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow hover:scale-105 transition"
//                 >
//                   ←
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow hover:scale-105 transition"
//                 >
//                   →
//                 </button>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    title: "AI-Powered Counter-UAS",
    subtitle: "Proven systems show what works in real-world missions.",
    image:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Autonomous Robotics",
    subtitle: "Smart robotics solutions for industrial automation.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1400&q=80",
  },
];

const label = "[02] WHAT WE DO";

export default function WhatWeDoSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [typedText, setTypedText] = useState("");
  const sectionRef = useRef(null);
  const typingIndex = useRef(0);
  const typingIntervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearInterval(typingIntervalRef.current);
          typingIndex.current = 0;
          setTypedText("");

          typingIntervalRef.current = setInterval(() => {
            setTypedText(label.slice(0, typingIndex.current + 1));
            typingIndex.current++;

            if (typingIndex.current === label.length) {
              clearInterval(typingIntervalRef.current);
            }
          }, 60);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      clearInterval(typingIntervalRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP ALIGNMENT FIXED */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:items-start">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[60%]">

            <div className="flex items-center justify-between min-h-[24px]">
              <p className="text-sm font-semibold tracking-widest text-gray-800 uppercase flex items-center">
                {typedText}
                <span className="ml-1 w-[2px] h-[1em] bg-gray-800 animate-pulse"></span>
              </p>

              <button
                onClick={() => navigate("/what-we-do")}
                className="text-sm font-semibold text-blue-500 hover:underline flex items-center gap-1"
              >
                View More <span className="text-lg">{">"}</span>
              </button>
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.15]">
              Pioneering Innovation
              <br />
              in Autonomous Technology
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              We deliver innovative solutions to the world’s toughest challenges by building
              advanced autonomous systems and AI-driven technologies.
            </p>

          </div>

          {/* RIGHT IMAGE (NARROW + NO STRETCH) */}
          <div className="w-full lg:w-[40%] flex-shrink-0">
            <div
              className="
                relative w-full
                h-[260px]
                sm:h-[320px]
                md:h-[380px]
                lg:h-[420px]
                xl:h-[420px]
                overflow-hidden
                rounded-xl
                shadow-lg
                group
              "
            >
              <img
                src={slides[currentSlide].image}
                alt="What we do slide"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full text-white p-6">
                <h3 className="text-lg font-semibold">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-sm opacity-90 mt-1">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              <div className="absolute bottom-6 right-6 flex gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow hover:scale-105 transition"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow hover:scale-105 transition"
                >
                  →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}