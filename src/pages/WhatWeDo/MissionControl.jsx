import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function MissionControl() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            <div className="pt-20">
                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Mission Control & Command Platform
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Mission Control & Command Platform
                        </h1>

                        {/* QUICK LINKS */}
                        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
                            {["Fleet Management", "Secure Telemetry", "Mission Planning", "AI Dashboards"].map(
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
                            Robust Robotics Mission Control is a unified command and control ecosystem designed
                            to coordinate autonomous aerial, ground, and maritime platforms from a single secure interface.
                            It delivers real-time telemetry, mission planning, fleet coordination, and AI-powered operational analytics.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Built for defense operations, smart city monitoring, and commercial automation,
                            Mission Control provides an integrated software foundation for scalable autonomy.
                            Operators gain complete situational awareness, while commanders receive high-level decision intelligence.
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
                            A Unified Platform for Autonomous Operations
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Real-Time Telemetry & Monitoring",
                                    desc: "Continuous tracking of platform health, battery status, sensor output, and mission progress with real-time operational alerts.",
                                    points: [
                                        "Live mission status updates",
                                        "System health diagnostics",
                                        "Sensor data visualization",
                                        "Automated alert escalation",
                                    ],
                                },
                                {
                                    title: "Mission Planning & Scheduling",
                                    desc: "Mission planning interface with drag-and-drop waypoint configuration, patrol scheduling, and automated route optimization.",
                                    points: [
                                        "Waypoint-based mission builder",
                                        "Smart patrol scheduling",
                                        "Automated route optimization",
                                        "Multi-zone operation support",
                                    ],
                                },
                                {
                                    title: "Fleet Coordination & Multi-Robot Control",
                                    desc: "Coordinate multiple autonomous units for defense patrol, smart city monitoring, and industrial logistics operations.",
                                    points: [
                                        "Fleet coordination dashboard",
                                        "Multi-unit task assignment",
                                        "Swarm-ready coordination architecture",
                                        "Collision avoidance planning",
                                    ],
                                },
                                {
                                    title: "AI-Augmented Decision Intelligence",
                                    desc: "AI analytics for threat detection, anomaly monitoring, and predictive alerts to assist operators and commanders.",
                                    points: [
                                        "Threat heatmaps and risk zones",
                                        "AI anomaly detection engine",
                                        "Automated reporting system",
                                        "Predictive operational insights",
                                    ],
                                },
                                {
                                    title: "Secure Communication & Encryption",
                                    desc: "Defense-grade secure communication protocols with encrypted command channels and compliance-ready security controls.",
                                    points: [
                                        "End-to-end encrypted telemetry",
                                        "Role-based access control",
                                        "Secure authentication layers",
                                        "Offline deployment support",
                                    ],
                                },
                                {
                                    title: "Analytics & Reporting Suite",
                                    desc: "Historical mission replay, long-term analytics dashboards, and automated compliance reporting for smart city and defense deployments.",
                                    points: [
                                        "Mission replay functionality",
                                        "Performance analytics dashboards",
                                        "Automated compliance documentation",
                                        "Incident log export capability",
                                    ],
                                },
                            ].map((cap, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-10">
                                    <h3 className="text-2xl font-semibold">{cap.title}</h3>

                                    <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                        {cap.desc}
                                    </p>

                                    <p className="mt-6 font-semibold text-gray-900">Key Features:</p>
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

                {/* SOFTWARE MODULES */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Software Modules
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Mission Control Suite Modules
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Fleet Manager",
                                    subtitle: "Multi-robot command interface",
                                    specs: [
                                        "Fleet status tracking",
                                        "Task assignment automation",
                                        "Deployment scheduling",
                                        "Multi-unit coordination tools",
                                    ],
                                },
                                {
                                    title: "Secure Telemetry Gateway",
                                    subtitle: "Encrypted data routing platform",
                                    specs: [
                                        "Encrypted telemetry routing",
                                        "Secure authentication layers",
                                        "Role-based access controls",
                                        "Offline secure deployment support",
                                    ],
                                },
                                {
                                    title: "AI Operations Dashboard",
                                    subtitle: "Decision intelligence and analytics",
                                    specs: [
                                        "Threat detection heatmaps",
                                        "AI anomaly detection reporting",
                                        "Automated incident logging",
                                        "Predictive mission intelligence",
                                    ],
                                },
                                {
                                    title: "Mission Planner Pro",
                                    subtitle: "Waypoint and patrol planning system",
                                    specs: [
                                        "Drag-and-drop waypoint builder",
                                        "Dynamic rerouting support",
                                        "Geo-fencing and restricted zones",
                                        "Route optimization algorithms",
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
                            Command Autonomy With Precision and Control
                        </h2>

                        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-6xl">
                            Mission Control enables full operational visibility and secure autonomous deployment across
                            smart cities, defense zones, and commercial industries. Our platform is engineered for mission success,
                            scalability, and high-security operational environments.
                        </p>

                        <button className="mt-12 px-10 py-4 bg-black text-white font-semibold hover:bg-gray-900 transition">
                            Request a Mission Control Demo →
                        </button>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
