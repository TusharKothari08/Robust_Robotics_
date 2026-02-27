import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RapidInfrastructureCaseStudy() {
  return (
    <>
      <Navbar />

      <div className="w-full bg-white min-h-screen">

        <section className="max-w-7xl mx-auto px-6 py-20">

          <p className="text-sm font-semibold text-gray-500 uppercase">
            CASE STUDY
          </p>

          <h1 className="mt-4 text-5xl font-light text-gray-900 max-w-4xl">
            Rapid Infrastructure Assessment Using LiDAR-Based Digital Twins
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Leveraging LiDAR-driven 3D reconstruction, our digital twin platform
            significantly reduces infrastructure inspection timelines.
          </p>

        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">Project Impact</h2>

            <p className="text-gray-600 leading-relaxed">
              Through the integration of aerial LiDAR mapping and AI-powered
              modeling pipelines, survey time for critical infrastructure projects
              was reduced by up to 75%.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Engineers were able to analyze CAD-ready digital twins remotely,
              minimizing on-site inspection time and accelerating maintenance cycles.
            </p>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}