import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function DefenseSecuritySystems() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            <div className="pt-20">
                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Defense & Security Systems
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Defense & Security Systems
                        </h1>

                        {/* QUICK LINKS */}
                        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
                            {["Perimeter Security", "Reconnaissance", "Autonomous Patrol", "Secure AI Systems"].map(
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
                            Robust Robotics Defense & Security Systems delivers mission-ready autonomous platforms
                            and AI-powered surveillance solutions designed to operate in high-risk environments.
                            Our technology strengthens perimeter security, improves operational response time,
                            and provides intelligence advantages through advanced autonomy.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            We combine encrypted communication, multi-sensor payloads, edge AI processing,
                            and rugged engineering to develop reliable systems for defense organizations,
                            homeland security operations, and critical infrastructure protection.
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
                            Mission-Ready Capabilities for National Security
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Perimeter Security & Monitoring",
                                    desc: "Autonomous systems designed to detect, track, and respond to threats around defense installations, sensitive facilities, and border zones.",
                                    points: [
                                        "AI-based intrusion detection",
                                        "360-degree situational awareness",
                                        "Thermal + night monitoring systems",
                                        "Automated threat classification",
                                    ],
                                },
                                {
                                    title: "Reconnaissance & Intelligence Collection",
                                    desc: "Real-time reconnaissance solutions that provide actionable intelligence through multi-sensor fusion and AI-assisted analysis.",
                                    points: [
                                        "EO/IR payload integration",
                                        "LiDAR terrain scanning",
                                        "Encrypted video transmission",
                                        "Target tracking and mapping",
                                    ],
                                },
                                {
                                    title: "Autonomous Patrol Platforms",
                                    desc: "Autonomous ground and aerial patrol systems capable of continuous monitoring and rapid response operations in restricted zones.",
                                    points: [
                                        "Autonomous route planning",
                                        "Obstacle avoidance in hostile terrain",
                                        "Remote override and control",
                                        "Fleet coordination capabilities",
                                    ],
                                },
                                {
                                    title: "Secure AI & Cyber Defense Integration",
                                    desc: "Defense-grade AI infrastructure designed for low-latency edge computing, secure data handling, and compliance with operational security standards.",
                                    points: [
                                        "Edge AI inference processing",
                                        "Secure encryption protocols",
                                        "Role-based command access",
                                        "Tamper-resistant system design",
                                    ],
                                },
                                {
                                    title: "Critical Infrastructure Protection",
                                    desc: "Protection solutions for power grids, airports, ports, pipelines, and sensitive government infrastructure.",
                                    points: [
                                        "Threat monitoring for facilities",
                                        "Drone-based inspection support",
                                        "Automated alert escalation",
                                        "Incident reporting dashboards",
                                    ],
                                },
                                {
                                    title: "Training & Operator Readiness",
                                    desc: "Simulation-driven training tools to prepare operators for mission environments with digital twin and scenario-based testing.",
                                    points: [
                                        "Virtual mission simulation",
                                        "Digital twin testing environments",
                                        "Operational readiness programs",
                                        "Maintenance and safety training",
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

                {/* SOLUTIONS SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Product Portfolio
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Defense & Security Platforms
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "SentinelWatch ISR Drone",
                                    subtitle: "Long-endurance surveillance UAV system",
                                    specs: [
                                        "Flight endurance: 6–10 hours",
                                        "Thermal + EO sensor suite",
                                        "Encrypted communication link",
                                        "Automated patrol mission scheduling",
                                    ],
                                },
                                {
                                    title: "PerimeterGuard AI Network",
                                    subtitle: "Integrated smart perimeter monitoring",
                                    specs: [
                                        "AI intrusion detection",
                                        "Camera + radar integration",
                                        "Centralized threat dashboard",
                                        "Automated alert escalation",
                                    ],
                                },
                                {
                                    title: "Autonomous Patrol Rover",
                                    subtitle: "All-terrain ground surveillance platform",
                                    specs: [
                                        "GPS and LiDAR navigation",
                                        "Night operation support",
                                        "Payload modularity",
                                        "Remote override capability",
                                    ],
                                },
                                {
                                    title: "Secure Mission Analytics Suite",
                                    subtitle: "Command-level decision intelligence platform",
                                    specs: [
                                        "Threat heatmaps and predictive alerts",
                                        "Data fusion and reporting",
                                        "Cloud and on-premise deployment",
                                        "Multi-unit fleet coordination",
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

                {/* JOIN SECTION */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Commitment
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Engineering Trust Through Performance and Security
                        </h2>

                        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics is committed to developing defense-grade autonomous technology
                            with strict security controls, mission-first design principles, and reliability
                            in real-world operational environments.
                        </p>

                        <button className="mt-12 px-10 py-4 bg-black text-white font-semibold hover:bg-gray-900 transition">
                            Request a Defense Consultation →
                        </button>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
