import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function GISUpdate() {
  return (
    <>
      <Navbar />

      <div className="w-full bg-white mt-10">

        <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase">
            Innovation Update • November 2025
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-light text-gray-900 max-w-4xl">
            Next-Generation GIS Capabilities Deployed
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl">
            Real-time digital twin mapping platform
            now operational for infrastructure planning.
          </p>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-4">
              System Integration
            </h2>
            <p className="text-gray-600">
              Enables high-resolution terrain
              visualization for mission planning.
            </p>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}