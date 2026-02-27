/**
 * Careers Component
 * 
 * A reusable section/page component that showcases the company culture,
 * growth opportunities, and values to attract potential employees.
 */

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Lastfooter from "./Lastfooter";

/**
 * Careers Component
 * 
 * Structure:
 * - Hero header explaining the mission.
 * - 'Build With Us' section highlighting long-term career growth.
 * - 'Grow Through Shared Knowledge' section focusing on mentorship.
 * - Call to Action (CTA) for joining the team.
 */
const Careers = () => {
  return (
    <>
      <Navbar />
      <section id="careers" className="w-full bg-white pt-20">

        {/* Hero */}
        <div className="w-full bg-[#0A1A2F] text-white py-32">
          <div className="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 text-center">
            <h4 className="text-sm tracking-widest uppercase text-blue-400 mb-4">
              Careers at Robust Robotics
            </h4>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Build the Future of Intelligent Machines
            </h1>

            <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg">
              Robust Robotics exists to engineer resilient, intelligent, and real-world-ready robotic systems
              that solve critical industrial and societal problems.
            </p>

            <p className="mt-6 text-gray-300">
              We are a team of builders, researchers, and innovators driven by purpose, curiosity, and impact.
            </p>
          </div>
        </div>

        {/* Build With Us */}
        <div className="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Build With Us <br /> For the Long Term
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              What began as a small team of passionate engineers has grown into a multidisciplinary group
              working across robotics, AI, computer vision, and embedded systems.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              We see careers as long-term journeys shaped by hands-on problem solving, continuous learning,
              and the opportunity to grow alongside ambitious technology.
            </p>

            <a
              href="#openings"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              View Current Openings →
            </a>
          </div>

          <div className="bg-[#f6f6f6] rounded-2xl p-10 shadow-sm">
            <ul className="space-y-6 text-gray-800">
              <li>• Long-term career growth</li>
              <li>• Hands-on engineering culture</li>
              <li>• Multidisciplinary collaboration</li>
              <li>• Real-world system development</li>
            </ul>
          </div>
        </div>

        {/* Grow Through */}
        <div className="w-full bg-[#f6f6f6] py-28">
          <div className="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <ul className="space-y-6 text-gray-800">
                <li>• Mentorship & guidance</li>
                <li>• Open design reviews</li>
                <li>• Rapid prototyping</li>
                <li>• Collective ownership</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Grow Through <br /> Shared Knowledge
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Innovation thrives on collaboration. Learning is a shared responsibility and a shared reward.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We ensure everyone grows in skill, confidence, and ownership.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Turn Bold Ideas Into Real-World Impact
          </h2>

          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-12">
            If you’re excited about robots that work outside the lab and AI that runs at the edge,
            Robust Robotics is the place to build your future.
          </p>

          <a
            href="#openings"
            className="inline-block px-10 py-4 bg-[#0A1A2F] text-white rounded-md font-medium hover:bg-black transition"
          >
            Explore Careers
          </a>
        </div>

      </section>

      <Footer />
      <Lastfooter />
    </>
  );
};

export default Careers;
