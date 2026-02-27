import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CoreCapabilitiesPage() {
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-20 mt-10">
                

                <h1 className="mt-10 text-5xl font-light text-gray-900">
                    Technology Built for the Toughest Missions
                </h1>

                <p className="mt-6 text-lg text-gray-600 max-w-4xl leading-relaxed">
                    Our systems are engineered with advanced autonomy, sensor fusion, precision
                    deployment, and mapping technologies to operate reliably in the world’s most
                    demanding environments.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div className="p-10 border rounded-xl shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            AI & Autonomous Navigation
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Proprietary algorithms enabling operation in GPS-denied, low-visibility,
                            and electronically contested environments.
                        </p>
                    </div>

                    <div className="p-10 border rounded-xl shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Advanced Sensor Fusion
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Integration of LiDAR, thermal, optical, and hyperspectral sensors for
                            comprehensive situational awareness.
                        </p>
                    </div>

                    <div className="p-10 border rounded-xl shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Precision Deployment Systems
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Payload delivery mechanisms engineered for accuracy in dynamic
                            operational conditions.
                        </p>
                    </div>

                    <div className="p-10 border rounded-xl shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Digital Twin & GIS Mapping
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Real-time 3D reconstruction and CAD-ready outputs for infrastructure
                            analysis and mission planning.
                        </p>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}
