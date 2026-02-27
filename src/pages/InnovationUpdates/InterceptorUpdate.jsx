import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function InterceptorUpdate() {
  return (
    <>
      <Navbar />

      <div className="w-full bg-white mt-10">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase">
            Innovation Update • December 2025
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-light text-gray-900 max-w-4xl leading-tight">
            High-Speed Interceptor Architecture Certified
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Robust Robotics has successfully validated its dual-mode
            interceptor architecture for aerial threat mitigation in
            contested environments.
          </p>
        </section>

        {/* CHALLENGE */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-4">
              Operational Requirement
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Increasing aerial threats in complex mission environments
              require rapid interception systems capable of adaptive
              maneuvering without reliance on continuous satellite
              connectivity.
            </p>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-10">
            Architecture Overview
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                Fiber-Guided Mode
              </h3>
              <p className="text-gray-600">
                Controlled navigation through secure
                tethered communication.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                Autonomous Mode
              </h3>
              <p className="text-gray-600">
                AI-enabled interception in GPS-denied
                environments.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                Adaptive Tracking
              </h3>
              <p className="text-gray-600">
                Dynamic trajectory adjustment during
                high-speed engagement.
              </p>
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}