import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AutonomousNavigationTechBrief() {
  return (
    <>
      <Navbar />

      <main className="w-full bg-white">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase">
            Technical Brief
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 max-w-4xl leading-tight">
            Autonomous Navigation in GPS-Denied Environments
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            A technical brief exploring how multi-sensor fusion, SLAM, and AI
            positioning enable reliable autonomous operations without GPS.
          </p>
        </section>

        {/* EXECUTIVE SUMMARY */}
        <section className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            This brief summarizes Robust Robotics’ architecture for navigation in
            GPS-denied environments. We combine LiDAR, visual-inertial odometry,
            thermal cues and probabilistic mapping to maintain robust localization
            and safe path planning in contested or occluded environments.
          </p>
        </section>

        {/* PROBLEM */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-4">Problem Statement</h3>
            <p className="text-gray-600 leading-relaxed">
              Satellite navigation may be unavailable, degraded, or jammed in
              important mission scenarios (urban canyons, indoors, contested
              theaters). Systems must therefore localize and navigate using on-board
              sensing and resilient algorithms.
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-2xl font-semibold mb-6">Approach & Architecture</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Perception Layer</h4>
              <p className="text-gray-600">
                Multi-modal sensing: LiDAR for geometry, stereo/monocular vision for texture,
                thermal for heat cues, and IMU for motion priors.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Estimation Layer</h4>
              <p className="text-gray-600">
                Visual-Inertial Odometry (VIO) fused with LiDAR odometry via an EKF / factor-graph
                style back-end to reduce drift and provide consistent pose estimates.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Mapping & SLAM</h4>
              <p className="text-gray-600">
                A hybrid SLAM approach: LiDAR submaps merged with visual loop closures,
                enabling persistent environment models and re-localization.
              </p>
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-4">Methodology</h3>
            <ul className="list-inside list-decimal space-y-4 text-gray-600">
              <li>
                Sensor calibration and time-synchronization pipeline to align LiDAR, camera and IMU frames.
              </li>
              <li>
                Real-time VIO + LiDAR matching to correct drift and provide metric scale.
              </li>
              <li>
                Loop closure detection using learned descriptors and geometric verification.
              </li>
              <li>
                Probabilistic map fusion (occupancy + semantic overlays) for navigation and planning.
              </li>
            </ul>
          </div>
        </section>

        {/* RESULTS */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-2xl font-semibold mb-4">Field Results & Performance</h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            In validation trials the system maintained sub-meter localization for &gt;30 minutes in
            GPS-denied tunnels, reduced position drift by over 85% vs baseline VIO, and enabled
            safe autonomous navigation through complex indoor/outdoor mixed environments.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border rounded-lg">
              <p className="text-3xl font-semibold text-blue-700">85%</p>
              <p className="text-sm text-gray-600 mt-1">Drift reduction</p>
            </div>
            <div className="p-6 bg-white border rounded-lg">
              <p className="text-3xl font-semibold text-blue-700"><span>~</span>0.6m</p>
              <p className="text-sm text-gray-600 mt-1">Median localization error</p>
            </div>
            <div className="p-6 bg-white border rounded-lg">
              <p className="text-3xl font-semibold text-blue-700">30+</p>
              <p className="text-sm text-gray-600 mt-1">min continuous ops</p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-4">Use Cases</h3>
            <ul className="list-disc ml-6 space-y-3 text-gray-600">
              <li>Underground inspection and tunneling operations</li>
              <li>Urban search & rescue in GPS-challenged canyons</li>
              <li>Contested defense operations requiring GPS-denial resilience</li>
            </ul>
          </div>
        </section>

        {/* FUTURE */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-2xl font-semibold mb-4">Future Roadmap</h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Next steps include semantic mapping for route importance weighting,
            multi-agent cooperative localization, and hardware-accelerated perception
            stacks for lower latency.
          </p>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h4 className="text-2xl font-semibold">Want this capability for your program?</h4>
          <p className="mt-4 text-gray-600">Contact our engineering team for technical integration support.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}