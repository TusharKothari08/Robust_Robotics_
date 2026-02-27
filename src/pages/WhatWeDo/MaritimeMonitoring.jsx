import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function MaritimeMonitoring() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            <div className="pt-20">
                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Maritime & Coastal Monitoring
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Maritime & Coastal Monitoring
                        </h1>

                        {/* QUICK LINKS */}
                        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
                            {["Coastal Security", "Environmental Monitoring", "Port Surveillance", "Underwater Systems"].map(
                                (item, index) => (
                                    <button
                                        key={index}
                                        className="px-6 py-3 border border-gray-300 hover:border-gray-500 transition bg-white"
                                    >
                                        {item}
                                    </button>
                                )
                            )}
                        </div>

                        <p className="mt-12 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics Maritime & Coastal Monitoring delivers autonomous maritime solutions
                            designed for defense operations, port security, and environmental intelligence.
                            Our systems operate above and below the waterline to support mission-critical
                            monitoring, underwater reconnaissance, and marine infrastructure inspection.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            We integrate sonar payloads, underwater cameras, multi-sensor navigation, and AI-based
                            data analytics to deliver reliable performance in complex marine environments.
                            From coastal border protection to industrial offshore asset monitoring, we provide scalable
                            autonomous systems engineered for real-world deployment.
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
                            Autonomous Systems for Maritime Security and Environmental Intelligence
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Coastal Border Surveillance",
                                    desc: "Autonomous monitoring systems designed to detect suspicious activity and provide persistent coastal surveillance for defense agencies.",
                                    points: [
                                        "Coastal perimeter security coverage",
                                        "Real-time threat detection and alerts",
                                        "EO/IR payload integration",
                                        "Secure data transmission",
                                    ],
                                },
                                {
                                    title: "Port & Harbor Security",
                                    desc: "Mission-ready platforms engineered to monitor ports, shipping routes, and harbor infrastructure with AI analytics.",
                                    points: [
                                        "Ship tracking and monitoring",
                                        "Unauthorized access detection",
                                        "Underwater threat surveillance",
                                        "Automated incident reporting",
                                    ],
                                },
                                {
                                    title: "Autonomous Underwater Reconnaissance",
                                    desc: "Underwater robotics designed for reconnaissance, inspection, and covert monitoring using sonar and autonomous navigation.",
                                    points: [
                                        "Sonar-based mapping and navigation",
                                        "Autonomous waypoint missions",
                                        "Silent underwater propulsion",
                                        "Deep water monitoring support",
                                    ],
                                },
                                {
                                    title: "Marine Environmental Monitoring",
                                    desc: "Environmental intelligence platforms that monitor water quality, marine ecosystems, and coastal pollution trends.",
                                    points: [
                                        "Water quality and salinity monitoring",
                                        "Pollution hotspot mapping",
                                        "Temperature and depth analytics",
                                        "Automated environmental reports",
                                    ],
                                },
                                {
                                    title: "Underwater Infrastructure Inspection",
                                    desc: "Inspection solutions for pipelines, offshore cables, ports, and marine structures using autonomous underwater vehicles.",
                                    points: [
                                        "Pipeline inspection and anomaly detection",
                                        "Underwater cable route monitoring",
                                        "Structural condition analysis",
                                        "High-definition underwater imaging",
                                    ],
                                },
                                {
                                    title: "AI Maritime Analytics & Reporting",
                                    desc: "AI-based reporting platforms that convert maritime sensor data into actionable intelligence dashboards.",
                                    points: [
                                        "AI pattern detection and tracking",
                                        "Threat heatmaps and risk zones",
                                        "Automated incident documentation",
                                        "Mission replay and analytics dashboard",
                                    ],
                                },
                            ].map((cap, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-10">
                                    <h3 className="text-2xl font-semibold">{cap.title}</h3>

                                    <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                        {cap.desc}
                                    </p>

                                    <p className="mt-6 font-semibold text-gray-900">Key Capabilities:</p>
                                    <ul className="mt-4 space-y-2 text-gray-700">
                                        {cap.points.map((p, i) => (
                                            <li key={i}>• {p}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PRODUCT PORTFOLIO */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Product Portfolio
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Maritime Monitoring Platforms
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "AquaSentinel AUV",
                                    subtitle: "Autonomous underwater surveillance platform",
                                    specs: [
                                        "Operating depth: up to 200 meters",
                                        "Endurance: 12–36 hours",
                                        "Sonar + camera payload integration",
                                        "Autonomous waypoint navigation",
                                    ],
                                },
                                {
                                    title: "CoastGuard ISR Drone",
                                    subtitle: "Aerial coastal monitoring UAV system",
                                    specs: [
                                        "EO/IR payload integration",
                                        "Long endurance operations",
                                        "Real-time encrypted data feed",
                                        "Coastal patrol mission automation",
                                    ],
                                },
                                {
                                    title: "PortSecure Monitoring Suite",
                                    subtitle: "AI platform for port and harbor security",
                                    specs: [
                                        "Ship movement monitoring analytics",
                                        "Threat detection alert system",
                                        "Multi-sensor integration dashboard",
                                        "Automated incident reporting",
                                    ],
                                },
                                {
                                    title: "MarineEcoSense System",
                                    subtitle: "Environmental monitoring and data intelligence",
                                    specs: [
                                        "Water quality analytics sensors",
                                        "Pollution hotspot detection",
                                        "Temperature and salinity reporting",
                                        "Long-term marine trend analytics",
                                    ],
                                },
                            ].map((platform, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition"
                                >
                                    <h3 className="text-2xl font-semibold">{platform.title}</h3>
                                    <p className="mt-2 text-gray-600 font-medium">{platform.subtitle}</p>

                                    <ul className="mt-6 space-y-2 text-gray-700">
                                        {platform.specs.map((spec, i) => (
                                            <li key={i}>• {spec}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Engagement
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Maritime Autonomy for Defense and Commercial Operations
                        </h2>

                        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics delivers autonomous maritime solutions that strengthen coastal security,
                            improve port monitoring, and provide long-term environmental intelligence. Our systems are
                            designed for reliability, stealth, and performance in demanding marine conditions.
                        </p>

                        <button className="mt-12 px-10 py-4 bg-black text-white font-semibold hover:bg-gray-900 transition">
                            Request a Maritime Monitoring Consultation →
                        </button>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
