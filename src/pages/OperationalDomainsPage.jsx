import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OperationalDomainsPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="w-full bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="mt-6 text-5xl md:text-6xl font-light text-gray-900 max-w-4xl leading-tight">
            Solutions Across Every Environment
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Our autonomous and AI-driven robotic platforms are engineered for
            seamless deployment across air, land, and maritime environments.
            Designed for mission-critical operations, our systems enable
            persistent surveillance, intelligent navigation, threat response,
            and real-time situational awareness across dynamic operational
            theatres.
          </p>
        </div>
      </section>

      {/* AIR DOMAIN */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-light text-gray-900">
          Aerospace Domain (AIR)
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
          Our aerial systems deliver intelligent autonomy for high-altitude
          monitoring, reconnaissance, and payload deployment in complex
          airspace environments. These platforms are built to operate in
          GPS-denied zones, contested environments, and extreme climatic
          conditions.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div className="p-8 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Mission Capabilities
            </h3>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Autonomous surveillance UAVs</li>
              <li>• AI-driven aerial fire suppression</li>
              <li>• ISR reconnaissance platforms</li>
              <li>• GPS-denied navigation systems</li>
              <li>• Precision payload deployment</li>
            </ul>
          </div>

          <div className="p-8 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Use Cases
            </h3>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Border security monitoring</li>
              <li>• Wildfire response operations</li>
              <li>• Infrastructure inspection</li>
              <li>• Disaster management</li>
              <li>• Tactical reconnaissance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LAND DOMAIN */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900">
            Terrestrial Domain (LAND)
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
            Our ground-based robotic platforms are designed for rugged terrain
            operations including reconnaissance, infrastructure monitoring,
            perimeter security, and hazardous environment inspection.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-10">
            <div className="p-8 border rounded-xl shadow-sm bg-white">
              <h3 className="text-xl font-semibold text-gray-900">
                Core Systems
              </h3>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>• All-terrain autonomous vehicles</li>
                <li>• Fiber-optic tethered UAV systems</li>
                <li>• Remote reconnaissance robots</li>
                <li>• Smart infrastructure monitoring</li>
              </ul>
            </div>

            <div className="p-8 border rounded-xl shadow-sm bg-white">
              <h3 className="text-xl font-semibold text-gray-900">
                Deployment Scenarios
              </h3>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>• Critical infrastructure security</li>
                <li>• Industrial inspection</li>
                <li>• Border patrol missions</li>
                <li>• Urban surveillance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEA DOMAIN */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-light text-gray-900">
          Maritime Domain (SEA)
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
          Our maritime-grade autonomous systems are engineered for persistent
          coastal monitoring, underwater inspection, and naval surveillance
          missions across challenging sea conditions.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div className="p-8 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Platform Capabilities
            </h3>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Maritime surveillance drones</li>
              <li>• Underwater ROV integration</li>
              <li>• Amphibious robotic platforms</li>
              <li>• Coastal monitoring systems</li>
            </ul>
          </div>

          <div className="p-8 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Applications
            </h3>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Port security operations</li>
              <li>• Offshore inspection</li>
              <li>• Naval reconnaissance</li>
              <li>• Environmental monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}