/**
 * OurPromiseBanner Component
 * 
 * A visually striking banner featuring the company's core slogan/promise.
 * Uses a background image of Earth with a dark gradient overlay for impact.
 */

import React from "react";
import EarthImage from "../assets/Earth_image.png";

/**
 * OurPromiseBanner Component
 * 
 * Elements:
 * - Background image (Earth).
 * - Multi-layered gradient overlay.
 * - Centered promise text ("Ahead of Ready").
 */
const OurPromiseBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={EarthImage}
        alt="Our Promise Banner"
        className="
          w-full
          h-[160px]
          sm:h-[190px]
          md:h-[220px]
          lg:h-[250px]
          object-cover
          object-center
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081A2F]/45 via-[#081A2F]/60 to-[#081A2F]/75"></div>

      {/* Text Content (perfectly centered) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

        <p className="text-slate-200 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase mb-1">
          Ensuring those we serve always stay
        </p>

        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide">
          Ahead of Ready
        </h1>

        <p className="text-slate-300 text-[10px] sm:text-xs md:text-sm mt-1 max-w-xl">
          It&apos;s our identity, our culture, and our promise.
        </p>

      </div>

    </section>
  );
};

export default OurPromiseBanner;
