/**
 * Latest Updates Component
 * 
 * Displays a grid of cards highlighting recent technology developments,
 * prototype status, and company achievements.
 */

import React from "react";
import { ArrowRight } from "lucide-react";

/**
 * latestUpdates
 * Array of update objects containing technical milestones and descriptions.
 */
const latestUpdates = [
  {
    id: 1,
    title: "AI-Powered Firefighting Drone System Reaches Advanced Prototype Stage",
    description:
      "Robust Robotics has successfully completed controlled field testing of its AI-driven aerial fire suppression system, demonstrating rapid fire detection, precision payload deployment, and autonomous operation in low-visibility environments.",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1581091870627-3a9c1b9c1c2f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "High-Speed Interceptor Drone Architecture Validated",
    description:
      "Our dual-mode interceptor drone platform—featuring fiber-optic guided and non-tethered autonomous variants—has completed system-level validation for high-speed aerial interception in GPS-denied and EW-contested environments.",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Optical Fiber Rewinder Training Module Introduced",
    description:
      "Robust Robotics launched a dedicated training system enabling safe, repeatable skill development for fiber-optic tethered drone operations without risking live fiber or operational assets.",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1581090700227-3b1c8a8b3f3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Expansion of GIS & 3D Mapping Capabilities",
    description:
      "Our 360° LiDAR-based GIS and digital twin platform now delivers enhanced real-time 3D reconstruction and CAD-ready outputs for infrastructure, defense, and urban planning applications.",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1600267165738-6f1aef6b3b35?auto=format&fit=crop&w=800&q=80",
  },
  // ➕ You can add more cards here easily
];
/* ------------------------------------------ */

const LatestUpdates = () => {
  return (
    <section className="w-full py-24 font-josefin" style={{ backgroundColor: "#f6f6f6" }}>
      <div className="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24">

        {/* Heading + More */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-sm tracking-widest text-gray-600 uppercase">
            Latest on Robust Robotics
          </h2>

          <button className="flex items-center gap-2 text-sm font-medium text-blue-700 group">
            More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {latestUpdates.map((item) => (
            <div
              key={item.id}
              className="
                group
                bg-[#083B78]
                rounded-2xl
                overflow-hidden
                h-[360px]
                flex flex-col
                transition-transform duration-300
                hover:-translate-y-2
                shadow-lg
              "
            >
              {/* Image */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  <h3 className="text-white text-sm font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-200 text-sm mt-3 leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-slate-300">
                    {item.date}
                  </span>

                  <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestUpdates;
