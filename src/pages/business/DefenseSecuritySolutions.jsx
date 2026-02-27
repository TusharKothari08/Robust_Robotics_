import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function DefenseSecuritySolutions() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* PAGE WRAPPER */}
            <div className="pt-20">

                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Defense & Security Solutions
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Defense & Security Solutions
                        </h1>

                        <p className="mt-12 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics Defense & Security division applies proven autonomous technology from environmental
                            restoration to protection and surveillance missions requiring reliable, intelligent platforms.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            With 95+ defense technology specialists, we deliver adapted systems for perimeter security, threat
                            detection, reconnaissance, and tactical support—leveraging the same robust platforms that operate daily
                            in demanding ecological restoration environments.
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
                            Capabilities for Security Operations
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* Perimeter Surveillance */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">
                                    Perimeter Surveillance & Monitoring
                                </h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Autonomous patrol systems providing 24/7 monitoring of critical infrastructure, borders, and sensitive
                                    installations with AI-powered threat detection and real-time alerting.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Capabilities:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Automated patrol routes</li>
                                    <li>• Intrusion detection</li>
                                    <li>• Thermal imaging</li>
                                    <li>• Low-light operations</li>
                                    <li>• Persistent area monitoring</li>
                                </ul>
                            </div>

                            {/* Counter Drone */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Counter-Drone Systems</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Detection, tracking, and neutralization of unauthorized UAVs using our understanding of drone
                                    capabilities applied to defensive systems.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Features:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• RF signal detection</li>
                                    <li>• Optical tracking</li>
                                    <li>• Threat classification</li>
                                    <li>• Non-kinetic countermeasures</li>
                                    <li>• Multi-layer defense integration</li>
                                </ul>
                            </div>

                            {/* Recon */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Reconnaissance & Intelligence</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Adaptable platforms modified from restoration drones for tactical surveillance, providing real-time
                                    situational awareness in contested or remote environments.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Applications:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Border monitoring</li>
                                    <li>• Asset protection</li>
                                    <li>• Search operations</li>
                                    <li>• Damage assessment</li>
                                    <li>• Intelligence gathering</li>
                                </ul>
                            </div>

                            {/* Secure Communication */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Secure Communications</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Encrypted data links, mesh networking, and communications resilience ensuring operational security even
                                    in electronically contested environments.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Security Features:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• End-to-end encryption</li>
                                    <li>• Frequency-hopping spread spectrum</li>
                                    <li>• Mesh network redundancy</li>
                                    <li>• Anti-jamming capabilities</li>
                                    <li>• Secure ground control stations</li>
                                </ul>
                            </div>

                            {/* All Weather */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">All-Weather Operations</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Military-grade weatherproofing and sensor systems enabling operations in rain, snow, dust, and extreme
                                    temperatures.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Environmental Resilience:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• IP67 weatherproof rating</li>
                                    <li>• -20°C to +55°C operation</li>
                                    <li>• High-wind stability</li>
                                    <li>• Low-visibility navigation</li>
                                    <li>• Salt-fog resistance (coastal)</li>
                                </ul>
                            </div>

                            {/* Training */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Training & Simulation</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Comprehensive operator training programs specifically designed for security and defense applications,
                                    including threat response protocols and tactical procedures.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Training Components:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Threat identification scenarios</li>
                                    <li>• Emergency response procedures</li>
                                    <li>• Rules of engagement protocols</li>
                                    <li>• Maintenance certification</li>
                                    <li>• Mission planning workshops</li>
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

                            {/* SentinelGuard */}
                            <div className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition">
                                <h3 className="text-2xl font-semibold">SentinelGuard SG-300</h3>
                                <p className="mt-2 text-gray-600 font-medium">
                                    Perimeter security patrol system
                                </p>

                                <ul className="mt-6 space-y-2 text-gray-700">
                                    <li>• Patrol radius: 10km</li>
                                    <li>• Flight time: 90 minutes</li>
                                    <li>• Sensors: Thermal, optical, RF</li>
                                    <li>• Auto-return on threat detection</li>
                                </ul>
                            </div>

                            {/* TacticalEye */}
                            <div className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition">
                                <h3 className="text-2xl font-semibold">TacticalEye TE-500</h3>
                                <p className="mt-2 text-gray-600 font-medium">
                                    Reconnaissance platform
                                </p>

                                <ul className="mt-6 space-y-2 text-gray-700">
                                    <li>• Silent operation mode</li>
                                    <li>• Real-time video transmission</li>
                                    <li>• GPS-denied navigation</li>
                                    <li>• Encrypted communications</li>
                                </ul>
                            </div>

                            {/* CounterSwarm */}
                            <div className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition md:col-span-2">
                                <h3 className="text-2xl font-semibold">CounterSwarm CS-100</h3>
                                <p className="mt-2 text-gray-600 font-medium">
                                    Counter-drone defense
                                </p>

                                <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                                    <li>• Detection range: 5km</li>
                                    <li>• Multi-target tracking</li>
                                    <li>• Automated response</li>
                                    <li>• Integration with existing security</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CUSTOMERS */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Customers
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Trusted by Mission-Focused Organizations
                        </h2>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Our security solutions serve organizations where reliability, real-time intelligence, and operational
                            resilience are critical.
                        </p>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg font-medium text-gray-800">
                            {[
                                "Border protection agencies",
                                "Critical infrastructure operators",
                                "Private security firms",
                                "Emergency response organizations",
                                "Government defense departments",
                            ].map((customer, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 p-6"
                                >
                                    {customer}
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
