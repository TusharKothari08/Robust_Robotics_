import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FireSuppressionUpdate() {
  return (
    <>
      <Navbar />

      <div className="w-full bg-white mt-10">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase">
            Innovation Update • January 2026
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-light text-gray-900 leading-tight max-w-4xl">
            AI-Powered Fire Suppression Platform
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Our autonomous aerial fire-response platform has successfully
            completed operational validation, enabling real-time detection
            and suppression of fire outbreaks in high-risk environments.
          </p>
        </section>

        {/* PROBLEM */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-4">
              Operational Challenge
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Traditional firefighting operations rely heavily on delayed
              detection and manual deployment, increasing response time
              and operational risk. Industrial zones and forested regions
              require autonomous intervention systems capable of immediate
              detection and suppression.
            </p>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-10">
            Platform Architecture
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2">AI Threat Detection</h3>
              <p className="text-gray-600">
                Vision-based detection for real-time fire identification.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Autonomous Navigation</h3>
              <p className="text-gray-600">
                GPS-denied flight capability.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Precision Deployment</h3>
              <p className="text-gray-600">
                Stabilized suppression payload release.
              </p>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">
              Operational Workflow
            </h2>
            <ol className="space-y-4 text-gray-600 text-lg">
              <li>1. Thermal anomaly detection</li>
              <li>2. AI threat classification</li>
              <li>3. Autonomous route planning</li>
              <li>4. Payload deployment</li>
              <li>5. Containment monitoring</li>
            </ol>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}