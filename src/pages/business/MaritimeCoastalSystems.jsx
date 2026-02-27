import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function MaritimeCoastalSystems() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* PAGE WRAPPER */}
            <div className="pt-20">

                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Maritime & Coastal Systems
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Maritime & Coastal Systems
                        </h1>

                        <p className="mt-12 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics Maritime & Coastal Systems develops specialized autonomous platforms for mangrove
                            restoration, coral reef surveying, coastal monitoring, and amphibious environmental operations.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Our 70+ marine systems engineers and coastal ecologists design salt-water resistant, amphibious-capable
                            drones that operate where land meets sea—protecting coastlines and restoring critical marine ecosystems.
                        </p>
                    </div>
                </section>

                {/* CAPABILITIES SECTION */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Capabilities
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Capabilities for Coastal Restoration
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* Mangrove */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Mangrove Reforestation</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Specialized seed deployment systems designed for mangrove propagules, accounting for tidal patterns,
                                    salinity gradients, and coastal sediment conditions.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Mangrove-Specific Features:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Tidal cycle planning</li>
                                    <li>• Saltwater-resistant components</li>
                                    <li>• Propagule delivery mechanisms</li>
                                    <li>• Mud/wetland landing capability</li>
                                    <li>• Brackish water operations</li>
                                </ul>
                            </div>

                            {/* Coral Reef */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Coral Reef Monitoring</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Underwater-capable platforms and surface drones with specialized sensors for reef health assessment,
                                    coral bleaching detection, and marine biodiversity surveys.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Monitoring Capabilities:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Underwater photography</li>
                                    <li>• Water quality sensors (pH, temperature, salinity)</li>
                                    <li>• Coral health assessment</li>
                                    <li>• Fish population surveys</li>
                                    <li>• Pollution detection</li>
                                </ul>
                            </div>

                            {/* Coastal Erosion */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Coastal Erosion Assessment</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    LiDAR and photogrammetry systems tracking shoreline changes, dune stability, and coastal vegetation to
                                    inform restoration priorities.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Assessment Tools:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• High-resolution coastal mapping</li>
                                    <li>• Change detection algorithms</li>
                                    <li>• Sediment transport analysis</li>
                                    <li>• Vegetation density tracking</li>
                                    <li>• Storm impact evaluation</li>
                                </ul>
                            </div>

                            {/* Amphibious Ops */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Amphibious Operations</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Waterproof platforms capable of takeoff and landing on both land and water, enabling operations in
                                    marshes, estuaries, and tidal zones.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Amphibious Features:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Waterproof sealed electronics (IP68)</li>
                                    <li>• Buoyant landing gear</li>
                                    <li>• Corrosion-resistant materials</li>
                                    <li>• Self-cleaning propulsion</li>
                                    <li>• Water takeoff/landing</li>
                                </ul>
                            </div>

                            {/* Protected Area Surveillance */}
                            <div className="bg-white border border-gray-200 p-10 md:col-span-2">
                                <h3 className="text-2xl font-semibold">Marine Protected Area Surveillance</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg max-w-5xl">
                                    Autonomous patrols for illegal fishing detection, marine mammal monitoring, and protected area
                                    enforcement support.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Surveillance Applications:</p>
                                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                                    <li>• Illegal fishing detection</li>
                                    <li>• Marine mammal tracking</li>
                                    <li>• Seabird colony monitoring</li>
                                    <li>• Marine traffic analysis</li>
                                    <li>• Conservation compliance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRODUCT LINES */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Product Lines
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Operational Platforms
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* CoastalSeed */}
                            <div className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition">
                                <h3 className="text-2xl font-semibold">CoastalSeed CS-200</h3>
                                <p className="mt-2 text-gray-600 font-medium">
                                    Mangrove restoration specialist
                                </p>

                                <ul className="mt-6 space-y-2 text-gray-700">
                                    <li>• Saltwater resistant</li>
                                    <li>• Tidal navigation</li>
                                    <li>• Propagule payload system</li>
                                    <li>• Amphibious landing</li>
                                </ul>
                            </div>

                            {/* ReefSurveyor */}
                            <div className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition">
                                <h3 className="text-2xl font-semibold">ReefSurveyor RS-400</h3>
                                <p className="mt-2 text-gray-600 font-medium">
                                    Coral ecosystem monitoring
                                </p>

                                <ul className="mt-6 space-y-2 text-gray-700">
                                    <li>• Water surface operations</li>
                                    <li>• Underwater imaging capability</li>
                                    <li>• Multi-parameter water quality sensors</li>
                                    <li>• GPS-buoy waypoint navigation</li>
                                </ul>
                            </div>

                            {/* AmphibiGuard */}
                            <div className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition md:col-span-2">
                                <h3 className="text-2xl font-semibold">AmphibiGuard AG-150</h3>
                                <p className="mt-2 text-gray-600 font-medium">
                                    Dual environment surveillance
                                </p>

                                <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                                    <li>• Land and water operations</li>
                                    <li>• Protected area patrol</li>
                                    <li>• Wildlife monitoring</li>
                                    <li>• Long-endurance (150 min)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PARTNERSHIPS */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Partnerships
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Collaborative Coastal Innovation
                        </h2>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Our maritime and coastal systems are developed in collaboration with organizations operating directly in
                            marine ecosystems and coastal management environments.
                        </p>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg font-medium text-gray-800">
                            {[
                                "Marine conservation organizations",
                                "Coastal management agencies",
                                "Fisheries departments",
                                "Environmental research institutions",
                                "Island nation governments",
                            ].map((partner, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 p-6"
                                >
                                    {partner}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
