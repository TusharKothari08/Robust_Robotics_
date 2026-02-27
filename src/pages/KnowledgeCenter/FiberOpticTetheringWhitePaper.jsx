import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FiberOpticTetheringWhitePaper() {
  return (
    <>
      <Navbar />

      <main className="w-full bg-white">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase">White Paper</p>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 max-w-4xl">
            The Role of Fiber-Optic Tethering in Modern UAV Operations
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            A technical analysis of tethered systems offering unlimited endurance and secure communications for specialized missions.
          </p>
        </section>

        {/* INTRO */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
            <p className="text-gray-600 leading-relaxed">
              Fiber-optic tethering provides power and a secure communications channel, enabling persistent UAV operations for missions such as persistent ISR, communications relays, and continuous site monitoring.
            </p>
          </div>
        </section>

        {/* TECHNICAL ANALYSIS */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-2xl font-semibold mb-6">Technical Analysis</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Power Delivery</h4>
              <p className="text-gray-600">Tethered power enables extended flight durations without battery swaps, removing endurance as a limiting factor.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Secure Comms</h4>
              <p className="text-gray-600">Fiber provides a physically secure high-bandwidth conduit, reducing RF exposure and jamming risk compared to wireless links.</p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-4">Use Cases</h3>
            <ul className="list-disc ml-6 text-gray-600 space-y-3">
              <li>Persistent perimeter surveillance</li>
              <li>Communications relay for events or disaster zones</li>
              <li>Extended-duration monitoring for critical infrastructure</li>
            </ul>
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-2xl font-semibold mb-4">Conclusion & Next Steps</h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Tethered operations are a practical approach where endurance, security and bandwidth are mission-critical. Next steps include integrating tether power management with vehicle-level energy-aware scheduling.
          </p>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h4 className="text-2xl font-semibold">Discuss tethering for your mission</h4>
          <p className="mt-4 text-gray-600">Our engineering team can evaluate tethered solutions and run a pilot program.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}