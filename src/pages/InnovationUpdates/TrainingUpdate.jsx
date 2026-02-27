import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TrainingUpdate() {
  return (
    <>
      <Navbar />

      <div className="w-full bg-white mt-10">

        <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase">
            Innovation Update • October 2025
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-light text-gray-900 max-w-4xl">
            Operator Training Systems Expanded
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl">
            Simulation-driven mission training
            enhances deployment readiness.
          </p>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-4">
              Training Framework
            </h2>
            <p className="text-gray-600">
              Scenario-based simulation
              improves operator performance.
            </p>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}